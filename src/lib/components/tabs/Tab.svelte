<script lang="ts">
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

	const variant: string = getContext('tabs-variant');
	const currentTab: Writable<string> = getContext('tabs-currentTab');

	const baseActiveClass =
		'group border-transparent group inline-flex items-center py-4 px-1 font-medium text-sm text-primary border-primary';
	const baseClass =
		'group border-transparent group inline-flex items-center py-4 px-1 font-medium text-sm dark:hover:border-dark-border-base hover:border-light-border-base dark:hover:text-dark-content hover:text-light-content dark:text-dark-secondary-content text-light-secondary-content';

	const fullWidthClass = 'w-full flex justify-center';
	const barClass = 'focus:z-10 relative';
	const defaultClass = 'border-b-2';

	$: finalClass = twMerge(
		key === $currentTab ? baseActiveClass : baseClass,
		variant === 'full-width' || variant === 'bar' ? fullWidthClass : false,
		variant === 'bar' ? barClass : false,
		variant === 'default' || variant === 'full-width' ? defaultClass : false,

		$$props.class
	);

	setContext('tab-key', key);
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
