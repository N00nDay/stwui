<script lang="ts" context="module">
	import type { MaterialIcon } from '../../types';
	export interface IBottomNavigationItem {
		onClick: () => void;
		icon: MaterialIcon;
		label: string;
	}
</script>

<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { BOTTOM_NAVIGATION_CONTEXT_ID } from './BottomNavigation.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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

	import HoverBackground from '../HoverBackground.svelte';
	import { twMerge } from 'tailwind-merge';

	export let icon: string | undefined = undefined;
	export let label: string | undefined = undefined;

	const defaultClass =
		'relative h-full w-full flex flex-col items-center justify-center cursor-pointer group bg-light-surface dark:bg-dark-surface active:hover:animate-none active:hover:scale-95 text-light-secondary-content dark:text-dark-secondary-content hover:text-light-content dark:hover:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
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
