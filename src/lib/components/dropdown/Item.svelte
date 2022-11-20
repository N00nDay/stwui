<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let label: string;

	const defaultClass =
		'w-full group relative flex items-center px-3 py-2 text-sm font-medium rounded-md overflow-hidden text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	aria-label="dropdown item"
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<span class="flex items-center justify-start flex-grow">
		<slot name="icon" />
		<span class="truncate" class:ml-3={$$slots.icon}>{label}</span>
	</span>

	<slot name="extra" />
	<HoverBackground class="rounded-md" />
</button>
