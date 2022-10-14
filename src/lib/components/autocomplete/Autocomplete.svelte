<script lang="ts" context="module">
	export let AUTOCOMPLETE_CONTEXT_ID = 'autocomplete-context-id';
</script>

<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { slide, scale } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import { onMount, setContext } from 'svelte';

	export let leading: MaterialIcon | undefined = undefined;
	export let name: string;
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autofocus = false;
	export let handleLeadingClick: (() => void) | undefined = undefined;

	let visible = false;
	let input: HTMLInputElement;
	let button: HTMLButtonElement;

	function handleOpen() {
		visible = true;
	}

	function handleClose() {
		checkValue();
	}

	function checkValue() {
		if (visible) {
			if (!value) {
				visible = false;
			} else {
				input.value = '';
				value = undefined;
				visible = false;
			}
		}
	}

	function handleSelect(option: string) {
		value = option;
		input.value = option;
		visible = false;
	}

	function handleClear() {
		input.value = '';
		value = undefined;
	}

	onMount(() => {
		if (autofocus) {
			button.focus();
			visible = true;
		}
	});

	setContext(AUTOCOMPLETE_CONTEXT_ID, {
		autocomplete: true,
		handleSelect
	});
</script>

<div class={$$props.class} style={$$props.style} use:clickOutside={handleClose}>
	<!-- TODO: label slot -->
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium{srOnly ? ' sr-only' : ''}"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:text-danger={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md h-[2.5rem]">
		<button
			bind:this={button}
			type="button"
			on:click={handleOpen}
			class="group relative cursor-pointer h-[2.5rem] text-left border-none focus:outline-none sm:text-sm block w-full outline-none rounded-md bg-light-surface dark:bg-dark-surface shadow-sm dark:shadow-black"
		>
			{#if leading}
				{#if handleLeadingClick}
					<button
						on:click|stopPropagation={handleLeadingClick}
						class="absolute inset-y-0 left-0 pl-3"
					>
						<span
							class="material-icons flex items-center"
							class:text-light-secondary-content={!error}
							class:dark:text-dark-secondary-content={!error}
							class:text-danger={error}>{leading}</span
						>
					</button>
				{:else}
					<span
						class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
						class:text-light-secondary-content={!error}
						class:dark:text-dark-secondary-content={!error}
						class:text-danger={error}>{leading}</span
					>
				{/if}
			{/if}
			<!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
			<input
				{name}
				id={name}
				bind:this={input}
				bind:value
				{placeholder}
				{autofocus}
				on:input
				on:change
				autocomplete="off"
				role="presentation"
				aria-controls="options"
				class="bg-transparent w-full h-[2.5rem] pl-3 pr-10 py-2 shadow-sm dark:shadow-black border rounded-md outline-none"
				class:border-red-400={error}
				class:text-danger={error}
				class:dark:text-danger={error}
				class:placeholder-red-300={error}
				class:focus:border-red-500={error}
				class:focus:border-primary={!error}
				class:dark:focus:border-primary={!error}
				class:light-border={!error}
				class:dark:dark-border={!error}
				class:pl-10={leading}
			/>

			{#if value && value.length > 0}
				<button
					on:click={handleClear}
					class="absolute inset-y-0 right-8 items-center hidden group-focus-within:flex active:flex"
				>
					<span transition:scale|local class="flex items-center">
						<span class="material-icons text-light-icon dark:text-dark-icon text-base">
							clear
						</span>
					</span>
				</button>
			{/if}

			{#if error}
				<span
					transition:scale|local
					class="material-icons absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-danger"
					>error</span
				>
			{:else}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<span class="material-icons text-light-icon dark:text-dark-icon"> unfold_more </span>
				</span>
			{/if}
		</button>

		{#if visible}
			<slot name="list" />
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
