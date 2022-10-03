<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BADGE_CONTEXT_ID } from './Badge.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte/internal';

	useContext({
		context_id: BADGE_CONTEXT_ID,
		parent: 'Badge',
		component: 'Badge.Indicator'
	});

	const { type }: { type: 'info' | 'success' | 'warn' | 'error' | undefined } =
		getContext(BADGE_CONTEXT_ID);

	let defaultClass = '-ml-0.5 mr-1.5 h-2 w-2';
	if (type === 'info') {
		defaultClass += ' text-info-content dark:text-dark-info-content';
	} else if (type === 'success') {
		defaultClass += ' text-success-content dark:text-dark-success-content';
	} else if (type === 'warn') {
		defaultClass += ' text-warn-content dark:text-dark-warn-content';
	} else if (type === 'error') {
		defaultClass += ' text-error-content dark:text-dark-error-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<svg class={finalClass} style={$$props.style} fill="currentColor" viewBox="0 0 8 8">
	<circle cx="4" cy="4" r="3" />
</svg>
