<script lang="ts" context="module">
	export const DROPDOWN_CONTEXT_ID = 'dropdown-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { clickOutside } from '../../utils/clickOutside';

	export let handleClose: () => void;
	export let visible = false;

	setContext(DROPDOWN_CONTEXT_ID, {
		dropdown: true
	});
</script>

<div
	class="relative inset-0 flex-shrink-0{$$props.class ? ` ${$$props.class}` : ''}"
	use:clickOutside={handleClose}
>
	<div>
		<slot name="trigger" />
	</div>
	{#if visible}
		<slot name="items" />
	{/if}
</div>
