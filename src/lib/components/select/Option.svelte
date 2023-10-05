<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon';
	import { check } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import type { SelectOption } from '$lib/types/select-option';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let option: SelectOption;

	const value: Writable<SelectOption | SelectOption[] | undefined> = getContext('select-value');
	const optionLabel: string = getContext('select-option-label');
	const optionValue: string = getContext('select-option-value');
	const handleSelect: (option: SelectOption) => void = getContext('select-handleSelect');
	const multiple: boolean = getContext('select-multiple');

	let optionIsSelected = false;

	$: {
		if ($value && multiple && Array.isArray($value)) {
			const isSelected = $value.find((v) => v[optionValue] === option[optionValue]);
			if (isSelected) {
				optionIsSelected = true;
			} else {
				optionIsSelected = false;
			}
		} else if ($value && !Array.isArray($value)) {
			if ($value[optionValue] === option[optionValue]) {
				optionIsSelected = true;
			} else {
				optionIsSelected = false;
			}
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
			handleSelect(option);
		}
	}

	const defaultClass =
		'group text-content cursor-pointer select-none p-0.5 w-full !outline-none !border-none !ring-0 stwui-select-option';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	class={finalClass}
	role="option"
	aria-selected={optionIsSelected}
	tabindex="-1"
	on:keydown={handleKeydown}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<button
		type="button"
		aria-label="select option"
		on:click={() => handleSelect(option)}
		class="w-full text-left"
	>
		<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
			<span class="font-normal block truncate" class:font-semibold={optionIsSelected}>
				{option[optionLabel]}
			</span>

			{#if optionIsSelected}
				<span
					transition:scale|local
					class="text-primary absolute inset-y-0 right-0 flex items-center pr-1.5"
				>
					<Icon data={check} />
				</span>
			{/if}

			<HoverBackground />
		</div>
	</button>
</li>
