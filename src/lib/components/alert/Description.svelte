<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: Writable<'info' | 'warn' | 'success' | 'error'> } =
		getContext(ALERT_CONTEXT_ID);

	// TODO: make clsses reactive
	let defaultClass = '';
	$: if ($type === 'info') {
		defaultClass = 'mt-2 text-sm text-info-secondary-content dark:text-dark-info-secondary-content';
	} else if ($type === 'warn') {
		defaultClass = 'mt-2 text-sm text-warn-secondary-content dark:text-dark-warn-secondary-content';
	} else if ($type === 'success') {
		defaultClass =
			'mt-2 text-sm text-success-secondary-content dark:text-dark-success-secondary-content';
	} else if ($type === 'error') {
		defaultClass =
			'mt-2 text-sm text-error-secondary-content dark:text-dark-error-secondary-content=';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
