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
		component: 'CardHeader'
	});
	const { divided } = getContext(CARD_CONTEXT_ID);
</script>

<div
	class="first:rounded-t-md last:rounded-b-md px-4 py-5 sm:px-6 h-16 border border-l-0 border-t-0 border-r-0{$$slots.extras
		? ' flex flex-row items-center justify-between'
		: ''}{$$props.class ? ` ${$$props.class}` : ''}"
	class:border-b={divided}
	class:light-border={divided}
	class:dark:dark-border={divided}
	class:last:border-b-none={divided}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
	<slot name="extras" />
</div>
