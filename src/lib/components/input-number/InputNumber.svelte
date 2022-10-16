<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { slide, scale } from 'svelte/transition';

	export let leading: MaterialIcon | undefined = undefined;
	export let trailing: MaterialIcon | undefined = undefined;
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
	export let step = '1';
	export let readonly = false;
	export let leadingAriaLabel = 'currency leading';
	export let trailingAriaLabel = 'currency trailing';

	function onlyNumeric(e: KeyboardEvent) {
		if (!e.key.match(/^[0-9]+$/)) e.preventDefault();
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
			class="block w-full h-[2.5rem] pr-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface"
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:light-border={!error}
			class:dark:dark-border={!error}
			class:pl-3={!leading}
			class:pl-10={leading}
			class:pr-10={trailing || error}
			class:bg-gray-100={disabled}
			{placeholder}
			bind:value
			{step}
			on:input
			on:keypress={onlyNumeric}
		/>

		{#if leading}
			{#if handleLeadingClick}
				<button
					aria-label={leadingAriaLabel}
					on:click={handleLeadingClick}
					class="absolute inset-y-0 left-0 pl-3"
				>
					<span
						transition:scale|local
						class="material-icons flex items-center"
						class:text-light-secondary-content={!error}
						class:dark:text-dark-secondary-content={!error}
						class:text-danger={error}>{leading}</span
					>
				</button>
			{:else}
				<span
					transition:scale|local
					class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
					class:text-light-secondary-content={!error}
					class:dark:text-dark-secondary-content={!error}
					class:text-danger={error}>{leading}</span
				>
			{/if}
		{/if}

		{#if trailing && !error}
			{#if handleTrailingClick}
				<button
					aria-label={trailingAriaLabel}
					on:click={handleTrailingClick}
					class="absolute inset-y-0 right-0 pr-3"
				>
					<span
						transition:scale|local
						class="material-icons flex items-center"
						class:text-light-secondary-content={!error}
						class:dark:text-dark-secondary-content={!error}
						class:text-danger={error}>{trailing}</span
					>
				</button>
			{:else}
				<span
					transition:scale|local
					class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
					class:text-light-secondary-content={!error}
					class:dark:text-dark-secondary-content={!error}
					class:text-danger={error}>{trailing}</span
				>
			{/if}
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
