<script lang="ts" context="module">
	export const TABS_CONTEXT_ID = 'tabs-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let currentTab: number | undefined;
	export let variant: 'default' | 'full-width' | 'bar' = 'default';
	export let containerClass: string | undefined = undefined;

	let selected: Writable<number | undefined> = writable(currentTab);
	$: $selected = currentTab;

	setContext(TABS_CONTEXT_ID, {
		tabs: true,
		variant,
		currentTab: selected
	});

	let defaultContainerClass = '';
	if (variant === 'bar') {
		defaultContainerClass =
			'border-light-border dark:border-dark-border transition-all duration-150 overflow-hidden rounded-md shadow-md border dark:shadow-black';
	} else {
		defaultContainerClass =
			'border-light-border dark:border-dark-border transition-all duration-150 overflow-hidden border-b';
	}
	const finalContainerClass = twMerge(defaultContainerClass, containerClass);

	let defaultClass = '';
	if (variant === 'bar') {
		defaultClass =
			'-mb-px flex transition-all duration-150 justify-evenly isolate divide-x divide-light-border dark:divide-dark-border';
	} else if (variant === 'full-width') {
		defaultClass = '-mb-px flex transition-all duration-150 justify-evently';
	} else {
		defaultClass = '-mb-px flex transition-all duration-150 space-x-8';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if variant === 'bar'}
	<div class={finalContainerClass}>
		<nav class={finalClass} style={$$props.style}>
			<slot />
		</nav>
	</div>
{:else}
	<div class={finalContainerClass}>
		<nav class={finalClass} style={$$props.style}>
			<slot />
		</nav>
	</div>
{/if}
