<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let label: string;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();

			const { target } = e;
			if (target && target instanceof HTMLLIElement) target.click();
		}
	}

	const defaultClass =
		'w-full group relative flex items-center px-3 py-2 text-sm font-medium rounded-md overflow-hidden text-secondary-content !outline-none !border-none !ring-0';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	class={finalClass}
	tabindex="-1"
	on:keydown={handleKeydown}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<button type="button" aria-label="select option" class="w-full flex items-center">
		<span class="flex items-center justify-start flex-grow">
			<slot name="icon" />
			<span class="truncate" class:ml-3={$$slots.icon}>{label}</span>
		</span>

		<slot name="extra" />
		<HoverBackground class="rounded-md" />
	</button>
</li>
