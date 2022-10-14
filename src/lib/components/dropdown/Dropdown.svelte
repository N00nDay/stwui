<script lang="ts" context="module">
	export const DROPDOWN_CONTEXT_ID = 'dropdown-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from '../../actions';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	// export let handleClose: () => void;
	export let visible = false;

	function handleClose() {
		visible = false;
	}

	setContext(DROPDOWN_CONTEXT_ID, {
		dropdown: true
	});

	const defaultClass = 'relative inline-block';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:clickOutside={handleClose}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div>
		<slot name="trigger" />
	</div>
	{#if visible}
		<slot name="items" />
	{/if}
</div>
