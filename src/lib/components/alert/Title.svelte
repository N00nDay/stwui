<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: 'info' | 'warn' | 'success' | 'error' } = getContext(ALERT_CONTEXT_ID);

	const defaultClass =
		'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<h3
	class={finalClass}
	class:text-info-content={type === 'info'}
	class:text-warn-content={type === 'warn'}
	class:text-success-content={type === 'success'}
	class:text-error-content={type === 'error'}
	class:dark:text-dark-info-content={type === 'info'}
	class:dark:text-dark-warn-content={type === 'warn'}
	class:dark:text-dark-success-content={type === 'success'}
	class:dark:text-dark-error-content={type === 'error'}
	style={$$props.style}
>
	<slot />
	{#if $$slots.extra}
		<slot name="extra" />
	{/if}
</h3>
