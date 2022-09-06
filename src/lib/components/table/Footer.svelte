<script lang="ts">
	import { TABLE_CONTEXT_ID } from './Table.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	useContext({
		context_id: TABLE_CONTEXT_ID,
		parent: 'Table',
		component: 'TableFooter'
	});
	let { footer }: { footer: Writable<boolean> } = getContext(TABLE_CONTEXT_ID);
	footer.set(true);
</script>

<div class="flex-grow h-full transition-all duration-150 bg-light-surface dark:bg-dark-surface" />
<div
	class="flex-shrink shadow-negative-md transition-all duration-150 dark:shadow-black sticky bottom-0 bg-light-surface dark:bg-dark-surface border-light-border border-t text-sm"
	style="z-index:1;"
>
	<slot />
</div>
