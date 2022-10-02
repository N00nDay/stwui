<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: 'info' | 'warn' | 'success' | 'error' } = getContext(ALERT_CONTEXT_ID);

	let defaultClass = 'mt-2 text-sm transition-all duration-150';
	if (type === 'info') {
		defaultClass += ' text-info-secondary-content dark:text-dark-info-secondary-content';
	} else if (type === 'warn') {
		defaultClass += ' text-warn-secondary-content dark:text-dark-warn-secondary-content';
	} else if (type === 'success') {
		defaultClass += ' text-success-secondary-content dark:text-dark-success-secondary-content';
	} else if (type === 'error') {
		defaultClass += ' text-error-secondary-content dark:text-dark-error-secondary-content=';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
