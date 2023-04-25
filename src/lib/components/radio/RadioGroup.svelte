<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let name: string;
	export let type: 'default' | 'pill' = 'default';
	export let selected: string | undefined = undefined;

	// TODO: allow changing radio color via prop

	let selectedRadio = writable(selected);

	let list: HTMLUListElement;
	// eslint-disable-next-line no-undef
	let items: NodeListOf<HTMLLIElement> | never[] = [];
	let focusIndex = 0;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Spacebar') {
			e.preventDefault();
			e.stopPropagation();
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			e.stopPropagation();
			focusIndex = focusIndex > 0 ? focusIndex - 1 : items.length - 1;
			const target = items[focusIndex];
			const input = target.querySelector('input');
			input?.focus();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			e.stopPropagation();
			focusIndex = focusIndex < items.length - 1 ? focusIndex + 1 : 0;
			const target = items[focusIndex];
			const input = target.querySelector('input');
			input?.focus();
		}
	}

	const defaultClass = 'mt-1 grid-cols-4 gap-2';
	const defaultType = 'space-y-4';
	const pillType = 'grid';

	$: finalClass = twMerge(
		defaultClass,

		type === 'default' ? defaultType : false,
		type === 'pill' ? pillType : false,

		$$props.class
	);

	setContext('radio-name', name);
	setContext('radio-type', type);
	setContext('radio-selected', selectedRadio);

	onMount(() => {
		items = list.querySelectorAll('li');
		// items[focusIndex].focus();
	});
</script>

<div>
	<slot name="label" />
	<ul
		bind:this={list}
		class={finalClass}
		style={$$props.style}
		on:keydown={handleKeydown}
		tabindex="-1"
	>
		<slot />
	</ul>
</div>
