<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { LIST_CONTEXT_ID } from './List.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: LIST_CONTEXT_ID,
		parent: 'List',
		component: 'List.Item'
	});
	const { bordered }: { bordered: boolean } = getContext(LIST_CONTEXT_ID);

	let defaultClass = 'flex py-4';
	if (bordered) {
		defaultClass += ' px-3';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="leading" />
	<slot name="content" />
	<slot name="extra" />
</li>
