<script lang="ts">
	import { ROW_CONTEXT_ID } from './Row.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: ROW_CONTEXT_ID,
		parent: 'Row',
		component: 'Col'
	});
	const { padding } = getContext(ROW_CONTEXT_ID);
</script>

<div
	class="col{$$props.class ? ` ${$$props.class}` : ''}"
	style="{$$props.style ? `${$$props.style} ` : ''}{padding}"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
