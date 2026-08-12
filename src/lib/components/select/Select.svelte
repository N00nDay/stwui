<script lang="ts">
	import { setContext } from 'svelte';
	import { scale, slide } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import Icon from '../icon';
	import { unfold_more_horizontal, error as errorIcon } from '../../icons';
	import { writable, type Writable } from 'svelte/store';
	import type { SelectOption } from '../../types/select-option';
	import { flip } from 'svelte/animate';
	import Badge from '../badge';
	import Portal from '../portal/Portal.svelte';
	import Drawer from '../drawer';
	import { twMerge } from 'tailwind-merge';
	import { nanoid } from 'nanoid';

	export let name: string = nanoid();
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	// export let value: SelectOption | SelectOption[] | undefined = undefined;
	export let value: string | string[] | undefined = undefined;
	export let visible = false;
	export let optionLabel = 'label';
	export let optionValue = 'value';
	export let multiple = false;
	export let closeOnSelect = true;
	export let disabled = false;
	export let mobile = false;
	export let options: SelectOption[];

	// $: stringifyValues = multiple
	// 	? JSON.stringify(value)
	// 	: value && value instanceof Object && !Array.isArray(value)
	// 	? value[optionValue]
	// 	: '';
	// let selectedValue: Writable<SelectOption | SelectOption[] | undefined> = writable(value);
	let selectedValue: Writable<string | string[] | undefined> = writable(value);
	$: selectedValue.set(value);
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);
	let isMobile: Writable<boolean> = writable(mobile);
	$: isMobile.set(mobile);

	let input: HTMLInputElement;

	function toggleVisible() {
		if (!disabled) {
			visible = !visible;
		}
	}

	function handleClose() {
		visible = false;
	}

	function handleSelect(option: SelectOption) {
		if (multiple) {
			// const tempSelectedValues = ($selectedValue as SelectOption[]) || [];
			const tempSelectedValues = ($selectedValue as string[]) || [];
			// const selectedIndex = tempSelectedValues.findIndex((sv) => sv.value === option.value);
			const selectedIndex = tempSelectedValues.findIndex((sv) => sv === option[optionValue]);
			if (selectedIndex !== -1) {
				tempSelectedValues.splice(selectedIndex, 1);
				$selectedValue = tempSelectedValues;
			} else {
				// tempSelectedValues.push(option);
				tempSelectedValues.push(option[optionValue]);
				$selectedValue = tempSelectedValues;
			}
			input.value = JSON.stringify($selectedValue);
			input.dispatchEvent(new Event('change', { bubbles: true }));
			value = $selectedValue;
		} else {
			// if (value && !Array.isArray(value) && value[optionValue] === option[optionValue]) {
			if (value && !Array.isArray(value) && value === option[optionValue]) {
				input.value = '';
				input.dispatchEvent(new Event('change', { bubbles: true }));
				value = undefined;
				$selectedValue = undefined;
			} else {
				input.value = option[optionValue];
				input.dispatchEvent(new Event('change', { bubbles: true }));
				// value = option;
				value = option[optionValue];
				// $selectedValue = option;
				$selectedValue = option[optionValue];
			}
		}
		if (closeOnSelect) {
			handleClose();
		}
	}

	function handleRemoveOption(e: Event, index: number) {
		e.stopPropagation();
		e.preventDefault();
		// const tempSelectedValues = $selectedValue as SelectOption[];
		const tempSelectedValues = $selectedValue as string[];
		tempSelectedValues.splice(index, 1);
		$selectedValue = tempSelectedValues;
		input.value = JSON.stringify($selectedValue);
		value = $selectedValue;
	}

	const defaultClass = 'stwui-select';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('select-error', currentError);
	setContext('select-name', name);
	setContext('select-value', selectedValue);
	setContext('select-handleSelect', handleSelect);
	setContext('select-option-label', optionLabel);
	setContext('select-option-value', optionValue);
	setContext('select-multiple', multiple);
	setContext('select-handleClose', handleClose);
	setContext('select-mobile', isMobile);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:clickOutside={$isMobile
		? () => {
				return;
		  }
		: handleClose}
>
	<slot name="label" />
	<div class="mt-1 relative rounded-md" class:text-danger={error} class:opacity-50={disabled}>
		<button
			aria-label="toggle select"
			aria-haspopup="listbox"
			aria-expanded={visible}
			aria-labelledby={name}
			type="button"
			on:click|stopPropagation|preventDefault={toggleVisible}
			class="relative border pr-10 py-2 min-h-[2.5rem] text-left focus:outline-none sm:text-sm block w-full outline-none ring-0 focus:ring-0 rounded-md stwui-select-display"
			class:border-danger={error}
			class:text-danger={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:border-border={!error}
			class:bg-default={disabled}
			class:bg-surface={!disabled}
			class:cursor-pointer={!disabled}
			class:cursor-default={disabled}
			class:pl-10={$$slots.leading}
			class:pl-3={!$$slots.leading}
			{disabled}
		>
			<span
				class="flex flex-row flex-wrap gap-2 truncate text-content"
				class:text-secondary-content={placeholder && (!value || value.length === 0)}
				class:text-opacity-80={placeholder && (!value || value.length === 0)}
			>
				{#if multiple}
					{#if value && value.length > 0 && Array.isArray(value)}
						{#each value as item, index (item)}
							<span animate:flip={{ duration: 250 }} in:scale|local>
								<!-- <Badge>
									{item[optionLabel] || item.value}
									<Badge.Close slot="close" on:click={(e) => handleRemoveOption(e, index)} />
								</Badge> -->
								<Badge>
									{options.find((o) => o[optionValue] === item)?.label}
									<Badge.Close slot="close" on:click={(e) => handleRemoveOption(e, index)} />
								</Badge>
							</span>
						{/each}
					{:else if placeholder}
						{placeholder}
					{/if}
				{:else if !Array.isArray(value)}
					<!-- {#if value && value[optionValue]}
						{value[optionLabel]} -->
					{#if value && options.find((o) => o[optionValue] === value) && options.find((o) => o[optionValue] === value)?.label}
						{options.find((o) => o[optionValue] === value)?.label}
					{:else if placeholder}
						{placeholder}
					{/if}
				{/if}
			</span>
			<input
				{name}
				id={name}
				{disabled}
				bind:this={input}
				bind:value
				on:change
				class="h-0 w-0 hidden invisible"
				readonly
				autocomplete="off"
			/>

			{#if $$slots.leading}
				<span
					class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none stwui-select-leading-wrapper"
					class:text-secondary-content={!error}
					class:text-error={error}
				>
					<slot name="leading" />
				</span>
			{/if}

			{#if error}
				<span
					class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none stwui-select-error-icon"
				>
					<Icon data={errorIcon} />
				</span>
			{:else}
				<span
					class="absolute inset-y-0 right-0 flex items-start pt-[0.4rem] pr-2 pointer-events-none stwui-select-drop-icon"
				>
					<Icon data={unfold_more_horizontal} />
				</span>
			{/if}
		</button>

		{#if visible && mobile}
			<Portal>
				<Drawer {handleClose} placement="bottom" class="select-mobile" panelClass="!max-h-[14rem]">
					<slot name="options" />
				</Drawer>
			</Portal>
		{:else if visible}
			<slot name="options" />
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger stwui-select-error" id="{name}-error">
			{error}
		</p>
	{/if}
</div>
