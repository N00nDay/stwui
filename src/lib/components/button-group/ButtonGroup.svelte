<script lang="ts">
	import { setContext } from 'svelte';
	import clsx from 'clsx';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let block = false;

	const defaultClass = 'relative z-0 inline-flex shadow-md dark:shadow-black rounded-md';

	$: finalClass = clsx(
		defaultClass,
		{
			'w-full': block
		},
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
