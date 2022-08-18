<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';
	export interface IBottomNavigationItem {
		onClick: () => void;
		icon: MaterialIcons;
		label: string;
	}
</script>

<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { BOTTOM_NAVIGATION_CONTEXT_ID } from './BottomNavigation.svelte';

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'BottomNavigationCreateItem'
	});
	useContext({
		context_id: BOTTOM_NAVIGATION_CONTEXT_ID,
		parent: 'BottomNavigation',
		component: 'BottomNavigationCreateItem'
	});

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	import HoverBackground from '@components/HoverBackground.svelte';

	export let icon: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let use: ActionArray = [];

	const forwardEvents = forwardEventsBuilder(current_component);
</script>

<div
	on:click
	class="relative h-full w-full flex flex-col items-center justify-center cursor-pointer group bg-light-surface dark:bg-dark-surface transition-all duration-150 active:hover:animate-none active:hover:scale-95 text-light-secondary-content dark:text-dark-secondary-content hover:text-light-content dark:hover:text-dark-content"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if icon}
		<span class="relative z-10 material-icons">{icon}</span>
	{/if}
	{#if label}
		<span class="relative z-10  text-xs">{label}</span>
	{/if}
	<slot />
	<HoverBackground />
</div>
