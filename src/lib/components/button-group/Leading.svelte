<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BUTTON_GROUP_CONTEXT_ID } from './ButtonGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { BUTTON_GROUP_BUTTON_CONTEXT_ID } from './Button.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: BUTTON_GROUP_CONTEXT_ID,
		parent: 'ButtonGroup',
		component: 'ButtonGroup.Button.Leading'
	});

	useContext({
		context_id: BUTTON_GROUP_BUTTON_CONTEXT_ID,
		parent: 'ButtonGroup.Button',
		component: 'ButtonGroup.Button.Leading'
	});

	const defaultClass = 'mr-2 flex justify-center items-center relative';
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
