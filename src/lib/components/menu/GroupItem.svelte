<script lang="ts">
	import { page } from '$app/stores';
	import HoverBackground from '../HoverBackground.svelte';
	import { getContext } from 'svelte';
	import { MENU_CONTEXT_ID } from './Menu.svelte';
	import type { Writable } from 'svelte/store';

	export let href: string;
	export let label: string;
	export let active = false;

	const {
		menuCollapse,
		showActiveByURL
	}: {
		menuCollapse: Writable<boolean>;
		showActiveByURL: boolean;
	} = getContext(MENU_CONTEXT_ID);

	if (showActiveByURL) {
		setActiveItems();
	}

	$: if (showActiveByURL && $page) {
		setActiveItems();
	}

	function setActiveItems() {
		if ($page.url.pathname.includes(href) || $page.url.hash.includes(href)) {
			active = true;
		} else {
			active = false;
		}
	}
</script>

<a
	{href}
	class="group relative flex items-center min-w-full h-10 px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
	class:text-light-content={active}
	class:dark:text-dark-content={active}
	class:text-light-secondary-content={!active}
	class:dark:text-dark-secondary-content={!active}
	class:hover:text-light-content={!active}
	class:dark:hover:text-dark-content={!active}
	class:bg-light-icon-background-hover={active}
	class:dark:bg-dark-icon-background-hover={active}
>
	{#if !$menuCollapse}
		<span class="w-6 mr-2" />
	{/if}
	<span class="truncate ">{label}</span>
	<HoverBackground class="rounded-md" />
</a>
