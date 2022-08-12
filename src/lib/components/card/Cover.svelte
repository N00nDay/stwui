<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export const CARD_COVER_CONTEXT_NAME = 'card-cover-context-name';

	export function useCardCoverContext(component: string) {
		let context = getContext(CARD_COVER_CONTEXT_NAME);
		if (context === undefined) {
			console.warn(`<${component} /> is missing a parent <CardCover /> component.`);
		}
		return context;
	}
</script>

<script lang="ts">
	import { useCardContext } from './Card.svelte';

	useCardContext('CardConver');
	setContext(CARD_COVER_CONTEXT_NAME, {
		cover: true
	});
</script>

<div
	class="mt-[-1px] mr-[-1px] ml-[-1px] last:h-[calc(100%+2px)] first:rounded-t-md last:rounded-b-rounded-b-md overflow-hidden{$$props.class
		? ` ${$$props.class}`
		: ''}"
>
	<slot />
</div>
