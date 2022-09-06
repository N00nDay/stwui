<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import type { ITableColumn } from './Table.svelte';

	export let column: ITableColumn;
	export let columnCount: number;

	$: columnWidth = 100 / columnCount;
	$: baseRoute = $page.url.pathname;
	$: orderBy = $page.url.searchParams.get('orderBy');
	$: order = $page.url.searchParams.get('order');

	async function changeOrder() {
		try {
			const route =
				`${baseRoute}?` +
				new URLSearchParams({
					orderBy: column.column,
					order: column.column === orderBy && order === 'asc' ? 'desc' : 'asc',
					page: '1'
				});

			goto(route);
			return;
		} catch (err) {
			console.log('changeOrder err', err);
		}
	}
</script>

<th
	class="{$$props.class
		? $$props.class
		: ''} sticky top-0 py-4 cursor-pointer last:hover:active last:focus:active last:active:active last:text-right first:pl-4 last:pl-3 last:pr-4 last:sm:pr-6 text-sm sm:pl-6 transition-all duration-150"
	class:text-right={column.placement === 'right'}
	class:text-left={column.placement === 'left'}
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
	on:click={changeOrder}
	><button
		class="group inline-flex items-center text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
	>
		<span class="text-sm">{column.label}</span>
		<span
			class="last:ml-2 sort-container flex-none rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 duration-150 transition-all"
			class:ml-2={column.placement === 'left'}
			class:scale-y-flip={column.column !== orderBy ||
				(column.column === orderBy && order === 'asc')}
		>
			<span class="material-icons text-xl duration-150"> sort </span>
		</span>
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
