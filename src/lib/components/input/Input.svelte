<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	import type { MaterialIcon } from '../../types';
	import { slide, scale } from 'svelte/transition';
	import Swap from '../swap';
	import { twMerge } from 'tailwind-merge';

	export let leading: MaterialIcon | undefined = undefined;
	export let trailing: MaterialIcon | undefined = undefined;
	export let name: string;
	export let type: 'text' | 'email' | 'password' = 'text';
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: 'on' | 'off' | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus: true | undefined = undefined;
	export let readonly: true | undefined = undefined;
	export let tabindex: string | undefined = undefined;
	export let handleLeadingClick: (() => void) | undefined = undefined;
	export let handleTrailingClick: (() => void) | undefined = undefined;
	export let showPasswordToggle = false;
	export let allowClear = false;
	export let leadingAriaLabel = 'input leading';
	export let trailingAriaLabel = 'input trailing';

	let input: HTMLInputElement;

	function useType(node: HTMLInputElement) {
		node.type = type;
	}

	let passwordVisible = false;
	function togglePasswordVisibility() {
		passwordVisible = !passwordVisible;
		if (passwordVisible) {
			input.type = 'text';
		} else {
			input.type = 'password';
		}
	}

	function handleClear() {
		input.focus();
		input.value = '';
		value = undefined;
	}

	const defaultClass = 'group';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium{srOnly ? ' sr-only' : ''}"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:text-danger={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md shadow-sm h-[2.5rem] dark:shadow-black">
		<input
			bind:this={input}
			use:useType
			{autofocus}
			{autocapitalize}
			{autocomplete}
			{name}
			id={name}
			{readonly}
			{tabindex}
			class="block h-[2.5rem] w-full px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface"
			class:light-border={!error}
			class:dark:dark-border={!error}
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:group-focus-within:border-red-500={error}
			class:group-focus-within:border-primary={!error}
			class:dark:group-focus-within:border-primary={!error}
			class:group-active:border-red-500={error}
			class:group-active:border-primary={!error}
			class:dark:group-active:border-primary={!error}
			class:pl-10={leading}
			class:pr-10={trailing || error || allowClear}
			{placeholder}
			bind:value
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}
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
					class="material-icons flex items-center pointer-events-none absolute inset-y-0 left-0 pl-3"
					class:text-light-secondary-content={!error}
					class:dark:text-dark-secondary-content={!error}
					class:text-danger={error}>{leading}</span
				>
			{/if}
		{/if}

		{#if allowClear && value && value.length > 0}
			<button
				aria-label="clear"
				on:click={handleClear}
				class="absolute inset-y-0 hidden group-focus-within:flex active:flex items-center"
				class:right-10={showPasswordToggle || trailing || error}
				class:right-3={!showPasswordToggle && !trailing && !error}
			>
				<span transition:scale|local class="items-center flex">
					<span class="material-icons text-light-icon dark:text-dark-icon text-base"> clear </span>
				</span>
			</button>
		{/if}

		{#if showPasswordToggle}
			<Swap
				on:click={togglePasswordVisibility}
				swapped={passwordVisible}
				type="flip"
				class="inset-y-0 right-0 pr-3 flex items-center z-10 w-9"
				style="position: absolute;left: unset;"
			>
				<span
					slot="on"
					class="material-icons pr-3 text-light-secondary-content dark:text-dark-secondary-content"
				>
					visibility
				</span>
				<span
					slot="off"
					class="material-icons pr-3 text-light-secondary-content dark:text-dark-secondary-content"
				>
					visibility_off
				</span>
			</Swap>
		{:else if trailing && !error}
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
				class="material-icons absolute inset-y-0 right-3 flex items-center pointer-events-none text-danger"
				>error</span
			>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
