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
		'flex-shrink-0 ml-2 h-8 w-8 rounded-full inline-flex items-center justify-center outline-none focus:outline-none hover:bg-default text-default-content hover:bg-background hover:bg-opacity-50 hover:text-content';
	const defaultType = 'text-default-content';
	const infoType = 'text-info-content';
	const successType = 'text-success-content';
	const warnType = 'text-warn-content';
	const errorType = 'text-error-content';

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
