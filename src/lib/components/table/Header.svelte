<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import HeaderRow from './HeaderRow.svelte';
	import type { Writable } from 'svelte/store';
	import type { TableColumn } from '../../types/table-column';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let sortable = true;

	useContext({
		context_id: TABLE_CONTEXT_ID,
		parent: 'Table',
		component: 'Table.Header'
	});
	let { header, columns }: { header: Writable<boolean>; columns: TableColumn[] } =
		getContext(TABLE_CONTEXT_ID);
	header.set(true);

	const defaultClass =
		'flex-shrink table min-w-full border-separate border-spacing-0 table-fixed shadow-md dark:shadow-black bg-light-surface dark:bg-dark-surface relative';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<table
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<thead>
		<tr class="table-row">
			{#each columns as column, index}
				<HeaderRow
					classes="{index !== 0 ? 'hidden ' : ''}truncate md:table-cell"
					{column}
					columnCount={columns.length}
					{sortable}
				/>
			{/each}
		</tr>
	</thead>
</table>
