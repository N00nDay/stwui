<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface MenuItem {
		icon?: MaterialIcons;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
	}
</script>

<script lang="ts">
	import { Badge } from '../badge';
	import HoverBackground from '../HoverBackground.svelte';

	export let items: MenuItem[] = [];
	export let activeItem: string | undefined = undefined;
</script>

<nav class="space-y-1" aria-label="Sidebar">
	{#each items as item}
		<a
			href={item.href}
			class="group relative flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
			class:text-light-content={item.label === activeItem}
			class:dark:text-dark-content={item.label === activeItem}
			class:text-light-secondary-content={item.label !== activeItem}
			class:dark:text-dark-secondary-content={item.label !== activeItem}
			class:hover:text-light-content={item.label !== activeItem}
			class:dark:hover:text-dark-content={item.label !== activeItem}
			class:bg-light-icon-background-hover={item.label === activeItem}
			class:dark:bg-dark-icon-background-hover={item.label === activeItem}
		>
			{#if item.icon}
				<span class="material-icons mr-2">{item.icon}</span>
			{/if}
			<span class="truncate">{item.label}</span>

			{#if item.badge}
				<Badge type={item.badgeType} class="ml-auto">{item.badge}</Badge>
			{/if}
			<HoverBackground class="rounded-md" />
		</a>
	{/each}
</nav>
