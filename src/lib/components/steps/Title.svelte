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

	const bulletsTextNextStep = 'ml-3 text-sm font-medium text-content';
	const bulletsTextCurrentStep = 'ml-3 text-sm font-medium text-primary';
	const bulletsTextPreviousStep =
		'ml-3 text-sm font-medium text-secondary-content group-hover:text-content';

	const circlesTextNextStep = 'text-sm font-medium text-content';
	const circlesTextCurrentStep = 'text-sm font-medium text-primary';
	const circlesTextPreviousStep = 'text-sm font-medium text-secondary-content';

	const simpleNextStep = 'text-sm font-medium text-primary group-hover:text-primary-hover';
	const simpleCurrentStep = 'text-sm font-medium text-primary';
	const simplePreviousStep = 'text-sm font-medium text-content';

	$: finalClass = twMerge(
		variant === 'bullets' ? 'sr-only' : false,

		variant === 'bullets-text' && $currentStep < step ? bulletsTextPreviousStep : false,
		variant === 'bullets-text' && $currentStep === step ? bulletsTextCurrentStep : false,
		variant === 'bullets-text' && $currentStep > step ? bulletsTextNextStep : false,

		variant === 'circles-text' && $currentStep < step ? circlesTextPreviousStep : false,
		variant === 'circles-text' && $currentStep === step ? circlesTextCurrentStep : false,
		variant === 'circles-text' && $currentStep > step ? circlesTextNextStep : false,

		variant === 'simple' && $currentStep < step ? simplePreviousStep : false,
		variant === 'simple' && $currentStep === step ? simpleCurrentStep : false,
		variant === 'simple' && $currentStep > step ? simpleNextStep : false,

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
{:else if variant === 'bullets'}
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
{:else if variant === 'bullets-text'}
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
		<p
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}
		>
			<slot />
		</p>
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
