<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'success' | 'warn' | 'error' | 'default' = 'default';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const defaultClass =
		'inline-flex items-center pr-3 text-sm font-medium border border-light-border-base dark:border-dark-border-base bg-opacity-20 dark:bg-opacity-20 rounded-full';

	const defaultTypeClass =
		' bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content';
	const infoTypeClass =
		' bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content';
	const successTypeClass =
		' bg-success-background dark:bg-dark-success-background text-success-content dark:text-dark-success-content';
	const warnTypeClass =
		' bg-warn-background dark:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	const errorTypeClass =
		' bg-error-background dark:bg-dark-error-background text-error-content dark:text-dark-error-content';
	const closeSlotClass = 'pr-1.5';

	$: finalClass = twMerge(
		defaultClass,

		type === 'default' ? defaultTypeClass : false,
		type === 'info' ? infoTypeClass : false,
		type === 'success' ? successTypeClass : false,
		type === 'warn' ? warnTypeClass : false,
		type === 'error' ? errorTypeClass : false,
		$$slots.close ? closeSlotClass : false,

		$$props.class
	);

	setContext('chip-size', size);
	setContext('chip-type', type);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="avatar" />
	<slot name="label" />
	<slot name="close" />
	<slot />
</span>
