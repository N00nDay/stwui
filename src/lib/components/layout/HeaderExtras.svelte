<script lang="ts">
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { LAYOUT_HEADER_CONTEXT_ID } from './Header.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'HeaderExtras'
	});
	useContext({
		context_id: LAYOUT_HEADER_CONTEXT_ID,
		parent: 'LayoutHeader',
		component: 'HeaderExtras'
	});
</script>

<div
	class=" flex-grow flex flex-row items-center justify-end"
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
