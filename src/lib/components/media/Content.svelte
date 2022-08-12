<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export const MEDIA_CONTENT_CONTEXT_NAME = 'media-content-context-name';

	export function useMediaContentContext(component: string) {
		let context = getContext(MEDIA_CONTENT_CONTEXT_NAME);
		if (context === undefined) {
			console.warn(`<${component} /> is missing a parent <MediaContent /> component.`);
		}
		return context;
	}
</script>

<script lang="ts">
	import { useMediaContext } from './Media.svelte';

	useMediaContext('MediaContent');
	setContext(MEDIA_CONTENT_CONTEXT_NAME, {
		content: true
	});
</script>

<div class={$$props.class ? $$props.class : ''}>
	<slot />
</div>
