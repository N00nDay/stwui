<script lang="ts" context="module">
	export const DROPDOWN_CONTEXT_ID = 'dropdown-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { clickOutside } from '../../utils/clickOutside';
	import { scale } from 'svelte/transition';

	export let handleClose: () => void;
	export let visible = false;

	setContext(DROPDOWN_CONTEXT_ID, {
		dropdown: true
	});
</script>

<div class="relative inset-0 z-10 flex-shrink-0" use:clickOutside={handleClose}>
	<div>
		<slot name="trigger" />
	</div>
	{#if visible}
		<div
			class="origin-top-right absolute z-10 right-0 mt-4 w-48 p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface transition transform duration-150"
			in:scale={{ start: 0.9, duration: 100, delay: 150 }}
			out:scale={{ start: 0.95, duration: 75 }}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="user-menu-button"
			tabindex="-1"
		>
			<slot name="dropdown-items" />
		</div>
	{/if}
</div>
