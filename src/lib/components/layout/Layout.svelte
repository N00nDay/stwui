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

	const defaultClass = 'w-full h-full flex flex-col';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('sideBarWidth', sideBarWidth);
	setContext('toggleSidebarWidth', toggleSidebarWidth);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
