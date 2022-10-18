<script lang="ts">
	import { scale } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { AUTOCOMPLETE_CONTEXT_ID } from './Autocomplete.svelte';
	import { AUTOCOMPLETE_LIST_CONTEXT_ID } from './Options.svelte';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '$lib/utils/useContext';
	import HoverBackground from '../HoverBackground.svelte';
	import { check } from '../../icons';
	import Icon from '../icon';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import type { Writable } from 'svelte/store';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let option: string;

	useContext({
		context_id: AUTOCOMPLETE_CONTEXT_ID,
		parent: 'Autocomplete',
		component: 'Autocomplete.List.Item'
	});

	useContext({
		context_id: AUTOCOMPLETE_LIST_CONTEXT_ID,
		parent: 'Autocomplete.List',
		component: 'Autocomplete.List.Item'
	});

	const {
		handleSelect,
		value
	}: {
		handleSelect: (option: string) => void;
		value: Writable<string | undefined>;
	} = getContext(AUTOCOMPLETE_CONTEXT_ID);

	const defaultClass =
		'group text-light-content dark:text-dark-content cursor-pointer select-none p-0.5 w-full';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	role="option"
	aria-selected={$value === option}
>
	<button
		aria-label="autocomplete option"
		on:click={() => handleSelect(option)}
		class="w-full text-left"
	>
		<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
			<span class="font-normal block truncate" class:font-semibold={$value === option}>
				{option}
			</span>

			{#if $value === option}
				<span
					transition:scale|local
					class="text-primary absolute inset-y-0 right-0 flex items-center pr-2.5"
				>
					<Icon data={check} />
				</span>
			{/if}

			<HoverBackground />
		</div>
	</button>
</li>
