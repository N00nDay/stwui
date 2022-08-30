<script lang="ts">
	import { slide } from 'svelte/transition';

	export let name: string;
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;

	// TODO: add action buttons/pills
</script>

<div class={$$props.class} style={$$props.style}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium transition-all duration-150{srOnly ? ' sr-only' : ''}"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:text-danger={error}>{label}</label
		>
	{/if}
	<div class="mt-1">
		<textarea
			rows="4"
			{autofocus}
			{autocapitalize}
			{autocomplete}
			{name}
			id={name}
			class="block w-full outline-none focus:outline-none shadow-sm dark:shadow-black sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface light-border dark:dark-border transition-all duration-150"
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
