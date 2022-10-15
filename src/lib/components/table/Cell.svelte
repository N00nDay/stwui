<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { getContext } from 'svelte';
	import type { TableColumn } from '../../types/table-column';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let column: number;

	let { columns }: { columns: TableColumn[] } = getContext(TABLE_CONTEXT_ID);
	$: columnWidth = 100 / columns.length;

	let defaultClass =
		'table-col first:pl-4 last:pl-3 last:pr-4 last:sm:pr-6 border-t truncate border-light-border dark:border-dark-border max-w-0 py-2.5 pr-3 text-sm sm:w-auto sm:max-w-none sm:pl-6 font-semibold md:font-normal text-light-secondary-content dark:text-dark-secondary-content';
	$: if (columns[column].placement === 'right') {
		defaultClass = defaultClass + ' text-right pl-3 pr-4 sm:pr-6 last:text-right';
	} else if (columns[column].placement === 'left') {
		defaultClass = defaultClass + ' text-left';
	} else {
		defaultClass = defaultClass + ' last:text-right ';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
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
