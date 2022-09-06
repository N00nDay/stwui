<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { getContext } from 'svelte';
	import type { ITableColumn } from './Table.svelte';

	export let column: number;

	let { columns }: { columns: ITableColumn[] } = getContext(TABLE_CONTEXT_ID);
	$: columnWidth = 100 / columns.length;
</script>

<td
	class="{$$props.class
		? ` ${$$props.class}`
		: ''} table-col last:text-right first:pl-4 last:pl-3 last:pr-4 last:sm:pr-6 border-t truncate border-light-border dark:border-dark-border max-w-0 py-2.5 pr-3 text-sm sm:w-auto sm:max-w-none sm:pl-6 transition-all duration-150 font-semibold md:font-normal"
	class:text-right={columns[column].placement === 'right'}
	class:text-left={columns[column].placement === 'left'}
	class:pl-3={columns[column].placement === 'right'}
	class:pr-4={columns[column].placement === 'right'}
	class:sm:pr-6={columns[column].placement === 'right'}
	style="width: {columnWidth}%;"
>
	<span
		class="block md:inline w-full static left-0 right-0 truncate transition-all duration-150 text-light-secondary-content dark:text-dark-secondary-content"
	>
		<slot />
	</span>
</td>
