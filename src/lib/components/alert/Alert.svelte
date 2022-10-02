<script lang="ts" context="module">
	export const ALERT_CONTEXT_ID = 'alert-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';
	let reactiveType = writable(type);
	$: $reactiveType = type;

	setContext(ALERT_CONTEXT_ID, {
		alert: true,
		type: reactiveType
	});

	let defaultClass = '';
	$: if ($reactiveType === 'info') {
		defaultClass =
			'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150 bg-info-background';
	} else if ($reactiveType === 'warn') {
		defaultClass =
			'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150 bg-warn-background';
	} else if ($reactiveType === 'success') {
		defaultClass =
			'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150 bg-success-background';
	} else if ($reactiveType === 'error') {
		defaultClass =
			'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150 bg-error-background';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<div class="flex">
		<slot name="icon" />
		{#if $$slots.title || $$slots.description}
			<div class="flex items-start justify-start flex-col w-full" class:ml-3={$$slots.icon}>
				<slot name="title" />
				<slot name="description" />
			</div>
		{/if}
		<slot name="extra" />
	</div>
</div>
