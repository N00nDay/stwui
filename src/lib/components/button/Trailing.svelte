<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BUTTON_CONTEXT_ID } from './Button.svelte';
	import { useContext } from '../../utils/useContext';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: BUTTON_CONTEXT_ID,
		parent: 'Button',
		component: 'Button.Trailing'
	});

	const defaultClass = 'ml-2 flex justify-center items-center relative';
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
