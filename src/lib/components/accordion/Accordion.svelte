<script lang="ts" context="module">
	export const ACCORDION_CONTEXT_ID = 'accordion-context-name';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	setContext(ACCORDION_CONTEXT_ID, {
		accordion: true
	});

	const defaultClass = 'rounded-md';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
