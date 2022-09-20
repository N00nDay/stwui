<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	interface Child {
		label: string;
		href: string;
	}

	export interface MenuItem {
		icon?: MaterialIcons;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
		children?: Child[];
	}
</script>

<script lang="ts">
	import { tooltip } from '../tooltip';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { slide, scale, type TransitionConfig } from 'svelte/transition';
	import Badge from '../badge';
	import HoverBackground from '../HoverBackground.svelte';

	export let items: MenuItem[] = [];
	export let activeItem: string | undefined = undefined;
	export let useUrl = true;
	export let openItems: string[] = [];
	export let onlyOne = false;
	export let collapsed = false;

	let activeItems = writable([activeItem]);
	let activeMenus = writable(openItems);
	let forceCollapse: boolean;
	let collapsable: HTMLDivElement;

	if (useUrl) {
		setActiveItems();
	}

	let allChildren: { parent: string; child: string }[] = [];

	for (const item of items) {
		if (item.children && item.children.length > 0) {
			for (const child of item.children) {
				allChildren.push({
					parent: item.href,
					child: child.href
				});
			}
		}
	}

	const activeChildren = allChildren.filter((ac) => $activeItems.includes(ac.child));
	if (activeChildren) {
		for (const activeChild of activeChildren) {
			activeMenus.update((current) => [...current, activeChild.parent]);
		}
	} else {
		activeMenus.update(() => []);
	}

	function toggleOpen(href: string, e: Event) {
		if (collapsed) {
			if (collapsable === e.target) {
				activeMenus.update(() => []);
			} else {
				activeMenus.update(() => [href]);
			}
		} else if (onlyOne) {
			if ($activeMenus.includes(href)) {
				activeMenus.update(() => []);
			} else {
				activeMenus.update(() => [href]);
			}
		} else {
			if ($activeMenus.includes(href)) {
				activeMenus.update((current) => {
					const index = current.indexOf(href);
					if (index > -1) {
						current.splice(index, 1);
					}
					return current;
				});
			} else {
				activeMenus.update((current) => {
					current.push(href);
					return current;
				});
			}
		}
	}

	function transition(node: HTMLElement, config: TransitionConfig) {
		if (collapsed && !forceCollapse) {
			return scale(node, {
				start: 0.95
			});
		} else if (collapsable && forceCollapse) {
			forceCollapse = false;
			return scale(node, {
				duration: 0
			});
		} else {
			return slide(node);
		}
	}

	$: if (useUrl && $page) {
		setActiveItems();
	}

	function setActiveItems() {
		const url = $page.url;
		activeItems.update(() => []);
		for (const item of items) {
			let skip = false;
			if (item.children && item.children.length > 0) {
				for (const child of item.children) {
					if (url.pathname.includes(child.href)) {
						activeItems.update((current) => [...current, child.href, item.href]);
						skip = true;
					}
					if (url.hash.includes(child.href)) {
						activeItems.update((current) => [...current, child.href, item.href]);
						skip = true;
					}
				}
			}

			if (!skip && url.pathname.includes(item.href)) {
				activeItems.update((current) => [...current, item.href]);
			}
			if (!skip && url.hash.includes(item.href)) {
				activeItems.update((current) => [...current, item.href]);
			}
		}
	}

	$: if (collapsed) {
		forceCollapse = true;
		activeMenus.update(() => []);
	}
</script>

