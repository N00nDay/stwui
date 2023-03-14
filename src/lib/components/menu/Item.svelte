<script lang="ts">
	import { tooltip } from '../../actions';
	import HoverBackground from '../HoverBackground.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let label: string;
	export let href: string;
	export let key: string;

	const menuCollapse: Writable<boolean> = getContext('menu-collapse');
	const activeItem: Writable<string> = getContext('menu-active-item');

	$: active = $activeItem === key;

	// TODO: allow for customizing active color

	const defaultClass = 'transition-all duration-300';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<a
		use:tooltip={{
			placement: 'right',
			content: label,
			arrow: false,
			animation: 'scale',
			disabled: !$menuCollapse
		}}
		{href}
		class="group no-underline relative w-full h-10 overflow-hidden flex items-center justify-start px-3 py-2 text-sm font-medium rounded-md"
		class:text-primary-content={active}
		class:text-secondary-content={!active}
		class:hover:text-content={!active}
		class:bg-primary={active}
	>
		<span class="flex items-center justify-start flex-grow">
			<slot name="icon" />
			<span class="truncate">{label}</span>
		</span>

		<slot name="extra" />
		<HoverBackground class="rounded-md" />
	</a>
</div>
