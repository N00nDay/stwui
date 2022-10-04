<script lang="ts" context="module">
	export const CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID = 'checkbox-group-checkbox-context-id';
</script>

<script lang="ts">
	import { useContext } from '$lib/utils/useContext';

	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { CHECKBOX_GROUP_CONTEXT_ID } from './CheckboxGroup.svelte';
	export let name: string;
	export let value: string;

	useContext({
		context_id: CHECKBOX_GROUP_CONTEXT_ID,
		parent: 'CheckboxGroup',
		component: 'CheckboxGroup.Checkbox'
	});

	setContext(CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID, {
		checkbox: true,
		name
	});

	const defaultClass =
		'checkbox checked:bg-primary dark:checked:bg-primary hover:border-primary dark:hover:border-primary bg-light-surface dark:bg-dark-surface h-6 w-6 text-primary light-border-base dark:dark-border-base rounded-md cursor-pointer';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class="relative flex items-start">
	<div class="flex items-center h-5">
		<input id={name} {name} type="checkbox" {value} class={finalClass} style={$$props.style} />
	</div>
	<div class="ml-3 text-sm">
		<slot name="label" />
		<slot name="description" />
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
