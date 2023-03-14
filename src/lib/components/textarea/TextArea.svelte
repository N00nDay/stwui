<script lang="ts">
	import { slide } from 'svelte/transition';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let readonly = false;
	export let disabled = true;

	let textarea: HTMLTextAreaElement;
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

	setContext('textarea-error', currentError);
	setContext('textarea-name', name);

	// TODO: add action buttons/pills
</script>

<div class={$$props.class} style={$$props.style}>
	<slot name="label" />
	<div class="mt-1 opacity-75={disabled}">
		<textarea
			bind:this={textarea}
			rows="4"
			{autocapitalize}
			{autocomplete}
			{name}
			{readonly}
			{disabled}
			id={name}
			class="block w-full outline-none focus:outline-none sm:text-sm rounded-md placeholder-secondary-content placeholder-opacity-80"
			class:border-danger={error}
			class:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:border-border={!error}
			class:bg-surface={!disabled}
			class:bg-default={disabled}
			{placeholder}
			bind:value
		/>
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
