<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text' = 'simple';
	export let currentStep: number;

	let acitveStep = writable(currentStep);
	$: $acitveStep = currentStep;

	setContext('steps-variant', variant);
	setContext('steps-currentStep', acitveStep);

	let defaultClass = '';
	$: if (variant === 'bullets') {
		defaultClass = 'flex items-center justify-center';
	} else if (variant === 'bullets-text') {
		defaultClass = 'py-12 px-4 sm:px-6 lg:px-8';
	} else if (variant === 'circles-text') {
		defaultClass = 'overflow-hidden';
	} else if (variant === 'simple') {
		defaultClass = 'space-y-4 md:flex md:space-y-0 md:space-x-8';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'simple'}
	<nav>
		<ol class={finalClass} style={$$props.style}>
			<slot />
		</ol>
	</nav>
{:else if variant === 'bullets'}
	<nav class={finalClass} style={$$props.style}>
		<slot name="summary" />
		<ol class="ml-8 flex items-center space-x-5">
			<slot />
		</ol>
	</nav>
{:else if variant === 'bullets-text'}
	<div class={finalClass} style={$$props.style}>
		<nav class="flex justify-center">
			<ol class="space-y-6">
				<slot />
			</ol>
		</nav>
	</div>
{:else if variant === 'circles-text'}
	<nav>
		<ol class={finalClass} style={$$props.style}>
			<slot />
		</ol>
	</nav>
{/if}
