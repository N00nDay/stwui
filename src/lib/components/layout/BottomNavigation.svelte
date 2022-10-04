<script lang="ts" context="module">
	export const BOTTOM_NAVIGATION_CONTEXT_ID = 'bottom-navigation-context-id';
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
		component: 'BottomNavigation'
	});
	setContext(BOTTOM_NAVIGATION_CONTEXT_ID, {
		bottomNavigation: true
	});

	const defaultClass =
		'w-full h-16 sticky bottom-0 left-0 right-0 bg-light-surface dark:bg-dark-surface shadow-negative-md dark:shadow-black z-10 md:hidden flex items-center justify-evenly';
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
