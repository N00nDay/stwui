<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { ACCORDION_CONTEXT_ID } from './Accordion.svelte';
	import { ACCORDION_ITEM_CONTEXT_ID } from './Item.svelte';
	import { useContext } from '../../utils/useContext';
	import type { Writable } from 'svelte/store';

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

	const { openItems, onlyOne }: { openItems: Writable<number[]>; onlyOne: boolean } =
		getContext(ACCORDION_CONTEXT_ID);

	const { key }: { key: number } = getContext(ACCORDION_ITEM_CONTEXT_ID);

	function toggleOpen() {
		if (onlyOne) {
			if ($openItems.includes(key)) {
				openItems.update(() => []);
			} else {
				openItems.update(() => [key]);
			}
		} else {
			if ($openItems.includes(key)) {
				openItems.update((current) => {
					const index = current.indexOf(key);
					if (index > -1) {
						current.splice(index, 1);
					}
					return current;
				});
			} else {
				openItems.update((current) => {
					current.push(key);
					return current;
				});
			}
		}
	}

	const defaultClass =
		'relative flex items-center w-full py-4 px-5 text-base text-light-content dark:text-dark-content hover:text-primary dark:hover:text-primary text-left bg-light-surface dark:bg-dark-surface border-0 rounded-none transition-all duration-150 justify-between  outline-none focus:outline-none';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<button on:click={toggleOpen} class={finalClass} style={$$props.style} type="button">
	<slot />
	<span class="material-icons expand-icon" class:-rotate-180={$openItems.includes(key)}
		>expand_more</span
	>
</button>

<style>
	.expand-icon {
		-webkit-transition: -webkit-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-moz-transition: -moz-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-ms-transition: -ms-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-o-transition: -o-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
