<script lang="ts" context="module">
	export const TABLE_CONTEXT_ID = 'table-context-id';

	// TODO: move this to the types folder
	export interface TableColumn {
		label: string;
		column: string;
		placement: 'left' | 'center' | 'right';
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let columns: TableColumn[];

	let header = writable(false);
	let footer = writable(false);

	setContext(TABLE_CONTEXT_ID, {
		table: true,
		columns,
		header,
		footer
	});

	const defaultClass = 'bg-light-surface dark:bg-dark-surface transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
