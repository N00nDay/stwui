<script lang="ts">
	import { setContext } from 'svelte';
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

	const defaultClass = 'flex flex-row w-full h-full items-start justify-start stwui-layout-content';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('layout-collapsed', sidebarCollapsed);
	setContext('collapsedWidth', cWidth);
	setContext('expandedWidth', eWidth);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
