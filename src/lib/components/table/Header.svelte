<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import HeaderRow from './HeaderRow.svelte';
	import type { Writable } from 'svelte/store';
	import type { ITableColumn } from './Table.svelte';

	useContext({
		context_id: TABLE_CONTEXT_ID,
		parent: 'Table',
		component: 'TableHeader'
	});
	let { header, columns }: { header: Writable<boolean>; columns: ITableColumn[] } =
		getContext(TABLE_CONTEXT_ID);
	header.set(true);
</script>

<table
	class="flex-shrink table min-w-full border-separate shadow-md dark:shadow-black transition-all duration-150 relative"
	style="border-spacing: 0;table-layout:fixed;z-index: 1;"
>
	<thead class="bg-light-surface dark:bg-dark-surface transition-all duration-150">
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
