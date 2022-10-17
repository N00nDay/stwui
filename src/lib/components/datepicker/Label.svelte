<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { DATE_PICKER_CONTEXT_ID } from './DateInput.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: DATE_PICKER_CONTEXT_ID,
		parent: 'DatePicker',
		component: 'DatePicker.Label'
	});

	const { name, error }: { name: string; error: string } = getContext(DATE_PICKER_CONTEXT_ID);

	let defaultClass = 'block text-sm font-medium';
	if (error) {
		defaultClass = defaultClass + ' text-danger';
	} else {
		defaultClass = defaultClass + ' text-light-secondary-content dark:text-dark-secondary-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label
	for={name}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}><slot /></label
>
