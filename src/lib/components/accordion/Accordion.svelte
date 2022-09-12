<script lang="ts" context="module">
	export const ACCORDION_CONTEXT_ID = 'accordion-context-name';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let openItems: string[] = [];
	export let onlyOne = false;

	let activeItems = writable(openItems);

	setContext(ACCORDION_CONTEXT_ID, {
		accordion: true,
		openItems: activeItems,
		onlyOne
	});
</script>

<div class="rounded-md">
	<slot />
</div>
