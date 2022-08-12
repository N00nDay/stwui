<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export const MEDIA_CONTEXT_NAME = 'media-context-name';

	export function useMediaContext(component: string) {
		let context = getContext(MEDIA_CONTEXT_NAME);
		if (context === undefined) {
			console.warn(`<${component} /> is missing a parent <Media /> component.`);
		}
		return context;
	}
</script>

<script lang="ts">
	setContext(MEDIA_CONTEXT_NAME, {
		media: true
	});
</script>

<div class="flex{$$props.class ? ` ${$$props.class}` : ''}">
	<slot />
</div>
