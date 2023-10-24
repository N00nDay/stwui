<script lang="ts">
	import { scale } from 'svelte/transition';
	import { getContext } from 'svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import { check } from '../../icons';
	import Icon from '../icon';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let option: string;

	const handleSelect: (option: string) => void = getContext('autocomplete-handleSelect');
	const value: Writable<string | undefined> = getContext('autocomplete-value');

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
			handleSelect(option);
		}
	}

	const defaultClass =
		'group text-content cursor-pointer select-none p-0.5 w-full !outline-none !border-none !ring-0 stwui-autocomplete-option';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	aria-label="autocomplete option"
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	tabindex="-1"
	on:keydown={handleKeydown}
	{...exclude($$props, ['use', 'class'])}
	role="option"
	aria-selected={$value === option}
>
	<button
		type="button"
		aria-label="autocomplete option"
		on:click={() => handleSelect(option)}
		class="w-full text-left"
	>
		<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
			<span class="font-normal block truncate" class:font-semibold={$value === option}>
				{option}
			</span>

			{#if $value === option}
				<span
					transition:scale|local
					class="text-primary absolute inset-y-0 right-0 flex items-center pr-2.5"
				>
					<Icon data={check} />
				</span>
			{/if}

			<HoverBackground />
		</div>
	</button>
</li>
