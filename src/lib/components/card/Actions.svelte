<script lang="ts" context="module">
	export const CARD_ACTIONS_CONTEXT_ID = 'card-actions-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext, getContext } from 'svelte';
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
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

	const { divided }: { divided: boolean } = getContext(CARD_CONTEXT_ID);

	const defaultClass =
		'flex flex-row h-14 justify-evenly divide-x divide-light-icon-background dark:divide-dark-icon-background first:rounded-t-md last:rounded-b-md border border-l-0 border-b-0 border-r-0';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:border-t={divided}
	class:light-border={divided}
	class:dark:dark-border={divided}
	class:last:border-t-none={divided}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
