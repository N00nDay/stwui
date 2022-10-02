<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: 'info' | 'warn' | 'success' | 'error' } = getContext(ALERT_CONTEXT_ID);

	let defaultClass =
		'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 transition-all duration-150';
	if (type === 'info') {
		defaultClass += ' text-info-content dark:text-dark-info-content';
	} else if (type === 'warn') {
		defaultClass += ' text-warn-content dark:text-dark-warn-content';
	} else if (type === 'success') {
		defaultClass += ' text-success-content dark:text-dark-success-content';
	} else if (type === 'error') {
		defaultClass += ' text-error-content dark:text-dark-error-content';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<h3 class={finalClass} style={$$props.style}>
	<slot />
	<slot name="extra" />
</h3>
