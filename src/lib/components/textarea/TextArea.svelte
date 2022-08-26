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
			class:text-red-600={error}>{label}</label
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
			class="block w-full outline-none ring-0 focus:ring-0 sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface transition-all duration-150"
			class:border-red-400={error}
			class:text-red-700={error}
			class:dark:text-red-300={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:border-light-icon-background={!error}
			class:dark:border-dark-icon-background={!error}
			{placeholder}
			bind:value
		/>
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-red-600" id="{name}-error">{error}</p>
	{/if}
</div>
