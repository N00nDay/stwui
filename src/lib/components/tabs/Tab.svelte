<script lang="ts" context="module">
	export const TABS_TAB_CONTEXT_ID = 'tabs-tab-context-id';
</script>

<script lang="ts">
	import { TABS_CONTEXT_ID } from './Tabs.svelte';
	import { useContext } from '$lib/utils/useContext';
	import { getContext, setContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import HoverBackground from '../HoverBackground.svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let href: string;
	export let key: string;

	useContext({
		context_id: TABS_CONTEXT_ID,
		parent: 'Tabs',
		component: 'Tabs.Tab'
	});

	setContext(TABS_TAB_CONTEXT_ID, {
		tab: true,
		key
	});

	const { variant, currentTab }: { variant: string; currentTab: Writable<string> } =
		getContext(TABS_CONTEXT_ID);

	let defaultClass = '';
	$: if (key === $currentTab) {
		defaultClass =
			'group border-transparent group inline-flex items-center py-4 px-1 font-medium text-sm';
		if (variant === 'full-width' || variant === 'bar') {
			defaultClass += ' w-full flex justify-center';
		}
		if (variant === 'bar') {
			defaultClass += ' focus:z-10 relative';
		} else {
			defaultClass += ' border-b-2';
		}
		defaultClass += ' text-primary border-primary';
	} else {
		defaultClass =
			'group border-transparent group inline-flex items-center py-4 px-1 font-medium text-sm';
		if (variant === 'full-width' || variant === 'bar') {
			defaultClass += ' w-full flex justify-center';
		}
		if (variant === 'bar') {
			defaultClass += ' focus:z-10 relative';
		} else {
			defaultClass += ' border-b-2';
		}
		defaultClass +=
			' dark:hover:border-dark-border-base hover:border-light-border-base dark:hover:text-dark-content hover:text-light-content dark:text-dark-secondary-content text-light-secondary-content';
	}

	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<a
	{href}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if $$slots.icon}
		<span class="mr-2">
			<slot name="icon" />
		</span>
	{/if}
	<slot />
	{#if variant === 'bar'}
		<span
			class="absolute inset-x-0 bottom-0 h-0.5"
			class:bg-primary={key === $currentTab}
			class:bg-transparent={key !== $currentTab}
		/>
		<HoverBackground />
	{/if}
</a>
