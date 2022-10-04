<script lang="ts">
	import { page } from '$app/stores';
	import HoverBackground from '../HoverBackground.svelte';
	import { slide, scale, type TransitionConfig } from 'svelte/transition';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { MENU_CONTEXT_ID } from './Menu.svelte';
	import { useContext } from '$lib/utils/useContext';

	export let label: string;
	export let href: string;

	let active = false;
	let menuActive = false;
	let collapsable: HTMLDivElement;

	const {
		menuCollapse,
		showActiveByURL
	}: {
		menuCollapse: Writable<boolean>;
		showActiveByURL: boolean;
	} = getContext(MENU_CONTEXT_ID);

	let forceCollapse = $menuCollapse ? true : false;
	$: if ($menuCollapse) {
		forceCollapse = true;
		active = false;
	}

	function toggleOpen(href: string, e: Event) {
		if ($menuCollapse) {
			if (collapsable === e.target) {
				active = false;
			} else {
				active = true;
			}
		} else {
			if (active) {
				active = false;
			} else {
				active = true;
			}
		}
	}

	function transition(node: HTMLElement, config: TransitionConfig) {
		if ($menuCollapse && !forceCollapse) {
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

	useContext({
		context_id: MENU_CONTEXT_ID,
		parent: 'Menu',
		component: 'Menu.Group'
	});

	if (showActiveByURL) {
		setActiveItems();
	}

	$: if (showActiveByURL && $page) {
		setActiveItems();
	}

	function setActiveItems() {
		if ($page.url.pathname.includes(href) || $page.url.hash.includes(href)) {
			menuActive = true;
		} else {
			menuActive = false;
		}
	}
</script>

<div
	bind:this={collapsable}
	class="relative w-full"
	on:mouseover={$menuCollapse ? (e) => toggleOpen(href, e) : undefined}
	on:focus={$menuCollapse ? (e) => toggleOpen(href, e) : undefined}
	on:mouseleave={$menuCollapse ? (e) => toggleOpen(href, e) : undefined}
>
	<div class="transition-all duration-300" style="width: {$menuCollapse ? '3rem' : '100%'}">
		<h2
			class="group relative m-0 w-full outline-none rounded-md focus:outline-none overflow-hidden"
			class:text-light-content={active}
			class:dark:text-dark-content={active}
			class:text-light-secondary-content={!active}
			class:dark:text-dark-secondary-content={!active}
			class:hover:text-light-content={!active}
			class:dark:hover:text-dark-content={!active}
			class:bg-light-icon-background-hover={$menuCollapse && menuActive}
			class:dark:bg-dark-icon-background-hover={$menuCollapse && menuActive}
		>
			<button
				on:click={!$menuCollapse ? (e) => toggleOpen(href, e) : undefined}
				class="px-3 py-2 relative flex items-center w-full text-sm font-medium justify-between outline-none focus:outline-none"
				type="button"
			>
				<span class="flex items-center justify-start pointer-events-none">
					<slot name="icon" />
					<span class="truncate">{label}</span>
				</span>

				<span class="material-icons expand-icon pointer-events-none" class:-rotate-180={active}
					>expand_more</span
				>
			</button>
			<HoverBackground class="rounded-md pointer-events-none " />
		</h2>
	</div>
	{#if active}
		<div
			class:w-full={!$menuCollapse}
			class:w-56={$menuCollapse}
			class:absolute={$menuCollapse}
			class:top-0={$menuCollapse}
			class:left-12={$menuCollapse}
			class:pl-2={$menuCollapse}
			in:transition|local={{}}
			out:transition|local={{}}
		>
			<div
				class="space-y-1 pt-1"
				class:p-1={$menuCollapse}
				class:border={$menuCollapse}
				class:border-light-border={$menuCollapse}
				class:dark:border-dark-border={$menuCollapse}
				class:shadow-md={$menuCollapse}
				class:dark:shadow-black={$menuCollapse}
				class:bg-light-surface={$menuCollapse}
				class:dark:bg-dark-surface={$menuCollapse}
				class:overflow-hidden={$menuCollapse}
				class:rounded-md={$menuCollapse}
			>
				<slot />
			</div>
		</div>
	{/if}
</div>
