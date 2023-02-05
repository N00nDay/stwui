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

	let defaultClass = '';
	$: if (variant === 'circles-text') {
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
