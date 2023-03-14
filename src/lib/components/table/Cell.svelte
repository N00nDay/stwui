<script lang="ts">
	import { getContext } from 'svelte';
	import type { TableColumn } from '../../types/table-column';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let column: number;

	const columns: TableColumn[] = getContext('table-columns');
	$: columnWidth = 100 / columns.length;

	const defaultClass =
		'table-col first:pl-4 last:pl-3 last:pr-4 last:sm:pr-6 border-t truncate border-border max-w-0 py-2.5 pr-3 text-sm sm:w-auto sm:max-w-none sm:pl-6 font-semibold md:font-normal text-secondary-content';
	const rightClass = 'text-right pl-3 pr-4 sm:pr-6 last:text-right';
	const leftClass = 'text-left';
	const noPlacementClass = 'last:text-right';

	$: finalClass = twMerge(
		defaultClass,

		columns[column].placement === 'right'
			? rightClass
			: columns[column].placement === 'left'
			? leftClass
			: noPlacementClass,

		$$props.class
	);
</script>

<td
	class={finalClass}
	style="width: {columnWidth}%;{$$props.style}"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'style'])}
>
	<span class="block md:inline w-full static left-0 right-0 truncate">
		<slot />
	</span>
</td>
