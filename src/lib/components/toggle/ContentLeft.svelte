<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const name: string = getContext('toggle-name');
	const toggleOff: () => void = getContext('toggle-off');

	const defaultClass = 'mr-3 cursor-pointer stwui-toggle-content-left';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	type="button"
	tabindex="-1"
	id="{name}-label-left"
	class={finalClass}
	on:click={toggleOff}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'id', 'on:click'])}
>
	<slot name="label" />
	<slot name="description" />
</button>
