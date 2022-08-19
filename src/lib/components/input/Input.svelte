<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { slide, scale } from 'svelte/transition';

	export let leading: MaterialIcons | undefined = undefined;
	export let trailing: MaterialIcons | undefined = undefined;
	export let name: string;
	export let id: string | undefined = undefined;
	export let type: 'text' | 'email' | 'password' = 'text';
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class={$$props.class}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium {srOnly ? 'sr-only' : ''}"
			class:text-gray-700={!error}
			class:text-red-600={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md shadow-sm">
		{#if leading}
			<span
				transition:scale|local
				class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
				class:text-gray-400={!error}
				class:text-red-600={error}>{leading}</span
			>
		{/if}
		<input
			use:typeAction
			{autofocus}
			{autocapitalize}
			{autocomplete}
			{name}
			{id}
			class="block w-full outline-none ring-0 focus:ring-0 sm:text-sm rounded-md"
			class:border-red-300={error}
			class:text-red-900={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:border-gray-300={!error}
			class:pl-10={leading}
			class:pr-10={trailing || error}
			{placeholder}
			bind:value
		/>
		{#if trailing && !error}
			<span
				transition:scale|local
				class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
				class:text-gray-400={!error}
				class:text-red-600={error}>{trailing}</span
			>
		{:else if error}
			<span
				transition:scale|local
				class="material-icons absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-600"
				>error</span
			>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-red-600" id="{name}-error">{error}</p>
	{/if}
</div>
