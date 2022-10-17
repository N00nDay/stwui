<script lang="ts" context="module">
	export const INPUT_NUMBER_CONTEXT_ID = 'input-number-context-id';
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
	export let step = '1';
	export let readonly = false;

	function onlyNumeric(e: KeyboardEvent) {
		if (!e.key.match(/^[0-9]+$/)) e.preventDefault();
	}

	setContext(INPUT_NUMBER_CONTEXT_ID, {
		inputNumber: true,
		name,
		error
	});
</script>

<div class={$$props.class}>
	<slot name="label" />
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
			class="block w-full h-[2.5rem] px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface"
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
			{step}
			on:input
			on:keypress={onlyNumeric}
		/>

		<slot name="leading" />

		{#if $$slots.trailing && !error}
			<slot name="trailing" />
		{:else if error}
			<span
				class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-danger"
			>
				<Icon path={errorIcon} />
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
