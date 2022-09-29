<script lang="ts" context="module">
	export const STEPS_CONTEXT_ID = 'steps-context-id';

	// export interface Step {
	// 	href: string;
	// 	title: string;
	// 	description?: string;
	// }
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text' = 'simple';
	// export let steps: Step[] = [];
	export let currentStep: number;
	let acitveStep = writable(currentStep);
	$: $acitveStep = currentStep;

	setContext(STEPS_CONTEXT_ID, {
		steps: true,
		variant,
		currentStep: acitveStep
	});

	let defaultClass = '';
	if (variant === 'bullets') {
		defaultClass = 'flex items-center justify-center';
	} else if (variant === 'bullets-text') {
		defaultClass = 'py-12 px-4 sm:px-6 lg:px-8';
	} else if (variant === 'circles-text') {
		defaultClass = 'overflow-hidden';
	} else if (variant === 'simple') {
		defaultClass = 'space-y-4 md:flex md:space-y-0 md:space-x-8';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'simple'}
	<nav>
		<ol class={finalClass} style={$$props.style}>
			<slot />
			<!-- {#each steps as step, i}
				{#if currentStep > i + 1}
					<li class="md:flex-1">
						<a
							href={step.href}
							class="group flex flex-col border-l-4 border-primary hover:border-primary-hover transition-all duration-150 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
						>
							<span
								class="text-sm font-medium text-primary group-hover:text-primary-hover transition-all duration-150"
								>{step.title}</span
							>
							<span
								class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
								>{step.description}</span
							>
						</a>
					</li>
				{:else if currentStep === i + 1}
					<li class="md:flex-1">
						<a
							href={step.href}
							class="flex flex-col border-l-4 border-primary dark:border-primary transition-all duration-150 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
						>
							<span
								class="text-sm font-medium text-primary dark:text-primary transition-all duration-150"
								>{step.title}</span
							>
							<span
								class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
								>{step.description}</span
							>
						</a>
					</li>
				{:else}
					<li class="md:flex-1">
						<a
							href={step.href}
							class="group flex flex-col border-l-4 border-light-border dark:border-dark-border hover:border-light-border-base dark:hover:border-dark-border-base py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 transition-all duration-150"
						>
							<span
								class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
								>{step.title}</span
							>
							<span
								class="text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
								>{step.description}</span
							>
						</a>
					</li>
				{/if}
			{/each} -->
		</ol>
	</nav>
{:else if variant === 'bullets'}
	<nav class={finalClass} style={$$props.style}>
		<slot name="summary" />
		<!-- <p class="text-sm font-medium">Step {currentStep} of {steps.length}</p> -->
		<ol class="ml-8 flex items-center space-x-5">
			<slot />
			<!-- {#each steps as step, i}
				{#if currentStep > i + 1}
					<li>
						<a
							href={step.href}
							class="block h-2.5 w-2.5 rounded-full bg-primary hover:bg-primary-hover transition-all duration-150"
						>
							<span class="sr-only">{step.title}</span>
						</a>
					</li>
				{:else if currentStep === i + 1}
					<li>
						<a href={step.href} class="relative flex items-center justify-center">
							<span class="absolute flex h-5 w-5 p-px">
								<span class="h-full w-full rounded-full bg-primary opacity-50" />
							</span>
							<span class="relative block h-2.5 w-2.5 rounded-full bg-primary" />
							<span class="sr-only">{step.title}</span>
						</a>
					</li>
				{:else}
					<li>
						<a
							href={step.href}
							class="block h-2.5 w-2.5 rounded-full bg-light-border dark:bg-dark-border hover:bg-light-border-base dark:hover:bg-dark-border-base transition-all duration-150"
						>
							<span class="sr-only">{step.title}</span>
						</a>
					</li>
				{/if}
			{/each} -->
		</ol>
	</nav>
{:else if variant === 'bullets-text'}
	<div class={finalClass} style={$$props.style}>
		<nav class="flex justify-center">
			<ol class="space-y-6">
				<slot />
				<!-- {#each steps as step, i}
					{#if currentStep > i + 1}
						<li>
							<a href={step.href} class="group">
								<span class="flex items-start">
									<span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
										<svg
											class="h-full w-full text-primary group-hover:text-primary-hover transition-all duration-150"
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
									<span
										class="ml-3 text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
										>{step.title}</span
									>
								</span>
							</a>
						</li>
					{:else if currentStep === i + 1}
						<li>
							<a href={step.href} class="flex items-start">
								<span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
									<span class="absolute h-4 w-4 rounded-full bg-primary opacity-50" />
									<span class="relative block h-2 w-2 rounded-full bg-primary" />
								</span>
								<span class="ml-3 text-sm font-medium text-primary">{step.title}</span>
							</a>
						</li>
					{:else}
						<li>
							<a href={step.href} class="group">
								<div class="flex items-start">
									<div class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
										<div
											class="h-2 w-2 rounded-full bg-light-border dark:bg-dark-border group-hover:bg-light-border-base dark:group-hover:bg-dark-border-base transition-all duration-150"
										/>
									</div>
									<p
										class="ml-3 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content group-hover:text-light-content dark:group-hover:text-dark-content transition-all duration-150"
									>
										{step.title}
									</p>
								</div>
							</a>
						</li>
					{/if}
				{/each} -->
			</ol>
		</nav>
	</div>
{:else if variant === 'circles-text'}
	<nav>
		<ol class={finalClass} style={$$props.style}>
			<slot />
			<!-- {#each steps as step, i}
				{#if currentStep > i + 1}
					<li class="relative pb-10">
						<div class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-primary" />
						<a href={step.href} class="group relative flex items-start">
							<span class="flex h-9 items-center">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary group-hover:bg-primary-hover transition-all duration-150"
								>
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
								<span
									class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
									>{step.title}</span
								>
								<span
									class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
									>{step.description}</span
								>
							</span>
						</a>
					</li>
				{:else if currentStep === i + 1}
					<li class="relative pb-10">
						{#if steps.length !== i + 1}
							<div
								class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
							/>
						{/if}
						<a href={step.href} class="group relative flex items-start">
							<span class="flex h-9 items-center">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-light-surface dark:bg-dark-surface transition-all duration-150"
								>
									<span class="h-2.5 w-2.5 rounded-full bg-primary" />
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span class="text-sm font-medium text-primary">{step.title}</span>
								<span
									class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
									>{step.description}</span
								>
							</span>
						</a>
					</li>
				{:else}
					<li class="relative pb-10">
						{#if steps.length !== i + 1}
							<div
								class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
							/>
						{/if}
						<a href={step.href} class="group relative flex items-start">
							<span class="flex h-9 items-center">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface group-hover:border-light-border-base dark:group-hover:border-dark-border-base transition-all duration-150"
								>
									<span
										class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-light-border dark:group-hover:bg-dark-border transition-all duration-150"
									/>
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span
									class="text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
									>{step.title}</span
								>
								<span
									class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
									>{step.description}</span
								>
							</span>
						</a>
					</li>
				{/if}
			{/each} -->
		</ol>
	</nav>
{/if}
