<script lang="ts" context="module">
	export const CARD_COVER_CONTEXT_ID = 'card-cover-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { CARD_CONTEXT_ID } from './Card.svelte';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'Card.Cover'
	});

	setContext(CARD_COVER_CONTEXT_ID, {
		cover: true
	});

	const defaultClass =
		'mt-[-1px] mr-[-1px] ml-[-1px] last:h-[calc(100%+2px)] first:rounded-t-md last:rounded-b-md overflow-hidden';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
