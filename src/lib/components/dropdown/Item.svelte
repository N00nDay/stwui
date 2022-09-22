<script lang="ts">
	import { DROPDOWN_CONTEXT_ID } from './Dropdown.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: DROPDOWN_CONTEXT_ID,
		parent: 'Dropdown',
		component: 'DropdownItem'
	});

	const defaultClass =
		'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md overflow-hidden text-light-secondary-content dark:text-dark-secondary-content dark:hover:bg-dark-icon-background-hover hover:bg-light-icon-background-hover hover:text-light-content dark:hover:text-dark-content transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
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
