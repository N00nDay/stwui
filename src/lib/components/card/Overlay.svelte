<script lang="ts">
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { CARD_COVER_CONTEXT_ID } from './Cover.svelte';
	import { useContext } from '../../utils/useContext';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'Card.CoverOverlay'
	});
	useContext({
		context_id: CARD_COVER_CONTEXT_ID,
		parent: 'Card.Cover',
		component: 'Card.CoverOverlay'
	});

	export let verticalAlign: 'top' | 'center' | 'bottom' = 'bottom';
	export let horizontalAlign: 'left' | 'center' | 'right' = 'left';

	const defaultClass =
		'bg-light-background bg-opacity-70 dark:bg-opacity-70 dark:bg-dark-background px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-md absolute inset-0 flex flex-col';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:items-center={horizontalAlign === 'center'}
	class:justify-center={verticalAlign === 'center'}
	class:items-start={horizontalAlign === 'left'}
	class:items-end={horizontalAlign === 'right'}
	class:justify-start={verticalAlign === 'top'}
	class:justify-end={verticalAlign === 'bottom'}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
