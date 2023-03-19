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
	const alertDescription: boolean = getContext('alert-description');

	const defaultClass = 'flex-shrink-0 flex items-center justify-center';
	const infoClass = 'text-info-icon ';
	const warnClass = 'text-warn-icon';
	const successClass = 'text-success-icon';
	const errorClass = 'text-error-icon';
	$: finalClass = twMerge(
		defaultClass,

		$type === 'info' ? infoClass : false,
		$type === 'warn' ? warnClass : false,
		$type === 'success' ? successClass : false,
		$type === 'error' ? errorClass : false,

		alertDescription ? 'absolute -top-2 -right-2' : false,

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
