<script lang="ts">
	import { slide, scale } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import { setContext } from 'svelte';
	import { error as errorIcon, unfold_more_horizontal, close } from '../../icons';
	import Icon from '../icon';
	import { writable, type Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import Portal from '../portal';
	import Drawer from '../drawer';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass = 'stwui-autocomplete';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let allowNonListValue = false;
	export let options: string[] = [];
	export let disabled = false;
	export let mobile = false;

	let visible = false;
	let input: HTMLInputElement;
	let selectedOption: Writable<string | undefined> = writable(value);
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);
	let isMobile: Writable<boolean> = writable(mobile);
	$: isMobile.set(mobile);

	function handleOpen() {
		if (!disabled) {
			visible = true;
		}
	}

	function handleClose() {
		checkValue();
	}

	function checkValue() {
		if (visible) {
			if (value === undefined) {
				visible = false;
			} else if (options.includes(value)) {
				visible = false;
			} else if (allowNonListValue) {
				visible = false;
			} else {
				const inputMobile = document.getElementById(`${name}-mobile`) as HTMLInputElement;
				if (inputMobile) {
					inputMobile.value = '';
				}
				input.value = '';
				input.dispatchEvent(new Event('change', { bubbles: true }));
				value = undefined;
				$selectedOption = undefined;
				visible = false;
			}
		}
	}

	function handleSelect(option: string) {
		value = option;
		input.value = option;
		input.dispatchEvent(new Event('change', { bubbles: true }));
		$selectedOption = option;
		visible = false;
	}

	function handleClear() {
		input.value = '';
		input.dispatchEvent(new Event('change', { bubbles: true }));
		value = undefined;
		$selectedOption = undefined;
	}

	$: if ($isMobile && visible) {
		setTimeout(() => {
			const inputMobile = document.getElementById(`${name}-mobile`) as HTMLInputElement;
			if (inputMobile) {
				inputMobile.focus();
			}
		}, 1);
	}

	setContext('autocomplete-handleSelect', handleSelect);
	setContext('autocomplete-name', name);
	setContext('autocomplete-error', currentError);
	setContext('autocomplete-value', selectedOption);
	setContext('autocomplete-handleClose', handleClose);
	setContext('autocomplete-mobile', isMobile);
	setContext('autocomplete-actual-value', value);

	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:clickOutside={mobile
		? () => {
				return;
		  }
		: handleClose}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="label" />
	<div
		class="mt-1 relative rounded-md h-[2.5rem] stwui-autocomplete-wrapper"
		class:opacity-75={disabled}
	>
		<button
			tabindex="0"
			aria-label="Autocomplete Toggle"
			type="button"
			on:click|stopPropagation|preventDefault={handleOpen}
			class="group relative cursor-pointer h-[2.5rem] text-left border-none focus:outline-none sm:text-sm block w-full outline-none rounded-md bg-surface stwui-autocomplete-trigger"
			class:text-danger={error}
		>
			<!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
			<input
				{name}
				id={name}
				bind:this={input}
				bind:value
				{placeholder}
				{disabled}
				on:input
				on:change
				on:focus={handleOpen}
				autocomplete="off"
				role="presentation"
				aria-controls="options"
				class="bg-surface w-full h-[2.5rem] pr-10 py-2 border rounded-md outline-none placeholder-secondary-content placeholder-opacity-80 stwui-autocomplete-input"
				class:border-danger={error}
				class:text-danger={error}
				class:placeholder-red-300={error}
				class:focus:border-danger={error}
				class:focus:border-primary={!error}
				class:border-border={!error}
				class:bg-default={disabled}
				class:pl-10={$$slots.leading}
				class:pl-3={!$$slots.leading}
			/>

			{#if $$slots.leading}
				<span
					class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none stwui-autocomplete-leading"
					class:text-danger={error}
					class:text-secondary-content={!error}
				>
					<slot name="leading" />
				</span>
			{/if}

			{#if value && value.length > 0}
				<button
					type="button"
					aria-label="clear input"
					on:click={handleClear}
					class="absolute inset-y-0 right-8 items-center hidden group-focus-within:flex active:flex text-secondary-content stwui-autocomplete-clear-wrapper"
				>
					<span transition:scale|local class="flex items-center text-content">
						<Icon data={close} />
					</span>
				</button>
			{/if}

			{#if error}
				<span
					class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none stwui-autocomplete-error-wrapper"
				>
					<Icon data={errorIcon} />
				</span>
			{:else}
				<span
					class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-secondary-content"
				>
					<Icon data={unfold_more_horizontal} />
				</span>
			{/if}
		</button>

		{#if mobile && visible}
			<Portal>
				<Drawer
					{handleClose}
					placement="bottom"
					class="select-mobile stwui-autocomplete-mobile-drawer"
					panelClass="!max-h-[14rem]"
				>
					<div class="p-3 border-b border-border shadow-md">
						<!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
						<input
							name={`${name}-mobile`}
							id={`${name}-mobile`}
							bind:value
							{placeholder}
							{disabled}
							on:input
							on:change
							on:focus={handleOpen}
							autocomplete="off"
							role="presentation"
							aria-controls="options"
							class="bg-surface text-content w-full h-[2.5rem] pr-10 py-2 border rounded-md outline-none placeholder-secondary-content placeholder-opacity-80 stwui-autocomplete-mobile-input"
							class:border-danger={error}
							class:text-danger={error}
							class:placeholder-red-300={error}
							class:focus:border-danger={error}
							class:focus:border-primary={!error}
							class:border-border={!error}
							class:bg-default={disabled}
							class:pl-10={$$slots.leading}
							class:pl-3={!$$slots.leading}
						/>
					</div>
					<div
						class="h-[calc(100%-52px)] overflow-y-auto overflow-x-hidden stwui-autocomplete-mobile-options"
					>
						<slot name="options" />
					</div>
				</Drawer>
			</Portal>
		{:else if visible}
			<slot name="options" />
		{/if}
	</div>
	{#if error}
		<p
			transition:slide|local
			class="mt-2 text-sm text-danger stwui-autocomplete-error"
			id="{name}-error"
		>
			{error}
		</p>
	{/if}
</div>
