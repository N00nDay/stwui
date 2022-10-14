<script lang="ts">
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { LAYOUT_HEADER_CONTEXT_ID } from './Header.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
