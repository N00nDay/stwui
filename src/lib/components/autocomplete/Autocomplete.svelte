<script lang="ts">
	import { slide, scale } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import { setContext } from 'svelte';
	import { error as errorIcon, unfold_more_horizontal, close } from '../../icons';
	import Icon from '../icon';
	import { writable, type Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import Portal from '../portal';
	import Drawer from '../drawer';
	import { twMerge } from 'tailwind-merge';
	import { nanoid } from 'nanoid';
	import type { SelectOption } from '$lib/types';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass = 'stwui-autocomplete';

	export let name: string = nanoid();
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let allowNonListValue = false;
	export let disabled = false;
	export let mobile = false;
	export let options: SelectOption[] = [];
	export let optionLabel = 'label';
	export let optionValue = 'value';

	let visible = false;
	let input: HTMLInputElement;
	let labelInput: HTMLInputElement;
	let mobileLabelInput: HTMLInputElement;

	let selectedOption: Writable<SelectOption | undefined> = writable(
		options.find((o) => o[optionValue] === value)
	);
	$: selectedOption.set(options.find((o) => o[optionValue] === value));
	let selectedValue: Writable<string | string[] | undefined> = writable(value);
	$: selectedValue.set(value);
	let selectedLabel: Writable<string | string[] | undefined> = writable(
		$selectedOption ? $selectedOption[optionLabel] : value
	);
	$: selectedLabel.set($selectedOption ? $selectedOption[optionLabel] : value);
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);
	let isMobile: Writable<boolean> = writable(mobile);
	$: isMobile.set(mobile);

	function handleOpen() {
		if (!disabled) {
			visible = true;
		}
	}

	function handleClose() {
		checkValue();
	}

	function checkValue() {
		if (visible) {
			if (value === undefined) {
				visible = false;
				return;
			}

			const optionExists = options.find((o) => o[optionValue] === value);

			if (optionExists && optionExists.length > 0) {
				visible = false;
			} else if (allowNonListValue) {
				visible = false;
			} else {
				const inputMobile = document.getElementById(`${name}-mobile`) as HTMLInputElement;
				if (inputMobile) {
					inputMobile.value = '';
				}
				input.value = '';
				labelInput.value = '';
				mobileLabelInput.value = '';
				input.dispatchEvent(new Event('change', { bubbles: true }));
				value = undefined;
				// $selectedOption = undefined;
				$selectedValue = undefined;
				$selectedLabel = undefined;
				visible = false;
			}
		}
	}

	function handleSelect(newValue: string) {
		$selectedValue = newValue;
		$selectedOption = options.find((o) => o[optionValue] === newValue);
		$selectedLabel = $selectedOption ? $selectedOption[optionLabel] : newValue;
		value = newValue;
		input.value = newValue;
		input.dispatchEvent(new Event('change', { bubbles: true }));

		visible = false;
	}

	function handleClear() {
		input.value = '';
		labelInput.value = '';
		mobileLabelInput.value = '';
		input.dispatchEvent(new Event('change', { bubbles: true }));
		value = undefined;
		$selectedValue = undefined;
	}

	function handleKeyUp(e: KeyboardEvent) {
		const target = e.target as HTMLInputElement;
		if (target) {
			value = target.value;
		}
	}

	$: if ($isMobile && visible) {
		setTimeout(() => {
			const inputMobile = document.getElementById(`${name}-mobile`) as HTMLInputElement;
			if (inputMobile) {
				inputMobile.focus();
			}
		}, 1);
	}

	setContext('autocomplete-handleSelect', handleSelect);
	setContext('autocomplete-name', name);
	setContext('autocomplete-error', currentError);
	setContext('autocomplete-value', selectedValue);
	setContext('autocomplete-handleClose', handleClose);
	setContext('autocomplete-mobile', isMobile);
	setContext('autocomplete-actual-value', value);
	setContext('autocomplete-option-label', optionLabel);
	setContext('autocomplete-option-value', optionValue);

	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	aria-label="autocomplete"
	class={finalClass}
	use:clickOutside={mobile
		? () => {
				return;
		  }
		: handleClose}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="label" />
	<div
		class="mt-1 relative rounded-md h-[2.5rem] stwui-autocomplete-wrapper"
		class:opacity-75={disabled}
	>
		<button
			tabindex="0"
			aria-label="Autocomplete Toggle"
			aria-haspopup="listbox"
			aria-expanded={visible}
			type="button"
			on:click|stopPropagation|preventDefault={handleOpen}
			class="group relative cursor-pointer h-[2.5rem] text-left border-none focus:outline-none sm:text-sm block w-full outline-none rounded-md bg-surface stwui-autocomplete-trigger"
			class:text-danger={error}
		>
			<!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
			<input
				name={name + '-label'}
				id={name + '-label'}
				bind:this={labelInput}
				bind:value={$selectedLabel}
				{placeholder}
				{disabled}
				on:input
				on:change
				on:keyup={handleKeyUp}
				on:focus={handleOpen}
				autocomplete="off"
				role="presentation"
				aria-controls="options"
				class="bg-surface w-full h-[2.5rem] pr-10 py-2 border rounded-md outline-none placeholder-secondary-content placeholder-opacity-80 stwui-autocomplete-input"
				class:border-danger={error}
				class:text-danger={error}
				class:placeholder-red-300={error}
				class:focus:border-danger={error}
				class:focus:border-primary={!error}
				class:border-border={!error}
				class:bg-default={disabled}
				class:pl-10={$$slots.leading}
				class:pl-3={!$$slots.leading}
			/>
			<input
				hidden
				{name}
				id={name}
				bind:this={input}
				bind:value
				{placeholder}
				{disabled}
				class="hidden"
			/>

			{#if $$slots.leading}
				<span
					class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none stwui-autocomplete-leading"
					class:text-danger={error}
					class:text-secondary-content={!error}
				>
					<slot name="leading" />
				</span>
			{/if}

			{#if value && value.length > 0}
				<button
					type="button"
					aria-label="clear input"
					on:click={handleClear}
					class="absolute inset-y-0 right-8 items-center hidden group-focus-within:flex active:flex text-secondary-content stwui-autocomplete-clear-wrapper"
				>
					<span transition:scale|local class="flex items-center text-content">
						<Icon data={close} />
					</span>
				</button>
			{/if}

			{#if error}
				<span
					class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none stwui-autocomplete-error-wrapper"
				>
					<Icon data={errorIcon} />
				</span>
			{:else}
				<span
					class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-secondary-content"
				>
					<Icon data={unfold_more_horizontal} />
				</span>
			{/if}
		</button>

		{#if mobile && visible}
			<Portal>
				<Drawer
					{handleClose}
					placement="bottom"
					class="select-mobile stwui-autocomplete-mobile-drawer"
					panelClass="!max-h-[14rem]"
				>
					<div class="p-3 border-b border-border shadow-md">
						<!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
						<input
							name={`${name}-mobile`}
							id={`${name}-mobile`}
							bind:this={mobileLabelInput}
							bind:value={$selectedLabel}
							{placeholder}
							{disabled}
							on:input
							on:change
							on:keyup={handleKeyUp}
							on:focus={handleOpen}
							autocomplete="off"
							role="presentation"
							aria-controls="options"
							class="bg-surface text-content w-full h-[2.5rem] pr-10 py-2 border rounded-md outline-none placeholder-secondary-content placeholder-opacity-80 stwui-autocomplete-mobile-input"
							class:border-danger={error}
							class:text-danger={error}
							class:placeholder-red-300={error}
							class:focus:border-danger={error}
							class:focus:border-primary={!error}
							class:border-border={!error}
							class:bg-default={disabled}
							class:pl-10={$$slots.leading}
							class:pl-3={!$$slots.leading}
						/>
					</div>
					<div
						class="h-[calc(100%-52px)] overflow-y-auto overflow-x-hidden stwui-autocomplete-mobile-options"
					>
						<slot name="options" />
					</div>
				</Drawer>
			</Portal>
		{:else if visible}
			<slot name="options" />
		{/if}
	</div>
	{#if error}
		<p
			transition:slide|local
			class="mt-2 text-sm text-danger stwui-autocomplete-error"
			id="{name}-error"
		>
			{error}
		</p>
	{/if}
</div>
