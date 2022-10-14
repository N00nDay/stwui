<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { ALERT_CONTEXT_ID } from './Alert.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const { type }: { type: Writable<'info' | 'warn' | 'success' | 'error'> } =
		getContext(ALERT_CONTEXT_ID);

	let defaultClass = '';
	$: if ($type === 'info') {
		defaultClass =
			'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 text-info-content dark:text-dark-info-content';
	} else if ($type === 'warn') {
		defaultClass =
			'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 text-warn-content dark:text-dark-warn-content';
	} else if ($type === 'success') {
		defaultClass =
			'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 text-success-content dark:text-dark-success-content';
	} else if ($type === 'error') {
		defaultClass =
			'text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 text-error-content dark:text-dark-error-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
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
