<script lang="ts">
	import { setContext } from 'svelte/internal';
	import { slide, scale } from 'svelte/transition';
	import Swap from '../swap';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon';
	import { error as errorIcon, close, eye, eye_off } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { writable, type Writable } from 'svelte/store';
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
		input.focus();
		input.value = '';
		value = undefined;
	}

	setContext('input-name', name);
	setContext('input-error', currentError);

	const defaultClass = 'group';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="label" />
	<div
		class="mt-1 relative rounded-md shadow-sm h-[2.5rem] dark:shadow-black"
		class:text-danger={error}
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
			class:pl-10={$$slots.leading}
			class:pr-10={$$slots.trailing || error || allowClear}
			{placeholder}
			bind:value
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}
		/>

		{#if $$slots.leading}
			<span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				<slot name="leading" />
			</span>
		{/if}

		{#if allowClear && value && value.length > 0}
			<button
				aria-label="clear"
				on:click={handleClear}
				class="absolute inset-y-0 hidden group-focus-within:flex active:flex items-center"
				class:right-10={showPasswordToggle || $$slots.trailing || error}
				class:right-3={!showPasswordToggle && !$$slots.trailing && !error}
			>
				<span transition:scale|local class="items-center flex text-light-icon dark:text-dark-icon">
					<Icon data={close} />
				</span>
			</button>
		{/if}

		{#if showPasswordToggle}
			<Swap
				on:click={togglePasswordVisibility}
				swapped={passwordVisible}
				type="flip"
				class="absolute left-[unset] inset-y-0 right-1 flex items-center w-9 text-light-secondary-content dark:text-dark-secondary-content"
			>
				<Icon slot="on" data={eye} />
				<Icon slot="off" data={eye_off} />
			</Swap>
		{:else if $$slots.trailing && !error}
			<span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<slot name="trailing" />
			</span>
		{:else if error}
			<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				<Icon data={errorIcon} />
			</span>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
