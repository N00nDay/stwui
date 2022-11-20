<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from '../../actions';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let visible = false;

	function handleClose() {
		visible = false;
	}

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
