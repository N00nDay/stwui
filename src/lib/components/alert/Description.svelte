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
		defaultClass = 'mt-2 text-sm text-info-secondary-content dark:text-dark-info-secondary-content';
	} else if ($type === 'warn') {
		defaultClass = 'mt-2 text-sm text-warn-secondary-content dark:text-dark-warn-secondary-content';
	} else if ($type === 'success') {
		defaultClass =
			'mt-2 text-sm text-success-secondary-content dark:text-dark-success-secondary-content';
	} else if ($type === 'error') {
		defaultClass =
			'mt-2 text-sm text-error-secondary-content dark:text-dark-error-secondary-content=';
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
