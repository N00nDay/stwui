<script lang="ts" context="module">
	export const LAYOUT_HEADER_CONTEXT_ID = 'layout-header-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'LayoutHeader'
	});
	setContext(LAYOUT_HEADER_CONTEXT_ID, {
		header: true
	});
</script>

<header
	class="hidden md:flex sticky top-0 z-10 pt-3 pb-2 pl-[calc(var(--sal)+1rem)] pr-[calc(var(--sar)+1rem)] w-full flex-row h-16 min-h-[64px] max-h-16 flex-shrink items-center transition-all duration-150 bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content shadow-md dark:shadow-black flex-1{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />

	<slot name="extras" />
</header>
