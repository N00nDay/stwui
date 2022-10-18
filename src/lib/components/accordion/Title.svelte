<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { ACCORDION_CONTEXT_ID } from './Accordion.svelte';
	import { ACCORDION_ITEM_CONTEXT_ID } from './Item.svelte';
	import { useContext } from '../../utils/useContext';
	import type { Writable } from 'svelte/store';
	import Icon from '../icon';
	import { chevron_down } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';

	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: ACCORDION_CONTEXT_ID,
		parent: 'Accordion',
		component: 'Accordion.Item.Title'
	});

	useContext({
		context_id: ACCORDION_ITEM_CONTEXT_ID,
		parent: 'Accordion.Item',
		component: 'Accordion.Item.Title'
	});

	const { open }: { open: Writable<boolean> } = getContext(ACCORDION_ITEM_CONTEXT_ID);

	const defaultClass =
		'relative flex items-center w-full py-4 px-5 text-base text-light-content dark:text-dark-content hover:text-primary dark:hover:text-primary text-left bg-light-surface dark:bg-dark-surface border-0 rounded-none justify-between  outline-none focus:outline-none';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	aria-label="Accordion Item Toggle"
	class={finalClass}
	type="button"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
	<span class="transition-transform duration-300" class:-rotate-180={$open}
		><Icon data={chevron_down} /></span
	>
</button>
