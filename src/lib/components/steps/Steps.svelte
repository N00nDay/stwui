<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let variant: 'simple' | 'bullets' | 'bullets-text' | 'circles-text' = 'simple';
	export let currentStep: number;

	let acitveStep = writable(currentStep);
	$: $acitveStep = currentStep;

	const bulletsClass = 'flex items-center justify-center stwui-steps-bullets-wrapper';

	const bulletsTextClass = 'py-12 px-4 sm:px-6 lg:px-8 stwui-steps-bullets-text-wrapper';
	const circlesTextClass = 'overflow-hidden stwui-steps-circles-text-wrapper';
	const simpleClass = 'space-y-4 md:flex md:space-y-0 md:space-x-8';

	$: finalClass = twMerge(
		variant === 'bullets' ? bulletsClass : false,
		variant === 'bullets-text' ? bulletsTextClass : false,
		variant === 'circles-text' ? circlesTextClass : false,
		variant === 'simple' ? simpleClass : false,

		$$props.class
	);

	setContext('steps-variant', variant);
	setContext('steps-currentStep', acitveStep);
</script>

{#if variant === 'simple'}
	<nav class="stwui-steps-simple-wrapper">
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
