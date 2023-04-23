<script lang="ts">
	import { sort } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';
	import type { TableColumn } from '../../types/table-column';
	import Icon from '../icon';
	export let column: TableColumn;
	export let columnCount: number;

	export let orderBy: string;
	export let order: 'asc' | 'desc' = 'asc';
	export let onColumnHeaderClick: ((column: string) => void) | undefined = undefined;

	$: columnWidth = 100 / columnCount;

	function handleClick() {
		if (onColumnHeaderClick) {
			onColumnHeaderClick(column.column);
		}
	}

	const defaultClass =
		'sticky top-0 py-4 last:hover:active last:focus:active last:active:active first:pl-4 last:pl-3 last:pr-4 pr-3 last:sm:pr-6 text-sm sm:pl-6 box-border';
	const rightClass = 'pl-3 pr-4 sm:pr-6 text-right last:text-right';
	const leftClass = 'text-left';
	const noPlacementClass = 'last:text-right';
	$: finalClass = twMerge(
		defaultClass,
		column.class ? column.class : false,
		column.placement === 'right'
			? rightClass
			: column.placement === 'left'
			? leftClass
			: noPlacementClass,
		$$props.class
	);
</script>

<th
	class={finalClass}
	class:cursor-pointer={onColumnHeaderClick}
	class:cursor-default={!onColumnHeaderClick}
	class:active={column.column === orderBy}
	style="{$$props.style ? $$props.style : ''}{column.class ? '' : ` width:${columnWidth}%`}"
	scope="col"
	on:click={handleClick}
	><button
		aria-label="{column.label} column sort"
		class="group inline-flex items-center text-secondary-content"
		class:cursor-default={!onColumnHeaderClick}
		style="height:24px"
	>
		<span class="text-sm">{column.label}</span>
		{#if onColumnHeaderClick}
			<span
				class="sort-container flex-none rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-transform hidden group-hover:block group-focus:block"
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
		display: none;
	}

	th.active span.sort-container,
	th:hover span.sort-container,
	th:focus span.sort-container,
	th:active span.sort-container {
		opacity: 1;
		width: 20px;
		margin-left: 0.5rem;
		display: block;
	}
</style>
