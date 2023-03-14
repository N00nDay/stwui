<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export let name: string;
	export let value: string;
	export let indeterminate = false;
	export let disabled = false;
	export let checked = false;

	// TODO: allow checked status color prop

	const defaultClass =
		'checkbox checked:bg-primary indeterminate:bg-primary hover:border-primary bg-surface h-6 w-6 text-primary border-border disabled:hover:border-border rounded-md cursor-pointer disabled:checked:bg-default';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('checkbox-name', name);
</script>

<div
	class="relative flex items-start"
	class:pointer-events-none={disabled}
	class:opacity-75={disabled}
>
	<div class="flex items-center h-5">
		<input
			id={name}
			{name}
			{indeterminate}
			{disabled}
			{checked}
			type="checkbox"
			{value}
			class={finalClass}
			style={$$props.style}
		/>
	</div>
	<div class="ml-3 text-sm">
		<slot name="label" />
		<slot name="description" />
		<slot />
	</div>
</div>

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
