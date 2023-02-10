<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: Writable<'info' | 'warn' | 'success' | 'error'> = getContext('alert-type');

	const defaultClass = 'mt-2 text-sm';
	const infoClass = 'text-info-secondary-content dark:text-dark-info-secondary-content';
	const warnClass = 'text-warn-secondary-content dark:text-dark-warn-secondary-content';
	const successClass = 'text-success-secondary-content dark:text-dark-success-secondary-content';
	const errorClass = 'text-error-secondary-content dark:text-dark-error-secondary-content=';
	$: finalClass = twMerge(
		defaultClass,

		$type === 'info' ? infoClass : false,
		$type === 'warn' ? warnClass : false,
		$type === 'success' ? successClass : false,
		$type === 'error' ? errorClass : false,

		$$props.class
	);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
