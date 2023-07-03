<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const name: string = getContext('toggle-name');
	const toggleOn: () => void = getContext('toggle-on');

	const defaultClass = 'ml-3 cursor-pointer';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	type="button"
	tabindex="-1"
	id="{name}-label-right"
	class={finalClass}
	on:click={toggleOn}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'id', 'on:click'])}
>
	<slot name="label" />
	<slot name="description" />
</button>
