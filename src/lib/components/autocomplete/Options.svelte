<script lang="ts">
	import { scale } from 'svelte/transition';
	import { get_current_component, getContext, onMount } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let list: HTMLUListElement;
	// eslint-disable-next-line no-undef
	let items: NodeListOf<HTMLLIElement> | never[] = [];
	let focusIndex = 0;
	let arrowPressedOnce = false;

	const handleClose: () => void = getContext('autocomplete-handleClose');

	function handleKeydown(e: KeyboardEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (e.key === 'ArrowUp') {
			if (!arrowPressedOnce) {
				items[focusIndex].focus();
			} else {
				focusIndex = focusIndex > 0 ? focusIndex - 1 : items.length - 1;
				items[focusIndex].focus();
			}
			arrowPressedOnce = true;
		} else if (e.key === 'ArrowDown') {
			if (!arrowPressedOnce) {
				items[focusIndex].focus();
			} else {
				focusIndex = focusIndex < items.length - 1 ? focusIndex + 1 : 0;
				items[focusIndex].focus();
			}
			arrowPressedOnce = true;
		} else if (e.key === 'Enter') {
			console.log('Enter FIRED');
		} else if (e.key === 'Escape') {
			handleClose();
		}
	}

	const defaultclass =
		'origin-top-right absolute mt-1 z-10 border border-border left-0 right-0 w-full p-1 rounded-md shadow-xl py-1 bg-surface transition transform duration-150';
	$: finalClass = twMerge(defaultclass, $$props.class);

	onMount(() => {
		items = list.querySelectorAll('li');
		// items[focusIndex].focus();
	});
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} />

<ul
	bind:this={list}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	in:scale={{ start: 0.9, duration: 150 }}
	out:scale={{ start: 0.95, duration: 150 }}
	role="listbox"
>
	<slot />
</ul>
