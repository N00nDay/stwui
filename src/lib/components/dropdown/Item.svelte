<script lang="ts">
	import { DROPDOWN_CONTEXT_ID } from './Dropdown.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: DROPDOWN_CONTEXT_ID,
		parent: 'Dropdown',
		component: 'DropdownItem'
	});

	const defaultClass =
		'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md overflow-hidden text-light-secondary-content dark:text-dark-secondary-content dark:hover:bg-dark-icon-background-hover hover:bg-light-icon-background-hover hover:text-light-content dark:hover:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</button>
