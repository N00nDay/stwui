<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { ACCORDION_CONTEXT_ID } from './Accordion.svelte';
	import { useContext } from '../../utils/useContext';
	import type { Writable } from 'svelte/store';

	export let label: string;

	useContext({
		context_id: ACCORDION_CONTEXT_ID,
		parent: 'Accordion',
		component: 'AccordionItem'
	});

	const { openItems, onlyOne }: { openItems: Writable<string[]>; onlyOne: boolean } =
		getContext(ACCORDION_CONTEXT_ID);

	function toggleOpen() {
		if (onlyOne) {
			if ($openItems.includes(label)) {
				openItems.update(() => []);
			} else {
				openItems.update(() => [label]);
			}
		} else {
			if ($openItems.includes(label)) {
				openItems.update((current) => {
					const index = current.indexOf(label);
					if (index > -1) {
						current.splice(index, 1);
					}
					return current;
				});
			} else {
				openItems.update((current) => {
					current.push(label);
					return current;
				});
			}
		}
	}
</script>

<div
	class="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border first-of-type:rounded-t-md last-of-type:rounded-b-md overflow-hidden transition-all duration-150 outline-none focus:outline-none"
>
	<h2 class="mb-0 transition-all duration-150 outline-none focus:outline-none">
		<button
			on:click={toggleOpen}
			class="relative flex items-center w-full py-4 px-5 text-base text-light-content dark:text-dark-content hover:text-primary dark:hover:text-primary text-left bg-light-surface dark:bg-dark-surface border-0 rounded-none transition-all duration-150 justify-between  outline-none focus:outline-none"
			type="button"
		>
			{label}
			<span class="material-icons expand-icon" class:-rotate-180={$openItems.includes(label)}
				>expand_more</span
			>
		</button>
	</h2>
	{#if $openItems.includes(label)}
		<div
			transition:slide|local
			class="border-t border-light-border dark:border-dark-border text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150{$$props.class
				? ` ${$$props.class}`
				: ''}"
			style={$$props.style}
		>
			<slot />
		</div>
	{/if}
</div>

<style>
	.expand-icon {
		-webkit-transition: -webkit-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-moz-transition: -moz-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-ms-transition: -ms-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		-o-transition: -o-transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
