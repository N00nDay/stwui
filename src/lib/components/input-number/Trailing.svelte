<script lang="ts">
	import { INPUT_NUMBER_CONTEXT_ID } from './InputNumber.svelte';
	import { getContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: INPUT_NUMBER_CONTEXT_ID,
		parent: 'InputNumber',
		component: 'InputNumber.Label'
	});

	const { error }: { error: string } = getContext(INPUT_NUMBER_CONTEXT_ID);

	let defaultClass = 'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none';
	if (error) {
		defaultClass = defaultClass + ' text-danger';
	} else {
		defaultClass = defaultClass + ' text-light-secondary-content dark:text-dark-secondary-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</span>
