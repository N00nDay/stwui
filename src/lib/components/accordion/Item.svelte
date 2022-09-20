<script lang="ts" context="module">
	export const ACCORDION_ITEM_CONTEXT_ID = 'accordion-id-context-id';
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { ACCORDION_CONTEXT_ID } from './Accordion.svelte';
	import { useContext } from '../../utils/useContext';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { validateSlots } from '$lib/utils/validateSlots';

	export let key: number;

	useContext({
		context_id: ACCORDION_CONTEXT_ID,
		parent: 'Accordion',
		component: 'AccordionItem'
	});

	setContext(ACCORDION_ITEM_CONTEXT_ID, {
		item: true,
		key
	});

	const { openItems }: { openItems: Writable<number[]>; onlyOne: boolean } =
		getContext(ACCORDION_CONTEXT_ID);

	validateSlots($$slots, ['title', 'content'], 'Accordion.Item');

	const defaultClass =
		'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border first-of-type:rounded-t-md last-of-type:rounded-b-md overflow-hidden transition-all duration-150 outline-none focus:outline-none';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<h2 class="mb-0 transition-all duration-150 outline-none focus:outline-none">
		<slot name="title" />
	</h2>
	{#if $openItems.includes(key)}
		<slot name="content" />
	{/if}
</div>
