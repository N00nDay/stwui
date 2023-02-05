<script lang="ts">
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

	export let orderBy: string;
	export let order: 'asc' | 'desc' = 'asc';
	export let onColumnHeaderClick: ((column: string) => void) | undefined = undefined;

	const header: Writable<boolean> = getContext('table-header');
	const columns: TableColumn[] = getContext('table-columns');
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
					{order}
					{orderBy}
					{onColumnHeaderClick}
				/>
			{/each}
		</tr>
	</thead>
</table>
