<script lang="ts">
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultclass =
		'origin-top-right absolute mt-1 z-10 border light-border dark:dark-border left-0 right-0 w-full p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface transition transform duration-150';
	$: finalClass = twMerge(defaultclass, $$props.class);
</script>

<ul
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	in:scale={{ start: 0.9, duration: 150 }}
	out:scale={{ start: 0.95, duration: 150 }}
	role="listbox"
>
	<slot />
</ul>
