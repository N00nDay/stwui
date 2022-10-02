<script lang="ts" context="module">
	export const ALERT_CONTEXT_ID = 'alert-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';

	setContext(ALERT_CONTEXT_ID, {
		alert: true,
		type
	});

	let defaultClass = 'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150';
	if (type === 'info') {
		defaultClass += ' bg-info-background';
	} else if (type === 'warn') {
		defaultClass += ' bg-warn-background';
	} else if (type === 'success') {
		defaultClass += ' bg-success-background';
	} else if (type === 'error') {
		defaultClass += ' bg-error-background';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
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
