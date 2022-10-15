<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { useContext } from '$lib/utils/useContext';
	import { RADIO_GROUP_RADIO_CONTEXT_ID } from './Radio.svelte';
	import { RADIO_GROUP_CONTEXT_ID } from './RadioGroup.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: RADIO_GROUP_CONTEXT_ID,
		parent: 'RadioGroup',
		component: 'RadioGroup.Radio.Label'
	});

	useContext({
		context_id: RADIO_GROUP_RADIO_CONTEXT_ID,
		parent: 'RadioGroup.Radio',
		component: 'RadioGroup.Radio.Label'
	});

	const { id }: { id: string } = getContext(RADIO_GROUP_RADIO_CONTEXT_ID);

	const defaultClass = 'font-medium cursor-pointer text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label
	for={id ? id : undefined}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'for'])}><slot /></label
>
