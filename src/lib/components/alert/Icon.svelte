<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: 'info' | 'warn' | 'success' | 'error' } = getContext(ALERT_CONTEXT_ID);

	let defaultClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center';
	if (type === 'info') {
		defaultClass += ' text-info-icon';
	} else if (type === 'warn') {
		defaultClass += ' text-warn-icon';
	} else if (type === 'success') {
		defaultClass += ' text-success-icon';
	} else if (type === 'error') {
		defaultClass += ' text-error-icon';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
