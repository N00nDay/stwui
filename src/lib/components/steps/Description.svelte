<script lang="ts">
	import { STEPS_CONTEXT_ID } from './Steps.svelte';
	import { STEPS_STEP_CONTEXT_ID } from './Step.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';

	useContext({
		context_id: STEPS_CONTEXT_ID,
		parent: 'Steps',
		component: 'Steps.Step.Description'
	});

	useContext({
		context_id: STEPS_STEP_CONTEXT_ID,
		parent: 'Steps.Step',
		component: 'Steps.Step.Description'
	});

	const {
		currentStep,
		variant
	}: {
		currentStep: Writable<number>;
		variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text';
	} = getContext(STEPS_CONTEXT_ID);
	const { index }: { index: number } = getContext(STEPS_STEP_CONTEXT_ID);

	let defaultClass = '';
	if (variant === 'circles-text') {
		if ($currentStep > index + 1) {
			defaultClass =
				'text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150';
		} else if ($currentStep === index + 1) {
			defaultClass =
				'text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150';
		} else {
			defaultClass =
				'text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150';
		}
	} else if (variant === 'simple') {
		if ($currentStep > index + 1) {
			defaultClass =
				'text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150';
		} else if ($currentStep === index + 1) {
			defaultClass =
				'text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150';
		} else {
			defaultClass =
				'text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150';
		}
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'simple'}
	{#if $currentStep > index + 1}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else if $currentStep === index + 1}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{/if}
{:else if variant === 'circles-text'}
	{#if $currentStep > index + 1}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else if $currentStep === index + 1}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{/if}
{/if}
