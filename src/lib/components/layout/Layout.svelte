<script lang="ts" context="module">
	export const LAYOUT_CONTEXT_ID = 'layout-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let sideBarWidth = writable('212');

	function toggleSidebarWidth() {
		if ($sideBarWidth === '212') {
			$sideBarWidth = '72';
		} else {
			$sideBarWidth = '212';
		}
	}

	setContext(LAYOUT_CONTEXT_ID, {
		layout: true,
		sideBarWidth,
		toggleSidebarWidth
	});

	const defaultClass = 'w-full h-full flex flex-col';
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
