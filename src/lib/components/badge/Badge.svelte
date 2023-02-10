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

	const defaultClass =
		'inline-flex items-center py-0.5 font-medium bg-opacity-20 dark:bg-opacity-20 dark:text-dark-content text-light-content bg-dark-icon-background bg-light-icon-background';
	const infoClass =
		'bg-opacity-20 dark:bg-opacity-20 bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content';
	const successClass =
		'bg-opacity-20 dark:bg-opacity-20 bg-success-background dark:bg-dark-success-background text-success-content dark:text-dark-success-content';
	const warnClass =
		'bg-opacity-20 dark:bg-opacity-20 bg-warn-background dark:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	const errorClass =
		'bg-opacity-20 dark:bg-opacity-20 bg-error-background dark:bg-dark-error-background text-error-content dark:text-dark-error-content';

	const defaultSize = 'px-2 text-xs';
	const largeSize = 'px-3 text-sm';

	const defaultShape = 'rounded-full';
	const roundedShape = 'rounded';

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' ? infoClass : false,
		type === 'success' ? successClass : false,
		type === 'warn' ? warnClass : false,
		type === 'error' ? errorClass : false,

		size === 'default' ? defaultSize : false,
		size === 'large' ? largeSize : false,

		shape === 'default' ? defaultShape : false,
		shape === 'rounded' ? roundedShape : false,

		$$props.class
	);

	setContext('badge-type', type);
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
