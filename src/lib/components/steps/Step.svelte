<script lang="ts" context="module">
	export const STEPS_STEP_CONTEXT_ID = 'steps-step-context-id';
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { STEPS_CONTEXT_ID } from './Steps.svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';

	export let href: string;
	export let step: number;

	useContext({
		context_id: STEPS_CONTEXT_ID,
		parent: 'Steps',
		component: 'Steps.Step'
	});

	setContext(STEPS_STEP_CONTEXT_ID, {
		step
	});

	const {
		variant,
		currentStep
	}: {
		variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text';
		currentStep: Writable<number>;
	} = getContext(STEPS_CONTEXT_ID);

	let defaultClass = '';
	$: if (variant === 'bullets') {
		if ($currentStep > step) {
			defaultClass = 'block h-2.5 w-2.5 rounded-full bg-primary hover:bg-primary-hover';
		} else if ($currentStep === step) {
			defaultClass = 'relative flex items-center justify-center';
		} else {
			defaultClass =
				'block h-2.5 w-2.5 rounded-full bg-light-border dark:bg-dark-border hover:bg-light-border-base dark:hover:bg-dark-border-base';
		}
	} else if (variant === 'simple') {
		if ($currentStep > step) {
			defaultClass =
				'group flex flex-col border-l-4 border-primary hover:border-primary-hover py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0';
		} else if ($currentStep === step) {
			defaultClass =
				'flex flex-col border-l-4 border-primary dark:border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0';
		} else {
			defaultClass =
				'group flex flex-col border-l-4 border-light-border dark:border-dark-border hover:border-light-border-base dark:hover:border-dark-border-base py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0';
		}
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'simple'}
	{#if $currentStep > step}
		<li data-step={step} class="md:flex-1" on:click>
			<!-- Completed Step -->
			<a {href} class={finalClass} style={$$props.style}>
				<slot name="title" />
				<slot name="description" />
			</a>
		</li>
	{:else if $currentStep === step}
		<li data-step={step} class="md:flex-1" on:click>
			<!-- Current Step -->
			<a {href} class={finalClass} style={$$props.style}>
				<slot name="title" />
				<slot name="description" />
			</a>
		</li>
	{:else}
		<li data-step={step} class="md:flex-1" on:click>
			<!-- Upcoming Step -->
			<a {href} class={finalClass} style={$$props.style}>
				<slot name="title" />
				<slot name="description" />
			</a>
		</li>
	{/if}
{:else if variant === 'bullets'}
	{#if $currentStep > step}
		<li data-step={step} on:click>
			<!-- Completed Step -->
			<a {href} class={finalClass} style={$$props.style}>
				<slot name="title" />
			</a>
		</li>
	{:else if $currentStep === step}
		<li data-step={step} on:click>
			<!-- Current Step -->
			<a {href} class={finalClass} style={$$props.style}>
				<span class="absolute flex h-5 w-5 p-px">
					<span class="h-full w-full rounded-full bg-primary opacity-50" />
				</span>
				<span class="relative block h-2.5 w-2.5 rounded-full bg-primary" />
				<slot name="title" />
			</a>
		</li>
	{:else}
		<li data-step={step} on:click>
			<!-- Upcoming Step -->
			<a {href} class={finalClass} style={$$props.style}>
				<slot name="title" />
			</a>
		</li>
	{/if}
{:else if variant === 'bullets-text'}
	{#if $currentStep > step}
		<li data-step={step} on:click>
			<!-- Complete Step -->
			<a {href} class="group">
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
		<li data-step={step} on:click>
			<!-- Current Step -->
			<a {href} class="flex items-start">
				<span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
					<span class="absolute h-4 w-4 rounded-full bg-primary opacity-50" />
					<span class="relative block h-2 w-2 rounded-full bg-primary" />
				</span>
				<slot name="title" />
			</a>
		</li>
	{:else}
		<li data-step={step} on:click>
			<!-- Upcoming Step -->
			<a {href} class="group">
				<div class="flex items-start">
					<div class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
						<div
							class="h-2 w-2 rounded-full bg-light-border dark:bg-dark-border group-hover:bg-light-border-base dark:group-hover:bg-dark-border-base"
						/>
					</div>
					<slot name="title" />
				</div>
			</a>
		</li>
	{/if}
{:else if variant === 'circles-text'}
	{#if $currentStep > step}
		<li data-step={step} class="relative pb-10" on:click>
			<div class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-primary" />
			<!-- Complete Step -->
			<a {href} class="group relative flex items-start">
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
		<li data-step={step} class="step relative pb-10" on:click>
			<div
				class="divider absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-light-border dark:bg-dark-border"
			/>
			<!-- Current Step -->
			<a {href} class="group relative flex items-start">
				<span class="flex h-9 items-center">
					<span
						class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-light-surface dark:bg-dark-surface"
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
		<li data-step={step} class="step relative pb-10" on:click>
			<div
				class="divider absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-light-border dark:bg-dark-border"
			/>

			<!-- Upcoming Step -->
			<a {href} class="group relative flex items-start">
				<span class="flex h-9 items-center">
					<span
						class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface group-hover:border-light-border-base dark:group-hover:border-dark-border-base"
					>
						<span
							class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-light-border dark:group-hover:bg-dark-border"
						/>
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
