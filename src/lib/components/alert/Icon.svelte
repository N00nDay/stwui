<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: Writable<'info' | 'warn' | 'success' | 'error'> } =
		getContext(ALERT_CONTEXT_ID);

	let defaultClass = '';
	$: if ($type === 'info') {
		defaultClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-info-icon';
	} else if ($type === 'warn') {
		defaultClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-warn-icon';
	} else if ($type === 'success') {
		defaultClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-success-icon';
	} else if ($type === 'error') {
		defaultClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-error-icon';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
