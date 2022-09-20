<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';

	const { type }: { type: 'info' | 'warn' | 'success' | 'error' } = getContext(ALERT_CONTEXT_ID);

	const defaultClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:text-info-icon={type === 'info'}
	class:text-warn-icon={type === 'warn'}
	class:text-success-icon={type === 'success'}
	class:text-error-icon={type === 'error'}
	style={$$props.style}
>
	<slot />
</div>
