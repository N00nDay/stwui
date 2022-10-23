<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: Writable<'info' | 'warn' | 'success' | 'error'> = getContext('alert-type');

	let defaultClass = '';
	$: if ($type === 'info') {
		defaultClass =
			'relative flex-shrink-0 flex items-center justify-center text-info-icon -top-2 -right-2';
	} else if ($type === 'warn') {
		defaultClass =
			'relative flex-shrink-0 flex items-center justify-center text-warn-icon -top-2 -right-2';
	} else if ($type === 'success') {
		defaultClass =
			'relative flex-shrink-0 flex items-center justify-center text-success-icon -top-2 -right-2';
	} else if ($type === 'error') {
		defaultClass =
			'relative flex-shrink-0 flex items-center justify-center text-error-icon -top-2 -right-2';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
