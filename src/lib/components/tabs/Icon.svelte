<script lang="ts">
	import { TABS_CONTEXT_ID } from './Tabs.svelte';
	import { TABS_TAB_CONTEXT_ID } from './Tab.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type MaterialIcons from '../../types/material-icons';
	import { twMerge } from 'tailwind-merge';

	export let icon: MaterialIcons;

	useContext({
		context_id: TABS_CONTEXT_ID,
		parent: 'Tabs',
		component: 'Tabs.Tab.Icon'
	});

	useContext({
		context_id: TABS_TAB_CONTEXT_ID,
		parent: 'Tabs.Tab',
		component: 'Tabs.Tab.Icon'
	});

	const { currentTab }: { currentTab: Writable<number | undefined> } = getContext(TABS_CONTEXT_ID);
	const { index }: { index: number } = getContext(TABS_TAB_CONTEXT_ID);

	let defaultClass = '';
	$: if (index === $currentTab) {
		defaultClass = 'material-icons mr-2 text-primary border-primary';
	} else {
		defaultClass =
			'material-icons mr-2 text-light-secondary-content dark:group-hover:border-dark-border-base group-hover:border-light-border-base dark:text-dark-secondary-content dark:group-hover:text-dark-content group-hover:text-light-content ';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>{icon}</span>
