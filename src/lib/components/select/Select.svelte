<script lang="ts" context="module">
	export const SELECT_CONTEXT_ID = 'select-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import { onMount } from 'svelte';
	import { Icon } from '../../';
	import { unfold_more_horizontal, error as errorIcon } from '../../icons';
	import { writable } from 'svelte/store';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autofocus = false;
	export let visible = false;

	let selectedValue = writable(value);

	let input: HTMLInputElement;
	let button: HTMLButtonElement;

	function toggleVisible() {
		visible = !visible;
	}

	function handleClose() {
		visible = false;
	}

	function handleSelect(option: string) {
		input.value = option;
		value = option;
		$selectedValue = option;
		toggleVisible();
	}

	setContext(SELECT_CONTEXT_ID, {
		select: true,
		error,
		name,
		value: selectedValue,
		handleSelect
	});

	onMount(() => {
		if (autofocus) {
			button.focus();
			toggleVisible();
		}
	});
</script>

<div class={$$props.class} style={$$props.style} use:clickOutside={handleClose}>
	<slot name="label" />
	<div class="mt-1 relative rounded-md h-[2.5rem]" class:text-danger={error}>
		<button
			aria-label="toggle select"
			bind:this={button}
			type="button"
			on:click={toggleVisible}
			class="relative border shadow-sm dark:shadow-black h-[2.5rem] cursor-pointer pl-3 pr-10 py-2 min-h-[2.5rem] text-left focus:outline-none sm:text-sm block w-full outline-none ring-0 focus:ring-0 rounded-md bg-light-surface dark:bg-dark-surface"
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
		>
			<span
				class="block truncate text-light-content dark:text-dark-content"
				class:pl-1.5={$$slots.leading}
				class:text-gray-500={placeholder && !value}
				class:dark:text-gray-500={placeholder && !value}
			>
				{value ? value : placeholder ? placeholder : ''}
			</span>
			<input
				{name}
				id={name}
				bind:this={input}
				bind:value
				class="h-0 w-0 hidden invisible"
				readonly
				autocomplete="off"
			/>

			{#if $$slots.leading}
				<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<slot name="leading" />
				</span>
			{/if}

			{#if error}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<Icon data={errorIcon} />
				</span>
			{:else}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<Icon data={unfold_more_horizontal} />
				</span>
			{/if}
		</button>

		{#if visible}
			<slot name="options" />
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
