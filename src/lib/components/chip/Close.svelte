<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import Icon from '../icon/Icon.svelte';
	import { close } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: 'info' | 'success' | 'warn' | 'error' | 'default' = getContext('chip-type');

	const defaultClass =
		'flex-shrink-0 ml-2 h-8 w-8 rounded-full inline-flex items-center justify-center outline-none focus:outline-none hover:text-white dark:hover:text-white';
	const defaultType =
		' hover:bg-light-background dark:hover:bg-dark-background text-light-content hover:text-light-content dark:text-dark-content dark:hover:text-dark-content';
	const infoType =
		' hover:bg-info-background dark:hover:bg-dark-info-background text-info-content dark:text-dark-info-content';
	const successType =
		' hover:bg-success-background dark:hover:bg-dark-success-background text-success-content dark:text-dark-success-content';
	const warnType =
		' hover:bg-warn-background dark:hover:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	const errorType =
		' hover:bg-error-background dark:hover:bg-dark-error-background text-error-content dark:text-dark-error-content';

	$: finalClass = twMerge(
		defaultClass,

		type === 'default' ? defaultType : false,
		type === 'info' ? infoType : false,
		type === 'success' ? successType : false,
		type === 'warn' ? warnType : false,
		type === 'error' ? errorType : false,

		$$props.class
	);
</script>

<button
	aria-label="close"
	type="button"
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<span class="sr-only">Remove option</span>
	<Icon data={close} />
</button>
