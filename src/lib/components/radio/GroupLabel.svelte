<script lang="ts">
	import { RADIO_GROUP_CONTEXT_ID } from './RadioGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: RADIO_GROUP_CONTEXT_ID,
		parent: 'RadioGroup',
		component: 'RadioGroup.Label'
	});

	const { name }: { name: string } = getContext(RADIO_GROUP_CONTEXT_ID);

	const defaultClass =
		'text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<legend
	for={name}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'for'])}><slot /></legend
>
