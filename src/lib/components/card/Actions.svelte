<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export const CARD_ACTIONS_CONTEXT_NAME = 'card-actions-context-name';

	export function useCardActionsContext(component: string) {
		let context = getContext(CARD_ACTIONS_CONTEXT_NAME);
		if (context === undefined) {
			throw new Error(`<${component} /> is missing a parent <CardActions /> component.`);
		}
		return context;
	}
</script>

<script lang="ts">
	import { useCardContext } from './Card.svelte';

	useCardContext('CardActions');
	setContext(CARD_ACTIONS_CONTEXT_NAME, {
		actions: true
	});
</script>

<div
	class="flex flex-row justify-evenly divide-x divide-gray-200 first:rounded-t-md last:rounded-b-rounded-b-md{$$props.class
		? ` ${$$props.class}`
		: ''}"
>
	<slot />
</div>
