<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let href: string;
	export let step: number;

	const currentStep: Writable<number> = getContext('steps-currentStep');
	const variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text' =
		getContext('steps-variant');

	const bulletsPreviousStep =
		'block h-2.5 w-2.5 rounded-full bg-default hover:bg-default stwui-steps-step-bullet-previous';
	const bulletsCurrentStep =
		'relative flex items-center justify-center stwui-steps-step-bullet-current';
	const bulletsNextStep =
		'block h-2.5 w-2.5 rounded-full bg-primary hover:bg-primary-hover stwui-steps-step-bullet-next';

	const simplePreviousStep =
		'group flex flex-col border-l-4 border-border hover:border-border py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 stwui-steps-step-simple-previous';
	const simpleCurrentStep =
		'flex flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 stwui-steps-step-simple-current';
	const simpleNextStep =
		'group flex flex-col border-l-4 border-primary hover:border-primary-hover py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 stwui-steps-step-simple-next';

	$: finalClass = twMerge(
		variant === 'bullets' && $currentStep < step ? bulletsPreviousStep : false,
		variant === 'bullets' && $currentStep === step ? bulletsCurrentStep : false,
		variant === 'bullets' && $currentStep > step ? bulletsNextStep : false,
		variant === 'simple' && $currentStep < step ? simplePreviousStep : false,
		variant === 'simple' && $currentStep === step ? simpleCurrentStep : false,
		variant === 'simple' && $currentStep > step ? simpleNextStep : false,

		$$props.class
	);

	setContext('steps-step', step);
</script>

{#if variant === 'simple'}
	{#if $currentStep > step}
		<li data-step={step} class="md:flex-1">
			<!-- Completed Step -->
			<a
				{href}
				class={finalClass}
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<slot name="title" />
				<slot name="description" />
			</a>
		</li>
	{:else if $currentStep === step}
		<li data-step={step} class="md:flex-1">
			<!-- Current Step -->
			<a
				{href}
				class={finalClass}
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<slot name="title" />
				<slot name="description" />
			</a>
		</li>
	{:else}
		<li data-step={step} class="md:flex-1">
			<!-- Upcoming Step -->
			<a
				{href}
				class={finalClass}
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<slot name="title" />
				<slot name="description" />
			</a>
		</li>
	{/if}
{:else if variant === 'bullets'}
	{#if $currentStep > step}
		<li data-step={step}>
			<!-- Completed Step -->
			<a
				{href}
				class={finalClass}
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<slot name="title" />
			</a>
		</li>
	{:else if $currentStep === step}
		<li data-step={step}>
			<!-- Current Step -->
			<a
				{href}
				class={finalClass}
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<span class="absolute flex h-5 w-5 p-px">
					<span class="h-full w-full rounded-full bg-primary opacity-50" />
				</span>
				<span class="relative block h-2.5 w-2.5 rounded-full bg-primary" />
				<slot name="title" />
			</a>
		</li>
	{:else}
		<li data-step={step}>
			<!-- Upcoming Step -->
			<a
				{href}
				class={finalClass}
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<slot name="title" />
			</a>
		</li>
	{/if}
{:else if variant === 'bullets-text'}
	{#if $currentStep > step}
		<li data-step={step}>
			<!-- Complete Step -->
			<a
				{href}
				class="group"
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<span class="flex items-start">
					<span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
						<svg
							class="h-full w-full text-primary group-hover:text-primary-hover"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					<slot name="title" />
				</span>
			</a>
		</li>
	{:else if $currentStep === step}
		<li data-step={step}>
			<!-- Current Step -->
			<a
				{href}
				class="flex items-start"
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
					<span class="absolute h-4 w-4 rounded-full bg-primary opacity-50" />
					<span class="relative block h-2 w-2 rounded-full bg-primary" />
				</span>
				<slot name="title" />
			</a>
		</li>
	{:else}
		<li data-step={step}>
			<!-- Upcoming Step -->
			<a
				{href}
				class="group"
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<div class="flex items-start">
					<div class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
						<div class="h-2 w-2 rounded-full bg-border group-hover:bg-default" />
					</div>
					<slot name="title" />
				</div>
			</a>
		</li>
	{/if}
{:else if variant === 'circles-text'}
	{#if $currentStep > step}
		<li data-step={step} class="relative pb-10">
			<div class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-primary" />
			<!-- Complete Step -->
			<a
				{href}
				class="group relative flex items-start"
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<span class="flex h-9 items-center">
					<span
						class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary group-hover:bg-primary-hover"
					>
						<!-- Heroicon name: mini/check -->
						<svg
							class="h-5 w-5 text-primary-content"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</span>
				<span class="ml-4 flex min-w-0 flex-col">
					<slot name="title" />
					<slot name="description" />
				</span>
			</a>
		</li>
	{:else if $currentStep === step}
		<li data-step={step} class="step relative pb-10">
			<div class="divider absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-default" />
			<!-- Current Step -->
			<a
				{href}
				class="group relative flex items-start"
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<span class="flex h-9 items-center">
					<span
						class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-surface"
					>
						<span class="h-2.5 w-2.5 rounded-full bg-primary" />
					</span>
				</span>
				<span class="ml-4 flex min-w-0 flex-col">
					<slot name="title" />
					<slot name="description" />
				</span>
			</a>
		</li>
	{:else}
		<li data-step={step} class="step relative pb-10">
			<div class="divider absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-default" />

			<!-- Upcoming Step -->
			<a
				{href}
				class="group relative flex items-start"
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			>
				<span class="flex h-9 items-center">
					<span
						class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-surface group-hover:border-border"
					>
						<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-default" />
					</span>
				</span>
				<span class="ml-4 flex min-w-0 flex-col">
					<slot name="title" />
					<slot name="description" />
				</span>
			</a>
		</li>
	{/if}
{/if}

<style>
	.step:last-of-type .divider {
		display: none;
	}
</style>
