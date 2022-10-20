<script lang="ts">
	import { ROW_CONTEXT_ID } from './Row.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: ROW_CONTEXT_ID,
		parent: 'Row',
		component: 'Col'
	});
	const { padding }: { padding: string } = getContext(ROW_CONTEXT_ID);

	const defaultClass = 'col';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style="{$$props.style ? `${$$props.style} ` : ''}{padding}"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'style'])}
>
	<slot />
</div>
