<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';
	import { BUTTON_GROUP_CONTEXT_ID } from './ButtonGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { BUTTON_GROUP_BUTTON_CONTEXT_ID } from './Button.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let icon: MaterialIcon;

	useContext({
		context_id: BUTTON_GROUP_CONTEXT_ID,
		parent: 'ButtonGroup',
		component: 'ButtonGroup.Button.Icon'
	});

	useContext({
		context_id: BUTTON_GROUP_BUTTON_CONTEXT_ID,
		parent: 'ButtonGroup.Button',
		component: 'ButtonGroup.Button.Icon'
	});

	const defaultClass = `material-icons currentColor`;
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	transition:scale|local
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{icon}
</span>
