<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: 'info' | 'warn' | 'success' | 'error' } = getContext(ALERT_CONTEXT_ID);

	const defaultClass = 'mt-2 text-sm transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:text-info-secondary-content={type === 'info'}
	class:text-warn-secondary-content={type === 'warn'}
	class:text-success-secondary-content={type === 'success'}
	class:text-error-secondary-content={type === 'error'}
	class:dark:text-dark-info-secondary-content={type === 'info'}
	class:dark:text-dark-warn-secondary-content={type === 'warn'}
	class:dark:text-dark-success-secondary-content={type === 'success'}
	class:dark:text-dark-error-secondary-content={type === 'error'}
	style={$$props.style}
>
	<slot />
</div>
