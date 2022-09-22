<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { LIST_CONTEXT_ID } from './List.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';

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
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<li class={finalClass} style={$$props.style}>
	<slot name="leading" />
	<slot name="content" />
	<slot name="extra" />
</li>
