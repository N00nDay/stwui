<script lang="ts">
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let noPadding = false;

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'CardContent'
	});
</script>

<div
	class="first:rounded-t-md last:rounded-b-md{$$props.class ? ` ${$$props.class}` : ''}"
	class:px-4={!noPadding}
	class:py-5={!noPadding}
	class:sm:px-6={!noPadding}
	class:p-0={noPadding}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
