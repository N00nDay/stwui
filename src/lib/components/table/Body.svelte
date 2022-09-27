<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { scrollbar } from '../../utils/scrollbar';

	export let id = 'table-body';

	useContext({
		context_id: TABLE_CONTEXT_ID,
		parent: 'Table',
		component: 'TableBody'
	});
	let { header, footer }: { header: Writable<boolean>; footer: Writable<boolean> } =
		getContext(TABLE_CONTEXT_ID);

	let headerHeight = $header ? 61 : 0;
	let footerHeight = $footer ? 67 : 0;

	$: heightToRemove = headerHeight + footerHeight + 64;
</script>

<div {id} use:scrollbar style="height: calc(100% - {heightToRemove}px);">
	<table
		class="table min-w-full border-separate bg-light-surface dark:bg-dark-surface transition-all duration-150 border-b border-light-border dark:border-dark-border"
		style="border-spacing: 0;table-layout:fixed;"
	>
		<tbody class={$$props.class ? ` ${$$props.class}` : ''} style={$$props.style}>
			<slot />
		</tbody>
	</table>
</div>
