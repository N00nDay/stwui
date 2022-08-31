<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { slide, scale } from 'svelte/transition';

	export let trailing: MaterialIcons | undefined = undefined;
	export let name: string;
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;
	export let disabled = false;
	export let handleLeadingClick: (() => void) | undefined = undefined;
	export let handleTrailingClick: (() => void) | undefined = undefined;

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
</script>

<div class={$$props.class}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium {srOnly ? 'sr-only' : ''}"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:text-danger={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md shadow-sm dark:shadow-black h-[2.5rem]">
		<span
			on:click={handleLeadingClick}
			class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center z-10 transition-all duration-150"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:pointer-events-none={!handleLeadingClick}
			class:pointer-events-auto={handleLeadingClick}
			class:cursor-pointer={handleLeadingClick}
			class:text-danger={error}>attach_money</span
		>
		<input
			type="number"
			inputmode="numeric"
			pattern="\d*"
			{autofocus}
			{autocapitalize}
			{autocomplete}
			{name}
			id={name}
			class="block w-full pl-10 h-[2.5rem] pr-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface transition-all duration-150"
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:light-border={!error}
			class:dark:dark-border={!error}
			class:pr-10={trailing || error}
			class:bg-gray-100={disabled}
			{placeholder}
			bind:value
			step="0.01"
			on:input={setTwoNumberDecimal}
			on:keypress={onlyNumeric}
		/>
		{#if trailing && !error}
			<span
				on:click={handleTrailingClick}
				transition:scale|local
				class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center z-10 transition-all duration-150"
				class:pointer-events-none={!handleTrailingClick}
				class:pointer-events-auto={handleTrailingClick}
				class:cursor-pointer={handleTrailingClick}
				class:text-light-secondary-content={!error}
				class:dark:text-dark-secondary-content={!error}
				class:text-danger={error}>{trailing}</span
			>
		{:else if error}
			<span
				transition:scale|local
				class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-danger"
				>error</span
			>
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
