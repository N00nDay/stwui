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

	const defaultClass =
		'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4';
	const infoClass = 'text-info-content dark:text-dark-info-content';
	const warnClass = 'text-warn-content dark:text-dark-warn-content';
	const successClass = 'text-success-content dark:text-dark-success-content';
	const errorClass = 'text-error-content dark:text-dark-error-content';
	$: finalClass = twMerge(
		defaultClass,

		$type === 'info' ? infoClass : false,
		$type === 'warn' ? warnClass : false,
		$type === 'success' ? successClass : false,
		$type === 'error' ? errorClass : false,

		$$props.class
	);
</script>

<h3
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
	<slot name="extra" />
</h3>