<nav class="space-y-1 transition-all duration-300" style="width: {collapsed ? '3rem' : '100%'}">
	{#each items as item}
		{#if item.children && item.children.length > 0}
			<div
				bind:this={collapsable}
				class="relative w-full"
				on:mouseover={collapsed ? (e) => toggleOpen(item.href, e) : undefined}
				on:focus={collapsed ? (e) => toggleOpen(item.href, e) : undefined}
				on:mouseleave={collapsed ? (e) => toggleOpen(item.href, e) : undefined}
			>
				<div class="transition-all duration-300" style="width: {collapsed ? '3rem' : '100%'}">
					<h2
						class="group relative m-0 w-full outline-none rounded-md focus:outline-none overflow-hidden transition-all duration-150"
						class:text-light-content={$activeMenus.includes(item.href)}
						class:dark:text-dark-content={$activeMenus.includes(item.href)}
						class:text-light-secondary-content={!$activeMenus.includes(item.href)}
						class:dark:text-dark-secondary-content={!$activeMenus.includes(item.href)}
						class:hover:text-light-content={!$activeMenus.includes(item.href)}
						class:dark:hover:text-dark-content={!$activeMenus.includes(item.href)}
						class:bg-light-icon-background-hover={collapsed && $activeItems.includes(item.href)}
						class:dark:bg-dark-icon-background-hover={collapsed && $activeItems.includes(item.href)}
					>
						<button
							on:click={!collapsed ? (e) => toggleOpen(item.href, e) : undefined}
							class="px-3 py-2 relative flex items-center w-full text-sm font-medium justify-between outline-none focus:outline-none"
							type="button"
						>
							<span class="flex items-center justify-start pointer-events-none">
								{#if item.icon}
									<span class="material-icons h-6 w-6 min-h-6 min-w-6 mr-3">{item.icon}</span>
								{/if}
								<span class="truncate">{item.label}</span>
							</span>

							<span
								class="material-icons expand-icon pointer-events-none"
								class:-rotate-180={$activeMenus.includes(item.href)}>expand_more</span
							>
						</button>
						<HoverBackground class="rounded-md pointer-events-none " />
					</h2>
				</div>
				{#if $activeMenus.includes(item.href)}
					<div
						class:w-full={!collapsed}
						class:w-56={collapsed}
						class:absolute={collapsed}
						class:top-0={collapsed}
						class:left-12={collapsed}
						class:pl-2={collapsed}
						in:transition|local
						out:transition|local
					>
						<div
							class="space-y-1 pt-1"
							class:p-1={collapsed}
							class:border={collapsed}
							class:border-light-border={collapsed}
							class:dark:border-dark-border={collapsed}
							class:shadow-md={collapsed}
							class:dark:shadow-black={collapsed}
							class:bg-light-surface={collapsed}
							class:dark:bg-dark-surface={collapsed}
							class:overflow-hidden={collapsed}
							class:rounded-md={collapsed}
						>
							{#each item.children as child}
								<a
									href={child.href}
									class="group relative flex items-center min-w-full px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
									class:text-light-content={$activeItems.includes(child.href)}
									class:dark:text-dark-content={$activeItems.includes(child.href)}
									class:text-light-secondary-content={!$activeItems.includes(child.href)}
									class:dark:text-dark-secondary-content={!$activeItems.includes(child.href)}
									class:hover:text-light-content={!$activeItems.includes(child.href)}
									class:dark:hover:text-dark-content={!$activeItems.includes(child.href)}
									class:bg-light-icon-background-hover={$activeItems.includes(child.href)}
									class:dark:bg-dark-icon-background-hover={$activeItems.includes(child.href)}
								>
									{#if !collapsed}
										<span class="w-6 mr-2" />
									{/if}
									<span class="truncate ">{child.label}</span>
									<HoverBackground class="rounded-md" />
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<div class="transition-all duration-300" style="width: {collapsed ? '3rem' : '100%'}">
				<a
					use:tooltip={{
						placement: 'right',
						content: item.label,
						arrow: false,
						animation: 'scale',
						disabled: !collapsed
					}}
					href={item.href}
					class="group relative w-full overflow-hidden flex items-center justify-start px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
					class:text-light-content={$activeItems.includes(item.href)}
					class:dark:text-dark-content={$activeItems.includes(item.href)}
					class:text-light-secondary-content={!$activeItems.includes(item.href)}
					class:dark:text-dark-secondary-content={!$activeItems.includes(item.href)}
					class:hover:text-light-content={!$activeItems.includes(item.href)}
					class:dark:hover:text-dark-content={!$activeItems.includes(item.href)}
					class:bg-light-icon-background-hover={$activeItems.includes(item.href)}
					class:dark:bg-dark-icon-background-hover={$activeItems.includes(item.href)}
				>
					<span class="flex items-center justify-start flex-grow">
						{#if item.icon}
							<span class="material-icons h-6 w-6 min-h-6 min-w-6 mr-3">{item.icon}</span>
						{/if}
						<span class="truncate">{item.label}</span>
					</span>

					{#if item.badge}
						<Badge class="flex-shrink" type={item.badgeType}>{item.badge}</Badge>
					{/if}
					<HoverBackground class="rounded-md" />
				</a>
			</div>
		{/if}
	{/each}
</nav>

<style>
	.expand-icon {
		-webkit-transition: -webkit-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-moz-transition: -moz-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-ms-transition: -ms-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-o-transition: -o-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
