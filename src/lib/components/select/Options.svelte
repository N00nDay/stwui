<script lang="ts">
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component, onMount, getContext } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let list: HTMLUListElement;
	// eslint-disable-next-line no-undef
	let items: NodeListOf<HTMLLIElement> | never[] = [];
	let focusIndex = 0;

	const handleClose: () => void = getContext('select-handleClose');

	function handleKeydown(e: KeyboardEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (e.key === 'ArrowUp') {
			focusIndex = focusIndex > 0 ? focusIndex - 1 : items.length - 1;
			items[focusIndex].focus();
		} else if (e.key === 'ArrowDown') {
			focusIndex = focusIndex < items.length - 1 ? focusIndex + 1 : 0;
			items[focusIndex].focus();
		} else if (e.key === 'Enter') {
			console.log('Enter FIRED');
		} else if (e.key === 'Escape') {
			handleClose();
		}
	}

	const defaultClass =
		'origin-top-right absolute z-10 border border-border left-0 right-0 w-full mt-1 p-1 rounded-md shadow-xl py-1 bg-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);

	onMount(() => {
		items = list.querySelectorAll('li');
		items[focusIndex].focus();
	});
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} />

<ul
	bind:this={list}
	class={finalClass}
	in:scale={{ start: 0.9, duration: 100, delay: 150 }}
	out:scale={{ start: 0.95, duration: 75 }}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	role="listbox"
>
	<slot />
</ul>
