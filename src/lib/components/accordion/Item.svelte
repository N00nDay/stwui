<script lang="ts" context="module">
	export const ACCORDION_ITEM_CONTEXT_ID = 'accordion-id-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { ACCORDION_CONTEXT_ID } from './Accordion.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import { writable } from 'svelte/store';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let open = false;
	let isOpen = writable(open);
	$: $isOpen = open;

	useContext({
		context_id: ACCORDION_CONTEXT_ID,
		parent: 'Accordion',
		component: 'AccordionItem'
	});

	setContext(ACCORDION_ITEM_CONTEXT_ID, {
		item: true,
		open: isOpen
	});

	const defaultClass =
		'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border first-of-type:rounded-t-md last-of-type:rounded-b-md overflow-hidden outline-none focus:outline-none';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="title" />
	{#if open}
		<slot name="content" />
	{/if}
</div>
