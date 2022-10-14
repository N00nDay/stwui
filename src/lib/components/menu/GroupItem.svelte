<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { getContext } from 'svelte';
	import { MENU_CONTEXT_ID } from './Menu.svelte';
	import { MENU_GROUP_CONTEXT_ID } from './Group.svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '$lib/utils/useContext';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let href: string;
	export let label: string;
	export let key: string;

	useContext({
		context_id: MENU_CONTEXT_ID,
		parent: 'Menu',
		component: 'Menu.Group.Item'
	});

	useContext({
		context_id: MENU_GROUP_CONTEXT_ID,
		parent: 'Menu.Group',
		component: 'Menu.Group.Item'
	});

	const {
		menuCollapse,
		activeItem
	}: {
		menuCollapse: Writable<boolean>;
		activeItem: Writable<string>;
	} = getContext(MENU_CONTEXT_ID);

	const { groupKey }: { groupKey: string } = getContext(MENU_GROUP_CONTEXT_ID);

	$: active = $activeItem === `${groupKey}-${key}`;

	const defaultClass =
		'group relative flex items-center min-w-full h-10 px-3 py-2 text-sm font-medium rounded-md';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<a
	{href}
	class={finalClass}
	class:text-light-content={active}
	class:dark:text-dark-content={active}
	class:text-light-secondary-content={!active}
	class:dark:text-dark-secondary-content={!active}
	class:hover:text-light-content={!active}
	class:dark:hover:text-dark-content={!active}
	class:bg-light-icon-background-hover={active}
	class:dark:bg-dark-icon-background-hover={active}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'href'])}
>
	{#if !$menuCollapse}
		<span class="w-6 mr-2" />
	{/if}
	<span class="truncate ">{label}</span>
	<HoverBackground class="rounded-md" />
</a>
