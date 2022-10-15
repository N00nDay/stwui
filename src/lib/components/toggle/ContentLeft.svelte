<script lang="ts">
	import { TOGGLE_CONTEXT_ID } from './Toggle.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: TOGGLE_CONTEXT_ID,
		parent: 'Toggle',
		component: 'Toggle.ContentLeft'
	});

	const { name, toggleOff }: { name: string; toggleOff: () => void } =
		getContext(TOGGLE_CONTEXT_ID);

	const defaultClass = 'mr-3 cursor-pointer';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	id="{name}-label-left"
	class={finalClass}
	on:click={toggleOff}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'id', 'on:click'])}
>
	<slot name="label" />
	<slot name="description" />
</span>
