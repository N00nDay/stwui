<script lang="ts">
	import { scale } from 'svelte/transition';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let placement: 'left' | 'right' = 'left';

	const defaultClass =
		'origin-top-right absolute z-10 border border-light-border-base dark:border-dark-border mt-2 w-56 p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface';
	$: finalClass = twMerge(
		defaultClass,

		placement === 'left' ? 'left-0' : false,
		placement === 'right' ? 'right-0' : false,

		$$props.class
	);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	in:scale={{ start: 0.9, duration: 100, delay: 150 }}
	out:scale={{ start: 0.95, duration: 75 }}
	role="menu"
	tabindex="-1"
>
	<slot />
</div>
