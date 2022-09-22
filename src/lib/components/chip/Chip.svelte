<script lang="ts" context="module">
	export const CHIP_CONTEXT_ID = 'chip-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { validateSlots } from '$lib/utils/validateSlots';

	// export let details: Details;
	export let type: 'info' | 'success' | 'warn' | 'error' | 'default' = 'default';
	// export let onClose: (() => void) | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	let defaultClass =
		'inline-flex items-center pr-3 text-sm font-medium transition-all duration-150 border border-light-border dark:border-dark-border dark:shadow-black shadow-md bg-opacity-20 dark:bg-opacity-20 rounded-full';

	const defaultDefaults =
		' bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content';
	const infoDefaults =
		' bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content';
	const successDefaults =
		' bg-success-background dark:bg-dark-success-background text-success-content dark:text-dark-success-content';
	const warnDefaults =
		' bg-warn-background dark:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	const errorDefaults =
		' bg-error-background dark:bg-dark-error-background text-error-content dark:text-dark-error-content';

	if (type === 'default') {
		defaultClass += defaultDefaults;
	} else if (type === 'info') {
		defaultClass += infoDefaults;
	} else if (type === 'success') {
		defaultClass += successDefaults;
	} else if (type === 'warn') {
		defaultClass += warnDefaults;
	} else if (type === 'error') {
		defaultClass += errorDefaults;
	}

	if ($$slots.close) {
		defaultClass += ' pr-1.5';
	}

	const finalClass = twMerge(defaultClass, $$props.class);

	setContext(CHIP_CONTEXT_ID, {
		chip: true,
		size,
		type
	});

	validateSlots($$slots, ['avatar', 'label', 'close'], 'Chip');
</script>

<span class={finalClass}>
	<slot name="avatar" />
	<slot name="label" />
	<slot name="close" />
</span>
