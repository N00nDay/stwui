<script lang="ts">
	import { twMerge } from 'tailwind-merge';
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
		component: 'Card.Content'
	});

	const defaultClass = 'first:rounded-t-md last:rounded-b-md px-4 py-5 sm:px-6';
	$: finalClass = twMerge(defaultClass, $$props.class);
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
