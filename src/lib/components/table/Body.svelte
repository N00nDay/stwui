<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let id = 'table-body';

	useContext({
		context_id: TABLE_CONTEXT_ID,
		parent: 'Table',
		component: 'Table.Body'
	});
	let { header }: { header: Writable<boolean> } = getContext(TABLE_CONTEXT_ID);

	let headerHeight = $header ? 61 : 0;

	$: heightToRemove = headerHeight + 64;

	const defaultClass =
		'table min-w-full border-separate bg-light-surface dark:bg-dark-surface border-spacing-0 table-fixed border-b border-light-border dark:border-dark-border';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	{id}
	class="overflow-y-auto overflow-x-hidden"
	style="height: calc(100% - {heightToRemove}px);"
>
	<table
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<tbody>
			<slot />
		</tbody>
	</table>
</div>
