<script lang="ts" context="module">
	export const TABLE_CONTEXT_ID = 'table-context-id';

	export interface ITableColumn {
		label: string;
		column: string;
		placement: 'left' | 'center' | 'right';
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let columns: ITableColumn[];

	let header = writable(false);
	let footer = writable(false);

	setContext(TABLE_CONTEXT_ID, {
		table: true,
		columns,
		header,
		footer
	});
</script>

<div
	class="bg-light-surface dark:bg-dark-surface transition-all duration-150{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
>
	<slot />
</div>
