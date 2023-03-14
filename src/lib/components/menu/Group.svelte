<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { slide, scale, type TransitionConfig } from 'svelte/transition';
	import { getContext, setContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon/Icon.svelte';
	import { chevron_down } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let label: string;
	export let key: string;

	let active = false;
	let collapsable: HTMLDivElement;

	const menuCollapse: Writable<boolean> = getContext('menu-collapse');
	const activeItem: Writable<string> = getContext('menu-active-item');

	$: menuActive = $activeItem.includes(key);

	let forceCollapse = $menuCollapse ? true : false;
	$: if ($menuCollapse) {
		forceCollapse = true;
		active = false;
	}

	function toggleOpen(e: Event) {
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

	const defaultClass = 'transition-all duration-300';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('menu-group-key', key);
</script>

<div
	bind:this={collapsable}
	class="relative w-full"
	on:mouseover={$menuCollapse ? toggleOpen : undefined}
	on:focus={$menuCollapse ? toggleOpen : undefined}
	on:mouseleave={$menuCollapse ? toggleOpen : undefined}
>
	<div
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<h2
			class="group relative m-0 w-full outline-none rounded-md focus:outline-none overflow-hidden"
			class:text-content={active}
			class:text-secondary-content={!active}
			class:hover:text-content={!active}
			class:bg-hover={($menuCollapse && menuActive) || (!$menuCollapse && !active && menuActive)}
		>
			<button
				aria-label="toggle collapse menu"
				on:click={!$menuCollapse ? toggleOpen : undefined}
				class="px-3 py-2 relative flex items-center w-full text-sm font-medium justify-between outline-none focus:outline-none"
				type="button"
			>
				<span class="flex items-center justify-start pointer-events-none">
					<slot name="icon" />
					<span class="truncate">{label}</span>
				</span>

				<span class="pointer-events-none transition-transform" class:-rotate-180={active}
					><Icon data={chevron_down} /></span
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
				class:border-border={$menuCollapse}
				class:shadow-md={$menuCollapse}
				class:bg-surface={$menuCollapse}
				class:overflow-hidden={$menuCollapse}
				class:rounded-md={$menuCollapse}
			>
				<slot />
			</div>
		</div>
	{/if}
</div>
