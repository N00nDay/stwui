<script lang="ts" context="module">
	export const BADGE_CONTEXT_ID = 'badge-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte/internal';

	export let type: 'info' | 'success' | 'warn' | 'error' | undefined = undefined;
	export let size: 'default' | 'large' = 'default';
	export let shape: 'default' | 'rounded' | 'square' = 'default';

	setContext(BADGE_CONTEXT_ID, {
		badge: true,
		type,
		size,
		shape
	});

	let defaultClass =
		'inline-flex items-center py-0.5 font-medium transition-all duration-150 bg-opacity-20 dark:bg-opacity-20 dark:text-dark-content text-light-content bg-dark-icon-background bg-light-icon-background';
	if (type === 'info') {
		defaultClass +=
			'bg-opacity-20 dark:bg-opacity-20 bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content';
	} else if (type === 'success') {
		defaultClass +=
			'bg-opacity-20 dark:bg-opacity-20 bg-success-background dark:bg-dark-success-background text-success-content dark:text-dark-success-content';
	} else if (type === 'warn') {
		defaultClass +=
			'bg-opacity-20 dark:bg-opacity-20 bg-warn-background dark:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	} else if (type === 'error') {
		defaultClass +=
			'bg-opacity-20 dark:bg-opacity-20 bg-error-background dark:bg-dark-error-background text-error-content dark:text-dark-error-content';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	class:px-2.5={size === 'default'}
	class:px-3={size === 'large'}
	class:text-xs={size === 'default'}
	class:text-sm={size === 'large'}
	class:rounded-full={shape === 'default'}
	class:rounded={shape === 'rounded'}
	class:pr-0.5={$$slots.close}
>
	<slot name="indicator" />
	<slot />
	<slot name="close" />
</span>
