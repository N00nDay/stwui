<script lang="ts">
	import { setContext } from 'svelte';
	import { scale, slide } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import { Icon } from '../../';
	import { unfold_more_horizontal, error as errorIcon } from '../../icons';
	import { writable, type Writable } from 'svelte/store';
	import type { SelectOption } from '../../types/select-option';
	import { flip } from 'svelte/animate';
	import Badge from '../badge';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: SelectOption | SelectOption[] | undefined = undefined;
	export let visible = false;
	export let optionLabel = 'label';
	export let optionValue = 'value';
	export let multiple = false;
	export let closeOnSelect = true;

	$: stringifyValues = multiple
		? JSON.stringify(value)
		: value && value instanceof Object && !Array.isArray(value)
		? value[optionValue]
		: '';
	let selectedValue: Writable<SelectOption | SelectOption[] | undefined> = writable(value);
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

	let input: HTMLInputElement;

	function toggleVisible() {
		visible = !visible;
	}

	function handleClose() {
		visible = false;
	}

	function handleSelect(option: SelectOption) {
		if (multiple) {
			const tempSelectedValues = ($selectedValue as SelectOption[]) || [];
			const selectedIndex = tempSelectedValues.findIndex((sv) => sv.value === option.value);
			if (selectedIndex !== -1) {
				tempSelectedValues.splice(selectedIndex, 1);
				$selectedValue = tempSelectedValues;
			} else {
				tempSelectedValues.push(option);
				$selectedValue = tempSelectedValues;
			}
			input.value = JSON.stringify($selectedValue);
			value = $selectedValue;
		} else {
			if (value && !Array.isArray(value) && value[optionValue] === option[optionValue]) {
				input.value = '';
				value = undefined;
				$selectedValue = undefined;
			} else {
				input.value = option[optionValue];
				value = option;
				$selectedValue = option;
			}
		}
		if (closeOnSelect) {
			console.log('closed FIRED');
			toggleVisible();
		}
	}

	function handleRemoveOption(e: Event, index: number) {
		e.stopPropagation();
		e.preventDefault();
		const tempSelectedValues = $selectedValue as SelectOption[];
		tempSelectedValues.splice(index, 1);
		$selectedValue = tempSelectedValues;
		input.value = JSON.stringify($selectedValue);
		value = $selectedValue;
	}

	setContext('select-error', currentError);
	setContext('select-name', name);
	setContext('select-value', selectedValue);
	setContext('select-handleSelect', handleSelect);
	setContext('select-option-label', optionLabel);
	setContext('select-option-value', optionValue);
	setContext('select-multiple', multiple);
</script>

<div class={$$props.class} style={$$props.style} use:clickOutside={handleClose}>
	<slot name="label" />
	<div class="mt-1 relative rounded-md" class:text-danger={error}>
		<button
			aria-label="toggle select"
			type="button"
			on:click|stopPropagation|preventDefault={toggleVisible}
			class="relative border cursor-pointer pl-3 pr-10 py-2 min-h-[2.5rem] text-left focus:outline-none sm:text-sm block w-full outline-none ring-0 focus:ring-0 rounded-md bg-light-surface dark:bg-dark-surface"
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:border-light-border-base={!error}
			class:dark:border-dark-border-base={!error}
			class:pl-10={$$slots.leading}
		>
			<span
				class="flex flex-row flex-wrap gap-2  truncate text-light-content dark:text-dark-content"
				class:pl-1.5={$$slots.leading}
				class:text-gray-500={placeholder && (!value || value.length === 0)}
				class:dark:text-gray-500={placeholder && (!value || value.length === 0)}
			>
				{#if multiple}
					{#if value && value.length > 0 && Array.isArray(value)}
						{#each value as item, index (item)}
							<span animate:flip={{ duration: 250 }} in:scale|local>
								<Badge>
									{item[optionLabel] || item.value}
									<Badge.Close slot="close" on:click={(e) => handleRemoveOption(e, index)} />
								</Badge>
							</span>
						{/each}
					{:else if placeholder}
						{placeholder}
					{/if}
				{:else if !Array.isArray(value)}
					{#if value && value[optionValue]}
						{value[optionLabel]}
					{:else if placeholder}
						{placeholder}
					{/if}
				{/if}
			</span>
			<input
				{name}
				id={name}
				bind:this={input}
				bind:value={stringifyValues}
				class="h-0 w-0 hidden invisible"
				readonly
				autocomplete="off"
			/>

			{#if $$slots.leading}
				<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<slot name="leading" />
				</span>
			{/if}

			{#if error}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<Icon data={errorIcon} />
				</span>
			{:else}
				<span
					class="absolute inset-y-0 right-0 flex items-start pt-[0.4rem] pr-2 pointer-events-none"
				>
					<Icon data={unfold_more_horizontal} />
				</span>
			{/if}
		</button>

		{#if visible}
			<slot name="options" />
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
