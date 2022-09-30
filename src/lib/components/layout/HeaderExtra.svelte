<script lang="ts">
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { LAYOUT_HEADER_CONTEXT_ID } from './Header.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'Header.Extra'
	});
	useContext({
		context_id: LAYOUT_HEADER_CONTEXT_ID,
		parent: 'Layout.Header',
		component: 'Header.Extra'
	});

	const defaultClass = 'flex-grow flex flex-row items-center justify-end';
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
