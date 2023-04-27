<script lang="ts">
	import { scale } from 'svelte/transition';
	import { get_current_component, getContext, onMount } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	export let alignment: 'start' | 'center' | 'end' = 'start';
	export let offset = 2;

	let list: HTMLUListElement;
	// eslint-disable-next-line no-undef
	let items: NodeListOf<HTMLLIElement> | never[] = [];
	let focusIndex = 0;

	const handleClose: () => void = getContext('dropdown-handleClose');

	function handleKeydown(e: KeyboardEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (e.key === 'ArrowUp') {
			focusIndex = focusIndex > 0 ? focusIndex - 1 : items.length - 1;
			if (items && items[focusIndex]) items[focusIndex].focus();
		} else if (e.key === 'ArrowDown') {
			focusIndex = focusIndex < items.length - 1 ? focusIndex + 1 : 0;
			if (items && items[focusIndex]) items[focusIndex].focus();
		} else if (e.key === 'Escape') {
			handleClose();
		}
	}

	const defaultClass =
		'origin-top-right absolute z-10 border border-border w-56 p-1 rounded-md shadow-xl py-1 bg-surface';
	let positioning: string;

	if (placement === 'top') {
		positioning = twMerge(
			`mb-${offset} `,
			alignment === 'start'
				? 'left-0 bottom-full'
				: alignment === 'center'
				? 'left-1/2 -translate-x-1/2 bottom-full'
				: 'right-0 bottom-full'
		);
	} else if (placement === 'bottom') {
		positioning = twMerge(
			`mt-${offset} `,
			alignment === 'start'
				? 'left-0 top-full'
				: alignment === 'center'
				? 'left-1/2 -translate-x-1/2 top-full'
				: 'right-0 top-full'
		);
	} else if (placement === 'left') {
		positioning = twMerge(
			`mr-${offset}`,
			alignment === 'start'
				? 'right-full top-0'
				: alignment === 'center'
				? 'right-full -translate-y-1/2 top-1/2'
				: 'right-full bottom-0'
		);
	} else {
		positioning = twMerge(
			`ml-${offset}`,
			alignment === 'start'
				? 'left-full top-0'
				: alignment === 'center'
				? 'left-full -translate-y-1/2 top-1/2'
				: 'left-full bottom-0'
		);
	}

	$: finalClass = twMerge(defaultClass, positioning, $$props.class);

	onMount(() => {
		items = list.querySelectorAll('li');
		if (items && items[focusIndex]) items[focusIndex].focus();
	});
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} />

<ul
	bind:this={list}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	in:scale={{ start: 0.9, duration: 100, delay: 150 }}
	out:scale={{ start: 0.95, duration: 75 }}
	role="menu"
	tabindex="-1"
>
	<slot />
</ul>
