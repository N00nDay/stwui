<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import HeaderRow from './HeaderRow.svelte';
	import type { Writable } from 'svelte/store';
	import type { TableColumn } from './Table.svelte';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: TABLE_CONTEXT_ID,
		parent: 'Table',
		component: 'TableHeader'
	});
	let { header, columns }: { header: Writable<boolean>; columns: TableColumn[] } =
		getContext(TABLE_CONTEXT_ID);
	header.set(true);

	const defaultClass =
		'flex-shrink table min-w-full border-separate border-spacing-0 table-fixed shadow-md dark:shadow-black bg-light-surface dark:bg-dark-surface relative';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<table class={finalClass} style={$$props.style}>
	<thead>
		<tr class="table-row">
			{#each columns as column, index}
				<HeaderRow
					classes="{index !== 0 ? 'hidden ' : ''}truncate md:table-cell"
					{column}
					columnCount={columns.length}
				/>
			{/each}
		</tr>
	</thead>
</table>
