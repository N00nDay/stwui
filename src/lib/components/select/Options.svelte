<script lang="ts" context="module">
	export const SELECT_OPTIONS_CONTEXT_ID = 'select-options-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte/internal';
	import { useContext } from '../../utils/useContext';
	import { SELECT_CONTEXT_ID } from './Select.svelte';
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: SELECT_CONTEXT_ID,
		parent: 'Select',
		component: 'Select.Options'
	});

	setContext(SELECT_OPTIONS_CONTEXT_ID, {
		options: true
	});

	const defaultClass =
		'origin-top-right absolute z-10 border light-border dark:dark-border left-0 right-0 w-full mt-1 p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface';
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
