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
		component: 'Steps.Step.Title'
	});

	useContext({
		context_id: STEPS_STEP_CONTEXT_ID,
		parent: 'Steps.Step',
		component: 'Steps.Step.Title'
	});

	const {
		currentStep,
		variant
	}: {
		currentStep: Writable<number>;
		variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text';
	} = getContext(STEPS_CONTEXT_ID);
	const { step }: { step: number } = getContext(STEPS_STEP_CONTEXT_ID);

	let defaultClass = '';
	if (variant === 'bullets') {
		if ($currentStep > step) {
			defaultClass = 'sr-only';
		} else if ($currentStep === step) {
			defaultClass = 'sr-only';
		} else {
			defaultClass = 'sr-only';
		}
	} else if (variant === 'bullets-text') {
		if ($currentStep > step) {
			defaultClass = 'ml-3 text-sm font-medium text-light-content dark:text-dark-content';
		} else if ($currentStep === step) {
			defaultClass = 'ml-3 text-sm font-medium text-primary';
		} else {
			defaultClass =
				'ml-3 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content group-hover:text-light-content dark:group-hover:text-dark-content';
		}
	} else if (variant === 'circles-text') {
		if ($currentStep > step) {
			defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
		} else if ($currentStep === step) {
			defaultClass = 'text-sm font-medium text-primary';
		} else {
			defaultClass =
				'text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content';
		}
	} else if (variant === 'simple') {
		if ($currentStep > step) {
			defaultClass = 'text-sm font-medium text-primary group-hover:text-primary-hover';
		} else if ($currentStep === step) {
			defaultClass = 'text-sm font-medium text-primary dark:text-primary';
		} else {
			defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
		}
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'simple'}
	{#if $currentStep > step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else if $currentStep === step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{/if}
{:else if variant === 'bullets'}
	{#if $currentStep > step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else if $currentStep === step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{/if}
{:else if variant === 'bullets-text'}
	{#if $currentStep > step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else if $currentStep === step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else}
		<p class={finalClass} style={$$props.style}>
			<slot />
		</p>
	{/if}
{:else if variant === 'circles-text'}
	{#if $currentStep > step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else if $currentStep === step}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{:else}
		<span class={finalClass} style={$$props.style}><slot /></span>
	{/if}
{/if}
