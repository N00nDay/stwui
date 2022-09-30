<script lang="ts" context="module">
	export const DROPDOWN_CONTEXT_ID = 'dropdown-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from '../../actions';

	export let handleClose: () => void;
	export let visible = false;

	setContext(DROPDOWN_CONTEXT_ID, {
		dropdown: true
	});

	const defaultClass = 'relative inset-0 flex-shrink-0';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} use:clickOutside={handleClose}>
	<div>
		<slot name="trigger" />
	</div>
	{#if visible}
		<slot name="items" />
	{/if}
</div>
