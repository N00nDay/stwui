<script lang="ts" context="module">
	export const CURRENCY_CONTEXT_ID = 'currency-context-id';
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import { setContext } from 'svelte';
	import Icon from '../icon';
	import { error as errorIcon } from '../../icons';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;
	export let disabled = false;
	export let readonly = false;

	function onlyNumeric(e: KeyboardEvent) {
		if (!e.key.match(/^[0-9]+$/)) e.preventDefault();
	}

	function setTwoNumberDecimal(e: Event) {
		const el = e.target as HTMLInputElement;
		if (el.value) {
			let temporaryStringValue = el.value.replace('.', '');
			temporaryStringValue = temporaryStringValue.replace(/\D/g, '');
			if (temporaryStringValue && temporaryStringValue.length > 0) {
				const temporaryValue = +temporaryStringValue;
				const temporaryShiftedValue = temporaryValue / 100;
				value = parseFloat(temporaryShiftedValue.toString()).toFixed(2);
			}
		}
	}

	setContext(CURRENCY_CONTEXT_ID, {
		currency: true,
		name,
		error
	});
</script>

<div class={$$props.class} style={$$props.style}>
	<slot name="label" />
	<div
		class="mt-1 relative rounded-md shadow-sm dark:shadow-black h-[2.5rem]"
		class:text-danger={error}
	>
		<input
			type="number"
			inputmode="numeric"
			pattern="\d*"
			{autofocus}
			{autocapitalize}
			{autocomplete}
			{name}
			{readonly}
			id={name}
			class="block w-full px-3 h-[2.5rem] border outline-none focus:outline-none sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface"
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:light-border={!error}
			class:dark:dark-border={!error}
			class:pl-10={$$slots.leading}
			class:pr-10={$$slots.trailing || error}
			class:bg-gray-100={disabled}
			{placeholder}
			bind:value
			step="0.01"
			on:input={setTwoNumberDecimal}
			on:keypress={onlyNumeric}
		/>

		{#if $$slots.leading}
			<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				<slot name="leading" />
			</span>
		{/if}

		{#if $$slots.trailing && !error}
			<span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<slot name="trailing" />
			</span>
		{:else if error}
			<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				<Icon data={errorIcon} />
			</span>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
