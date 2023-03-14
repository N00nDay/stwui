<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const type: 'info' | 'success' | 'warn' | 'error' | undefined = getContext('badge-type');

	const defaultClass =
		'ml-1.5 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none hover:bg-default text-default-content hover:bg-background hover:bg-opacity-50 hover:text-content';
	const infoClass = ' text-info-content';
	const successClass = ' text-success-content';
	const warnClass = ' text-warn-content';
	const errorClass = 'text-error-content';

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' ? infoClass : false,
		type === 'success' ? successClass : false,
		type === 'warn' ? warnClass : false,
		type === 'error' ? errorClass : false,

		$$props.class
	);
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
