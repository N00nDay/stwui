<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: 'info' | 'success' | 'warn' | 'error' | undefined = getContext('badge-type');

	let defaultClass =
		'ml-1.5 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none hover:focus:text-white hover:text-white dark:hover:text-white';
	if (type === 'info') {
		defaultClass +=
			' hover:bg-info-background dark:hover:bg-dark-info-background text-info-content dark:text-dark-info-content';
	} else if (type === 'success') {
		defaultClass +=
			' hover:bg-success-background dark:hover:bg-dark-success-background text-success-content dark:text-dark-success-content';
	} else if (type === 'warn') {
		defaultClass +=
			' hover:bg-warn-background dark:hover:bg-dark-warn-background text-warn-content dark:text-dark-warn-content';
	} else if (type === 'error') {
		defaultClass +=
			' hover:bg-error-background dark:hover:bg-dark-error-background text-error-content dark:text-dark-error-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	aria-label="close"
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<span class="sr-only">Remove option</span>
	<svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
		<path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
	</svg>
</button>
