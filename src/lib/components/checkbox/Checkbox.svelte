<script lang="ts">
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { nanoid } from 'nanoid';
	import { forwardEventsBuilder, useActions, type ActionArray } from '$lib/actions';
	import { exclude } from '$lib/utils/exclude';

	export let name: string = nanoid();
	export let value: string;
	export let indeterminate = false;
	export let disabled = false;
	export let checked = false;
	export let error: string | undefined = undefined;
	export let use: ActionArray = [];

	const forwardEvents = forwardEventsBuilder(get_current_component());

	// TODO: allow checked status color prop

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Spacebar') {
			e.preventDefault();
			e.stopPropagation();
			checked = !checked;
		}
	}

	const defaultClass =
		'stwui-checkbox checkbox checked:bg-primary indeterminate:bg-primary hover:border-primary bg-surface h-6 w-6 text-primary border-border disabled:hover:border-border rounded-md cursor-pointer disabled:checked:bg-default';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('checkbox-name', name);
</script>

<button
	tabindex="-1"
	type="button"
	on:keydown={handleKeydown}
	class="relative flex items-start stwui-checkbox-wrapper"
	class:pointer-events-none={disabled}
	class:opacity-75={disabled}
>
	<div class="flex items-center h-5">
		<input
			id={name}
			{name}
			{indeterminate}
			{disabled}
			bind:checked
			type="checkbox"
			{value}
			class={finalClass}
			style={$$props.style}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class', 'style', 'type', 'value', 'checked', 'disabled', 'name', 'htmlType'])}
		/>
	</div>
	<div class="ml-3 text-sm">
		<slot name="label" />
		<slot name="description" />
		<slot />
	</div>
</button>
{#if error}
	<p
		transition:slide|local
		class="!mt-2 text-sm text-danger stwui-checkbox-error"
		id="{name}-error"
	>
		{error}
	</p>
{/if}

<style>
	.checkbox:checked {
		animation: checkmark 200ms ease-in-out;
	}

	@keyframes checkmark {
		0% {
			background-position-y: 5px;
		}
		50% {
			background-position-y: -2px;
		}
		100% {
			background-position-y: 0px;
		}
	}
</style>
