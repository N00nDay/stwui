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
		defaultClass = 'relative flex-shrink-0 h-5 w-5 flex items-center justify-center text-info-icon';
	} else if ($type === 'warn') {
		defaultClass = 'relative flex-shrink-0 h-5 w-5 flex items-center justify-center text-warn-icon';
	} else if ($type === 'success') {
		defaultClass =
			'relative flex-shrink-0 h-5 w-5 flex items-center justify-center text-success-icon';
	} else if ($type === 'error') {
		defaultClass =
			'relative flex-shrink-0 h-5 w-5 flex items-center justify-center text-error-icon';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="icon" />
	<slot />
</div>
