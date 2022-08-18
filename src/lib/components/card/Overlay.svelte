<script lang="ts">
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { CARD_COVER_CONTEXT_ID } from './Cover.svelte';
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
		component: 'CardCoverOverlay'
	});
	useContext({
		context_id: CARD_COVER_CONTEXT_ID,
		parent: 'CardCover',
		component: 'CardCoverOverlay'
	});

	export let verticalAlign: 'top' | 'center' | 'bottom' = 'bottom';
	export let horizontalAlign: 'left' | 'center' | 'right' = 'left';
</script>

<div
	class="bg-light-background bg-opacity-70 dark:bg-opacity-70 dark:bg-dark-background transition-all duration-150 px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-md absolute inset-0 flex flex-col{$$props.class
		? ` ${$$props.class}`
		: ''}"
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
