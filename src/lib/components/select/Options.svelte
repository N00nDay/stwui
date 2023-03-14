<script lang="ts">
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'origin-top-right absolute z-10 border border-border left-0 right-0 w-full mt-1 p-1 rounded-md shadow-xl py-1 bg-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<ul
	class={finalClass}
	in:scale={{ start: 0.9, duration: 100, delay: 150 }}
	out:scale={{ start: 0.95, duration: 75 }}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	role="listbox"
>
	<slot />
</ul>
