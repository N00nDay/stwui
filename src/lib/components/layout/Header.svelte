<script lang="ts" context="module">
	export const LAYOUT_HEADER_CONTEXT_ID = 'layout-header-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
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

	const defaultClass =
		'hidden md:flex sticky top-0 z-10 pt-3 pb-2 pl-[calc(var(--sal)+1rem)] pr-[calc(var(--sar)+1rem)] w-full flex-row h-16 min-h-[64px] max-h-16 flex-shrink items-center transition-all duration-150 bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content shadow-md dark:shadow-black flex-1';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<header
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />

	<slot name="extra" />
</header>
