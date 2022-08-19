<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { slide, scale } from 'svelte/transition';

	export let trailing: MaterialIcons | undefined = undefined;
	export let name: string;
	export let id: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;
	export let disabled = false;

	function setTwoNumberDecimal(e: Event) {
		const el = e.target as HTMLInputElement;
		if (el.value) {
			const temporaryStringValue = el.value.replace('.', '');
			if (temporaryStringValue && temporaryStringValue.length > 0) {
				const temporaryValue = +temporaryStringValue;
				const temporaryShiftedValue = temporaryValue / 100;
				value = parseFloat(temporaryShiftedValue.toString()).toFixed(2);
			}
		}
	}
</script>

<div class={$$props.class}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium {srOnly ? 'sr-only' : ''}"
			class:text-gray-700={!error}
			class:text-red-600={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md shadow-sm">
		<span
			transition:scale|local
			class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
			class:text-gray-400={!error}
			class:text-red-600={error}>attach_money</span
		>
		<input
			type="number"
			{autofocus}
			{autocapitalize}
			{autocomplete}
			{name}
			{id}
			class="block w-full pl-10 outline-none ring-0 focus:ring-0 sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface transition-all duration-150"
			class:border-red-300={error}
			class:text-red-900={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:border-light-icon-background={!error}
			class:dark:border-dark-icon-background={!error}
			class:pr-10={trailing || error}
			class:bg-gray-100={disabled}
			{placeholder}
			bind:value
			step="0.01"
			on:input={setTwoNumberDecimal}
		/>
		{#if trailing && !error}
			<span
				transition:scale|local
				class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
				class:text-gray-400={!error}
				class:text-red-600={error}>{trailing}</span
			>
		{:else if error}
			<span
				transition:scale|local
				class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-600"
				>error</span
			>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-red-600" id="{name}-error">{error}</p>
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
