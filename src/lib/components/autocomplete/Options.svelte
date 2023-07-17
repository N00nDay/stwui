<script lang="ts">
	import { scale } from 'svelte/transition';
	import { get_current_component, getContext, onMount } from 'svelte/internal';
	import { floatingUI, forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let list: HTMLUListElement;
	// eslint-disable-next-line no-undef
	let items: NodeListOf<HTMLLIElement> | never[] = [];
	let focusIndex = 0;
	let arrowPressedOnce = false;

	const handleClose: () => void = getContext('autocomplete-handleClose');
	const mobile: Writable<boolean> = getContext('autocomplete-mobile');

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowUp') {
			if (!arrowPressedOnce) {
				items[focusIndex].focus();
			} else {
				focusIndex = focusIndex > 0 ? focusIndex - 1 : items.length - 1;
				if (items[focusIndex]) items[focusIndex].focus();
			}
			arrowPressedOnce = true;
			e.preventDefault();
			e.stopPropagation();
		} else if (e.key === 'ArrowDown') {
			if (!arrowPressedOnce) {
				items[focusIndex].focus();
			} else {
				focusIndex = focusIndex < items.length - 1 ? focusIndex + 1 : 0;
				if (items[focusIndex]) items[focusIndex].focus();
			}
			arrowPressedOnce = true;
			e.preventDefault();
			e.stopPropagation();
		} else if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
		} else if (e.key === 'Escape') {
			e.preventDefault();
			e.stopPropagation();
			handleClose();
		}
	}

	let defaultClass = 'w-full bg-surface';
	$: if ($mobile) {
		defaultClass += ' h-full px-3 space-y-1';
	} else {
		defaultClass +=
			' p-1 shadow-xl border border-border rounded-md origin-top-right absolute z-10 left-0 right-0 transition transform duration-150';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);

	onMount(() => {
		items = list.querySelectorAll('li');
	});
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $mobile}
	<ul
		bind:this={list}
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
		role="listbox"
	>
		<slot />
		<div class="w-full h-2" />
	</ul>
{:else}
	<ul
		bind:this={list}
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		use:floatingUI={{ placement: 'bottom-start', offset: 8 }}
		{...exclude($$props, ['use', 'class'])}
		in:scale={{ start: 0.9, duration: 150 }}
		out:scale={{ start: 0.95, duration: 150 }}
		role="listbox"
	>
		<slot />
	</ul>
{/if}
