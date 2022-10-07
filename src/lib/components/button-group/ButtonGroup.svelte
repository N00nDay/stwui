<script lang="ts" context="module">
	export const BUTTON_GROUP_CONTEXT_ID = 'button-group-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export let block = false;

	setContext(BUTTON_GROUP_CONTEXT_ID, {
		group: true,
		block
	});

	let defaultClass = 'relative z-0 inline-flex shadow-md dark:shadow-black rounded-md';
	if (block) {
		defaultClass += ' w-full';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>
	<slot />
</span>
