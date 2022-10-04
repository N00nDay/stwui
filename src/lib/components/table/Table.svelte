<script lang="ts" context="module">
	export const TABLE_CONTEXT_ID = 'table-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { TableColumn } from '../../types/table-column';

	export let columns: TableColumn[];

	let header = writable(false);
	let footer = writable(false);

	setContext(TABLE_CONTEXT_ID, {
		table: true,
		columns,
		header,
		footer
	});

	const defaultClass = 'bg-light-surface dark:bg-dark-surface';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
