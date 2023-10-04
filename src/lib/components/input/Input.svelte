<script lang="ts">
	import { setContext } from 'svelte';
	import { slide, scale } from 'svelte/transition';
	import Swap from '../swap';
	import Icon from '../icon';
	import { error as errorIcon, close, eye, eye_off } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { writable, type Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let name: string;
	export let type: 'text' | 'email' | 'password' = 'text';
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: 'on' | 'off' | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let readonly: true | undefined = undefined;
	export let tabindex: string | undefined = undefined;
	export let showPasswordToggle = false;
	export let allowClear = false;
	export let disabled = false;

	let input: HTMLInputElement;
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

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
		input.value = '';
		value = undefined;
	}

	const defaultClass = 'group stwui-input-wrapper';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('input-name', name);
	setContext('input-error', currentError);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="label" />
	<div
		class="mt-1 relative rounded-md h-[2.5rem]"
		class:text-danger={error}
		class:opacity-75={disabled}
	>
		<input
			bind:this={input}
			use:useType
			{autocapitalize}
			{autocomplete}
			{name}
			id={name}
			{readonly}
			{tabindex}
			{disabled}
			class="block h-[2.5rem] w-full px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-surface outline-offset-0 placeholder-secondary-content placeholder-opacity-80 stwui-input"
			class:border-border={!error}
			class:border-danger={error}
			class:text-danger={error}
			class:placeholder-danger={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:group-focus-within:not(.disable-focus-active):border-red-500={error}
			class:group-focus-within:not(.disable-focus-active):border-primary={!error}
			class:group-active:not(.disable-focus-active):border-red-500={error}
			class:group-active:not(.disable-focus-active):border-primary={!error}
			class:bg-default={disabled}
			class:pl-10={$$slots.leading}
			class:pr-10={$$slots.trailing || error || allowClear || type === 'password'}
			{placeholder}
			bind:value
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}
		/>

		{#if $$slots.leading}
			<span
				class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary-content stwui-input-leading-wrapper"
				class:text-danger={error}
			>
				<slot name="leading" />
			</span>
		{/if}

		{#if allowClear && value && value.length > 0}
			<button
				aria-label="clear"
				on:click={handleClear}
				class="disable-focus-active absolute inset-y-0 hidden group-focus-within:flex active:flex items-center stwui-input-clear-wrapper"
				class:right-10={showPasswordToggle || $$slots.trailing || error}
				class:right-3={!showPasswordToggle && !$$slots.trailing && !error}
			>
				<span transition:scale|local class="items-center flex text-secondary-content">
					<Icon data={close} />
				</span>
			</button>
		{/if}

		{#if showPasswordToggle}
			<Swap
				on:click={togglePasswordVisibility}
				swapped={passwordVisible}
				type="flip"
				class="disable-focus-active absolute left-[unset] inset-y-0 right-1 flex items-center w-9 text-secondary-content stwui-input-password-toggle-wrapper"
			>
				<Icon slot="on" data={eye} />
				<Icon slot="off" data={eye_off} />
			</Swap>
		{:else if $$slots.trailing && !error}
			<span
				class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-secondary-content stwui-input-trailing-wrapper"
			>
				<slot name="trailing" />
			</span>
		{:else if error}
			<span
				class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none stwui-input-error-icon"
			>
				<Icon data={errorIcon} />
			</span>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger stwui-input-error" id="{name}-error">
			{error}
		</p>
	{/if}
</div>
