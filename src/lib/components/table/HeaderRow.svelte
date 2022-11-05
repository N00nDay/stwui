<script lang="ts">
	// import { goto } from '$app/navigation';
	// import { page } from '$app/stores';
	import { sort } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';

	import type { TableColumn } from '../../types/table-column';
	import Icon from '../icon';

	export let column: TableColumn;
	export let columnCount: number;
	// export let sortable = true;

	export let orderBy: string;
	export let order: 'asc' | 'desc' = 'asc';
	export let onColumnHeaderClick: ((column: string) => void) | undefined = undefined;

	$: columnWidth = 100 / columnCount;

	function handleClick() {
		if (onColumnHeaderClick) {
			onColumnHeaderClick(column.column);
		}
	}
	// $: baseRoute = $page.url.pathname;
	// $: orderBy = $page.url.searchParams.get('orderBy');
	// $: order = $page.url.searchParams.get('order');

	// async function changeOrder() {
	// 	try {
	// 		if (sortable) {
	// 			const route =
	// 				`${baseRoute}?` +
	// 				new URLSearchParams({
	// 					orderBy: column.column,
	// 					order: column.column === orderBy && order === 'asc' ? 'desc' : 'asc',
	// 					page: '1'
	// 				});

	// 			goto(route);
	// 		}
	// 		return;
	// 	} catch (err) {
	// 		console.log('changeOrder err', err);
	// 	}
	// }

	const defaultClass =
		'sticky top-0 py-4 last:hover:active last:focus:active last:active:active first:pl-4 last:pl-3 last:pr-4 last:sm:pr-6 text-sm sm:pl-6';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<th
	class={finalClass}
	class:cursor-pointer={onColumnHeaderClick}
	class:cursor-default={!onColumnHeaderClick}
	class:text-right={column.placement === 'right'}
	class:last:text-right={column.placement === 'right'}
	class:text-left={column.placement === 'left'}
	class:last:text-left={column.placement === 'left'}
	class:pl-3={column.placement === 'right'}
	class:pr-6={column.placement === 'right'}
	class:pl-4={column.placement === 'left'}
	class:pr-3={column.placement === 'left'}
	class:hover:active={column.placement === 'right'}
	class:focus:active={column.placement === 'right'}
	class:active:active={column.placement === 'right'}
	class:active={column.column === orderBy}
	style="width: {columnWidth}%;"
	scope="col"
	on:click={handleClick}
	><button
		aria-label="{column.label} column sort"
		class="group inline-flex items-center text-light-secondary-content dark:text-dark-secondary-content"
		class:cursor-default={!onColumnHeaderClick}
	>
		<span class="text-sm">{column.label}</span>
		{#if onColumnHeaderClick}
			<span
				class="last:ml-2 sort-container flex-none rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-transform"
				class:ml-2={column.placement === 'left'}
				class:scale-y-flip={column.column !== orderBy ||
					(column.column === orderBy && order === 'asc')}
			>
				<Icon data={sort} />
			</span>
		{/if}
	</button></th
>

<style>
	span.sort-container {
		opacity: 0;
		width: 0px;
		overflow: hidden;
		margin-left: 0;
	}

	th.active span.sort-container,
	th:hover span.sort-container,
	th:focus span.sort-container,
	th:active span.sort-container {
		opacity: 1;
		width: 20px;
		margin-left: 0.5rem;
	}
</style>
