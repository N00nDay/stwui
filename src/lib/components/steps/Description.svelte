<script lang="ts">
	import { STEPS_CONTEXT_ID } from './Steps.svelte';
	import { STEPS_STEP_CONTEXT_ID } from './Step.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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
	const { step }: { step: number } = getContext(STEPS_STEP_CONTEXT_ID);

	let defaultClass = '';
	if (variant === 'circles-text') {
		if ($currentStep > step) {
			defaultClass = 'text-sm text-light-secondary-content dark:text-dark-secondary-content';
		} else if ($currentStep === step) {
			defaultClass = 'text-sm text-light-secondary-content dark:text-dark-secondary-content';
		} else {
			defaultClass = 'text-sm text-light-secondary-content dark:text-dark-secondary-content';
		}
	} else if (variant === 'simple') {
		if ($currentStep > step) {
			defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
		} else if ($currentStep === step) {
			defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
		} else {
			defaultClass =
				'text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content';
		}
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'simple'}
	{#if $currentStep > step}
		<span
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}><slot /></span
		>
	{:else if $currentStep === step}
		<span
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}><slot /></span
		>
	{:else}
		<span
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}><slot /></span
		>
	{/if}
{:else if variant === 'circles-text'}
	{#if $currentStep > step}
		<span
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}><slot /></span
		>
	{:else if $currentStep === step}
		<span
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}><slot /></span
		>
	{:else}
		<span
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}><slot /></span
		>
	{/if}
{/if}
