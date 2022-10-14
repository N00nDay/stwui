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

	const defaultClass = 'relative inline-block';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style} use:clickOutside={handleClose}>
	<div>
		<slot name="trigger" />
	</div>
	{#if visible}
		<slot name="items" />
	{/if}
</div>
