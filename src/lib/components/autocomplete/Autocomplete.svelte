<script lang="ts" context="module">
	export let AUTOCOMPLETE_CONTEXT_ID = 'autocomplete-context-id';
</script>

<script lang="ts">
	import { slide, scale } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import { onMount, setContext } from 'svelte';
	import { error as errorIcon, unfold_more_horizontal, close } from '../../icons';
	import Icon from '../icon';
	import { writable, type Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autofocus = false;
	export let allowNonListValue = false;

	let visible = false;
	let input: HTMLInputElement;
	let button: HTMLButtonElement;
	let options: Writable<string[]> = writable([]);
	let selectedOption: Writable<string | undefined> = writable(value);

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
			} else if ($options.includes(value)) {
				visible = false;
			} else if (allowNonListValue) {
				visible = false;
			} else {
				input.value = '';
				value = undefined;
				$selectedOption = undefined;
				visible = false;
			}
		}
	}

	function handleSelect(option: string) {
		value = option;
		input.value = option;
		$selectedOption = option;
		visible = false;
	}

	function handleClear() {
		input.value = '';
		value = undefined;
		$selectedOption = undefined;
	}

	onMount(() => {
		if (autofocus) {
			button.focus();
			visible = true;
		}
	});

	setContext(AUTOCOMPLETE_CONTEXT_ID, {
		autocomplete: true,
		handleSelect,
		options,
		name,
		error,
		value: selectedOption
	});
</script>

<div
	class={$$props.class}
	use:clickOutside={handleClose}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="label" />
	<div class="mt-1 relative rounded-md h-[2.5rem]">
		<button
			aria-label="Autocomplete Toggle"
			bind:this={button}
			type="button"
			on:click={handleOpen}
			class="group relative cursor-pointer h-[2.5rem] text-left border-none focus:outline-none sm:text-sm block w-full outline-none rounded-md bg-light-surface dark:bg-dark-surface shadow-sm dark:shadow-black"
			class:text-danger={error}
		>
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
				class="bg-light-surface dark:bg-dark-surface w-full h-[2.5rem] pl-3 pr-10 py-2 shadow-sm dark:shadow-black border rounded-md outline-none"
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
			/>

			{#if $$slots.leading}
				<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<slot name="leading" />
				</span>
			{/if}

			{#if value && value.length > 0}
				<button
					aria-label="clear input"
					on:click={handleClear}
					class="absolute inset-y-0 right-8 items-center hidden group-focus-within:flex active:flex"
				>
					<span
						transition:scale|local
						class="flex items-center text-light-icon dark:text-dark-icon"
					>
						<Icon data={close} />
					</span>
				</button>
			{/if}

			{#if error}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<Icon data={errorIcon} />
				</span>
			{:else}
				<span
					class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-light-icon dark:text-dark-icon"
				>
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
