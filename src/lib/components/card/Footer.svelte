<script lang="ts">
	import { getContext } from 'svelte';
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
		component: 'CardFooter'
	});
	const { divided } = getContext(CARD_CONTEXT_ID);
</script>

<div
	class="px-4 py-5 sm:px-6 h-16 first:rounded-t-md last:rounded-b-md border border-l-0 border-b-0 border-r-0{$$props.class
		? ` ${$$props.class}`
		: ''}"
	class:border-t-light-icon-background={divided}
	class:dark:border-t-dark-icon-background={divided}
	class:last:border-t-none={divided}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
