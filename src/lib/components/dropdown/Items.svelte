<script lang="ts">
	import { scale } from 'svelte/transition';
	import { get_current_component, getContext, onMount } from 'svelte/internal';
	import { floatingUI, forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';

	import type { Placement } from '@floating-ui/dom';

	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let placement: Placement = 'bottom-start';
	export let offset = 8;

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
		'floating-ui-el origin-top-right absolute z-10 border border-border w-56 p-1 rounded-md shadow-xl py-1 bg-surface stwui-dropdown-items';

	$: finalClass = twMerge(defaultClass, $$props.class);

	onMount(() => {
		items = list.querySelectorAll('li');
		if (items && items[focusIndex]) items[focusIndex].focus();
	});
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} />

<ul
	bind:this={list}
	class={finalClass}
	use:floatingUI={{ placement, offset }}
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
