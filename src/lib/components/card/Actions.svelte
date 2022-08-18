<script lang="ts" context="module">
	export const CARD_ACTIONS_CONTEXT_ID = 'card-actions-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'CardActions'
	});

	setContext(CARD_ACTIONS_CONTEXT_ID, {
		actions: true
	});
</script>

<div
	class="flex flex-row h-14 justify-evenly divide-x divide-gray-200 dark:divide-gray-700 first:rounded-t-md last:rounded-b-md{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
