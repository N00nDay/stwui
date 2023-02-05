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
	$: if (variant === 'bullets') {
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
