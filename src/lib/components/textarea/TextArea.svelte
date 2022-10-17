<script lang="ts" context="module">
	export const TEXT_AREA_CONTEXT_ID = 'text-area-context-id';
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import { setContext } from 'svelte';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;
	export let readonly = false;

	setContext(TEXT_AREA_CONTEXT_ID, {
		textArea: true,
		error,
		name
	});

	// TODO: add action buttons/pills
</script>

<div class={$$props.class} style={$$props.style}>
	<slot name="label" />
	<div class="mt-1">
		<textarea
			rows="4"
			{autofocus}
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
