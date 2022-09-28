<script lang="ts">
	import { page } from '$app/stores';
	import { tooltip } from '../tooltip';
	import HoverBackground from '../HoverBackground.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { MENU_CONTEXT_ID } from './Menu.svelte';

	export let label: string;
	export let href: string;
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

<div class="transition-all duration-300" style="width: {$menuCollapse ? '3rem' : '100%'}">
	<a
		use:tooltip={{
			placement: 'right',
			content: label,
			arrow: false,
			animation: 'scale',
			disabled: !$menuCollapse
		}}
		{href}
		class="group relative w-full h-10 overflow-hidden flex items-center justify-start px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
		class:text-light-content={active}
		class:dark:text-dark-content={active}
		class:text-light-secondary-content={!active}
		class:dark:text-dark-secondary-content={!active}
		class:hover:text-light-content={!active}
		class:dark:hover:text-dark-content={!active}
		class:bg-light-icon-background-hover={active}
		class:dark:bg-dark-icon-background-hover={active}
	>
		<span class="flex items-center justify-start flex-grow">
			<slot name="icon" />
			<span class="truncate">{label}</span>
		</span>

		<slot name="extra" />
		<HoverBackground class="rounded-md" />
	</a>
</div>
