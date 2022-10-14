<script lang="ts" context="module">
	export const MEDIA_CONTEXT_ID = 'media-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	setContext(MEDIA_CONTEXT_ID, {
		media: true
	});

	const defaultClass = 'flex';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="avatar" />
	<slot name="content" />
	<slot />
</div>
