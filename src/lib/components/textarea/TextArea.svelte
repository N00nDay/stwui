<script lang="ts">
	import { slide } from 'svelte/transition';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let readonly = false;
	export let disabled = false;

	let textarea: HTMLTextAreaElement;
	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

	const defaultClass = 'stwui-textarea-wrapper relative';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('textarea-error', currentError);
	setContext('textarea-name', name);

	// TODO: add action buttons/pills
</script>

{#if $$slots.title || $$slots.pills || $$slots.actions}
	<div class={finalClass}>
		<slot name="label" />
		<div
			class="mt-1 overflow-hidden rounded-md border w-full outline-none focus:outline-none sm:text-sm opacity-75={disabled}"
			class:border-danger={error}
			class:text-danger={error}
			class:focus-within:border-red-500={error}
			class:focus-within:border-primary={!error}
			class:border-border={!error}
			class:bg-surface={!disabled}
			class:bg-default={disabled}
		>
			<slot name="title" />
			<label for="description" class="sr-only">Description</label>
			<textarea
				bind:this={textarea}
				rows="2"
				{placeholder}
				{autocapitalize}
				{autocomplete}
				{name}
				{readonly}
				{disabled}
				id={name}
				bind:value
				class="block bg-surface w-full resize-none border-0 py-0 focus:ring-0 sm:text-sm sm:leading-6 placeholder-secondary-content placeholder-opacity-80 stwui-textarea"
				class:mb-2.5={!$$slots.actions && !$$slots.pills}
				class:mt-2.5={!$$slots.title}
				class:placeholder-red-300={error}
			/>

			{#if $$slots.pills || $$slots.actions}
				<div aria-hidden="true">
					{#if $$slots.pills}
						<div class="py-2">
							<div class="h-9" />
						</div>
					{/if}
					{#if $$slots.actions}
						<div class="h-px" />
						<div class="py-2">
							<div class="py-px">
								<div class="h-9" />
							</div>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		{#if $$slots.pills || $$slots.actions}
			<div class="absolute inset-x-px bottom-0">
				{#if $$slots.pills}
					<slot name="pills" />
				{/if}
				{#if $$slots.actions}
					<slot name="actions" />
				{/if}
			</div>
		{/if}
		{#if error}
			<p
				transition:slide|local
				class="mt-2 text-sm text-danger stwui-textarea-error"
				id="{name}-error"
			>
				{error}
			</p>
		{/if}
	</div>
{:else}
	<div class={finalClass} style={$$props.style}>
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
				class="block w-full outline-none focus:outline-none sm:text-sm rounded-md placeholder-secondary-content placeholder-opacity-80 stwui-textarea"
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
			<p
				transition:slide|local
				class="mt-2 text-sm text-danger stwui-textarea-error"
				id="{name}-error"
			>
				{error}
			</p>
		{/if}
	</div>
{/if}
