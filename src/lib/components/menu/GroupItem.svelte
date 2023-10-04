<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let href: string;
	export let label: string;
	export let key: string;

	const menuCollapse: Writable<boolean> = getContext('menu-collapse');
	const activeItem: Writable<string> = getContext('menu-active-item');
	const groupKey: { groupKey: string } = getContext('menu-group-key');

	$: active = $activeItem === `${groupKey}-${key}`;

	const defaultClass =
		'group relative flex items-center min-w-full h-10 px-3 py-2 text-sm font-medium rounded-md stwui-menu-group-item';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<a
	{href}
	class={finalClass}
	class:text-primary-content={active}
	class:text-secondary-content={!active}
	class:hover:text-content={!active}
	class:bg-primary={active}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'href'])}
>
	{#if !$menuCollapse}
		<span class="w-6 mr-2" />
	{/if}
	<span class="truncate">{label}</span>
	<HoverBackground class="rounded-md" />
</a>
