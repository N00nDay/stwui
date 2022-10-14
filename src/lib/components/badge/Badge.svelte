<script lang="ts" context="module">
	export const BADGE_CONTEXT_ID = 'badge-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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
		'inline-flex items-center py-0.5 font-medium bg-opacity-20 dark:bg-opacity-20 dark:text-dark-content text-light-content bg-dark-icon-background bg-light-icon-background';
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
	if (size === 'default') {
		defaultClass += ' px-2 text-xs';
	} else if (size === 'large') {
		defaultClass += ' px-3 text-sm';
	}
	if (shape === 'default') {
		defaultClass += ' rounded-full';
	} else if (shape === 'rounded') {
		defaultClass += ' rounded';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	class:pr-0.5={$$slots.close}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="indicator" />
	<slot />
	<slot name="close" />
</span>
