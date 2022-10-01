<script lang="ts" context="module">
	export const ACCORDION_CONTEXT_ID = 'accordion-context-name';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let openItems: number[] = [];
	export let onlyOne = false;

	let activeItems = writable(openItems);

	setContext(ACCORDION_CONTEXT_ID, {
		accordion: true,
		openItems: activeItems,
		onlyOne
	});

	const defaultClass = 'rounded-md';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
