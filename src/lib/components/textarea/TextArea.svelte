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

	let textarea: HTMLTextAreaElement;
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

	setContext('textarea-error', currentError);
	setContext('textarea-name', name);

	// TODO: add action buttons/pills
</script>

<div class={$$props.class} style={$$props.style}>
	<slot name="label" />
	<div class="mt-1">
		<textarea
			bind:this={textarea}
			rows="4"
			{autocapitalize}
			{autocomplete}
			{name}
			{readonly}
			id={name}
			class="block w-full outline-none focus:outline-none shadow-sm dark:shadow-black sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface light-border dark:dark-border"
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:light-border={!error}
			class:dark:dark-border={!error}
			{placeholder}
			bind:value
		/>
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
