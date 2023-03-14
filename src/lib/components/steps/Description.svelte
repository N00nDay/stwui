<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const currentStep: Writable<number> = getContext('steps-currentStep');
	const variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text' =
		getContext('steps-variant');
	const step: number = getContext('steps-step');

	const circleStep = 'text-sm text-secondary-content';
	const simpleStep = 'text-sm font-medium text-content';
	const simplePreviousStep = 'text-sm font-medium text-secondary-content';

	$: finalClass = twMerge(
		variant === 'circles-text' ? circleStep : false,
		variant === 'simple' && $currentStep < step
			? simplePreviousStep
			: variant === 'simple'
			? simpleStep
			: false,

		$$props.class
	);
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
