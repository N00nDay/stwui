<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: 'info' | 'success' | 'warn' | 'error' | undefined = getContext('badge-type');

	const defaultClass = '-ml-0.5 mr-1.5 h-2 w-2';
	const infoClass = 'text-info-content dark:text-dark-info-content';
	const successClass = 'text-success-content dark:text-dark-success-content';
	const warnClass = 'text-warn-content dark:text-dark-warn-content';
	const errorClass = 'text-error-content dark:text-dark-error-content';

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' ? infoClass : false,
		type === 'success' ? successClass : false,
		type === 'warn' ? warnClass : false,
		type === 'error' ? errorClass : false,

		$$props.class
	);
</script>

<svg
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	fill="currentColor"
	viewBox="0 0 8 8"
>
	<circle cx="4" cy="4" r="3" />
</svg>
