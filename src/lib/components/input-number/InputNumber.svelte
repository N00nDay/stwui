<script lang="ts">
	import { slide, scale } from 'svelte/transition';
	import { setContext } from 'svelte';
	import Icon from '../icon';
	import { error as errorIcon, close } from '../../icons';
	import { writable, type Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: number | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let disabled = false;
	export let step = 1;
	export let readonly = false;
	export let allowClear = false;
	export let showSpin = false;
	export let min: undefined | string = undefined;
	export let max: undefined | string = undefined;
	export let loop: boolean = min && max ? true : false;

	$: minValue = min ? parseInt(min) : undefined;
	$: maxValue = max ? parseInt(max) : undefined;
	let input: HTMLInputElement;
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

	function onlyNumeric(e: KeyboardEvent) {
		if (!e.key.match(/^[0-9]+$/)) e.preventDefault();
	}

	function handleClear() {
		input.value = '';
		value = undefined;
	}

	function handleStepUp() {
		const newValue = value || value === 0 ? value + step : step;
		if (maxValue || maxValue === 0) {
			if (newValue <= maxValue) {
				value = newValue;
			} else if (loop && newValue > maxValue) {
				value = minValue;
			}
		} else {
			value = newValue;
		}
	}

	function handleStepDown() {
		const newValue = value || value === 0 ? value - step : step * -1;
		if (minValue || minValue === 0) {
			if (newValue >= minValue) {
				value = newValue;
			} else if (loop && newValue < minValue) {
				value = maxValue;
			}
		} else {
			value = newValue;
		}
	}

	const defaultClass = 'stwui-input-number';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('input-number-name', name);
	setContext('input-number-error', currentError);
</script>

<div class={finalClass}>
	<slot name="label" />
	<div
		class="mt-1 relative rounded-md h-[2.5rem]"
		class:text-danger={error}
		class:opacity-75={disabled}
	>
		<input
			bind:this={input}
			type="number"
			inputmode="numeric"
			pattern="\d*"
			{autocapitalize}
			{autocomplete}
			{name}
			{readonly}
			{disabled}
			id={name}
			class="block w-full h-[2.5rem] px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-surface placeholder-secondary-content placeholder-opacity-80 stwui-input-number-input"
			class:border-red-400={error}
			class:text-danger={error}
			class:placeholder-danger={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:border-border={!error}
			class:pl-10={$$slots.leading}
			class:pr-10={showSpin || $$slots.trailing || error || allowClear}
			class:pr-20={(showSpin && ($$slots.trailing || error)) ||
				(showSpin && allowClear) ||
				(allowClear && ($$slots.trailing || error))}
			class:bg-default={disabled}
			{placeholder}
			bind:value
			{step}
			on:input
			on:keypress={onlyNumeric}
			{min}
			{max}
		/>

		{#if $$slots.leading}
			<span
				class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary-content stwui-input-number-leading-wrapper"
				class:text-danger={error}
			>
				<slot name="leading" />
			</span>
		{/if}

		{#if allowClear && (value || value === 0)}
			<button
				aria-label="clear"
				on:click={handleClear}
				class="disable-focus-active absolute inset-y-0 group-focus-within:flex active:flex items-center stwui-input-number-clear-wrapper"
				class:right-3={!$$slots.trailing && !error && !showSpin}
				class:right-12={showSpin || $$slots.trailing || error}
				class:right-20={showSpin && ($$slots.trailing || error)}
			>
				<span transition:scale|local class="items-center flex text-secondary-content">
					<Icon data={close} />
				</span>
			</button>
		{/if}

		{#if showSpin && !error && !$$slots.trailing}
			<span
				class="absolute h-[2.5rem] text-sm inset-y-0 right-0 w-10 flex text-secondary-content flex-col items-stretch justify-evenly border border-transparent py-px stwui-input-number-spin-wrapper"
			>
				<button
					type="button"
					on:click={handleStepUp}
					class="h-[19px] hover:bg-opacity-50 cursor-pointer flex items-center justify-center border-b border-border bg-background rounded-tr-md"
					>+</button
				>
				<button
					type="button"
					on:click={handleStepDown}
					class="h-[19px] hover:bg-opacity-50 flex items-center justify-center bg-background rounded-br-md"
					>-</button
				>
			</span>
		{:else if $$slots.trailing && !error && !showSpin}
			<span
				class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-secondary-content stwui-input-number-trailing-wrapper"
			>
				<slot name="trailing" />
			</span>
		{:else if $$slots.trailing && !error && showSpin}
			<span
				class="absolute inset-y-0 right-0 pr-12 flex items-center pointer-events-none text-secondary-content stwui-input-number-trailing-wrapper"
			>
				<slot name="trailing" />
			</span>
			<span
				class="absolute h-[2.5rem] text-sm inset-y-0 right-0 w-10 flex text-secondary-content flex-col items-stretch justify-evenly border border-transparent py-px stwui-input-number-spin-wrapper"
			>
				<button
					type="button"
					on:click={handleStepUp}
					class="h-[19px] hover:bg-opacity-50 cursor-pointer flex items-center justify-center border-b border-border bg-background rounded-tr-md"
					>+</button
				>
				<button
					type="button"
					on:click={handleStepDown}
					class="h-[19px] hover:bg-opacity-50 flex items-center justify-center bg-background rounded-br-md"
					>-</button
				>
			</span>
		{:else if error && showSpin}
			<span
				class="absolute inset-y-0 right-0 flex items-center pr-12 pointer-events-none stwui-input-number-error-icon"
			>
				<Icon data={errorIcon} />
			</span>
			<span
				class="absolute h-[2.5rem] text-sm inset-y-0 right-0 w-10 flex text-secondary-content flex-col items-stretch justify-evenly border border-transparent py-px stwui-input-number-spin-wrapper"
			>
				<button
					type="button"
					on:click={handleStepUp}
					class="h-[19px] hover:bg-opacity-50 cursor-pointer flex items-center justify-center border-b border-border bg-background rounded-tr-md"
					>+</button
				>
				<button
					type="button"
					on:click={handleStepDown}
					class="h-[19px] hover:bg-opacity-50 flex items-center justify-center bg-background rounded-br-md"
					>-</button
				>
			</span>
		{:else if error}
			<span
				class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none stwui-input-number-error-icon"
			>
				<Icon data={errorIcon} />
			</span>
		{/if}
	</div>
	{#if error}
		<p
			transition:slide|local
			class="mt-2 text-sm text-danger stwui-input-number-error"
			id="{name}-error"
		>
			{error}
		</p>
	{/if}
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>
