<script lang="ts">
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let block = false;

	const defaultClass =
		'relative z-0 inline-flex shadow-md rounded-md border border-border divide-x divide-border';

	$: finalClass = twMerge(
		defaultClass,

		block ? 'w-full' : false,

		$$props.class
	);

	setContext('button-group-block', block);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</span>
