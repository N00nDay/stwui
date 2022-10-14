<script lang="ts" context="module">
	export const LAYOUT_CONTENT_CONTEXT_ID = 'layout-content-context-id';
</script>

<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { setContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let collapsed = false;
	export let collapsedWidth = '4.5rem';
	export let expandedWidth = '12rem';

	let sidebarCollapsed = writable(collapsed);
	let cWidth = writable(collapsedWidth);
	let eWidth = writable(expandedWidth);

	$: sidebarCollapsed.set(collapsed);
	$: cWidth.set(collapsedWidth);
	$: eWidth.set(expandedWidth);

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'Layout.Content'
	});

	setContext(LAYOUT_CONTENT_CONTEXT_ID, {
		content: true,
		collapsed: sidebarCollapsed,
		collapsedWidth: cWidth,
		expandedWidth: eWidth
	});

	const defaultClass = 'flex flex-row w-full h-full items-start justify-start';
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
