<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: 'info' | 'success' | 'warn' | 'error' | undefined = getContext('badge-type');

	let defaultClass = '-ml-0.5 mr-1.5 h-2 w-2';
	if (type === 'info') {
		defaultClass += ' text-info-content dark:text-dark-info-content';
	} else if (type === 'success') {
		defaultClass += ' text-success-content dark:text-dark-success-content';
	} else if (type === 'warn') {
		defaultClass += ' text-warn-content dark:text-dark-warn-content';
	} else if (type === 'error') {
		defaultClass += ' text-error-content dark:text-dark-error-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
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
