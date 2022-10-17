<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte/internal';
	import { useContext } from '../../utils/useContext';
	import { SELECT_CONTEXT_ID } from './Select.svelte';
	import { SELECT_OPTIONS_CONTEXT_ID } from './Options.svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon';
	import { check } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let option: string;

	useContext({
		context_id: SELECT_CONTEXT_ID,
		parent: 'Select',
		component: 'Select.Options.Option'
	});

	useContext({
		context_id: SELECT_OPTIONS_CONTEXT_ID,
		parent: 'Select.Options',
		component: 'Select.Options.Option'
	});

	const {
		value,
		handleSelect
	}: { value: Writable<string>; handleSelect: (option: string) => void } =
		getContext(SELECT_CONTEXT_ID);

	const defaultClass =
		'group text-light-content dark:text-dark-content cursor-pointer select-none p-0.5 w-full';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	class={finalClass}
	role="option"
	aria-selected={option === $value}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<button aria-label="select option" on:click={() => handleSelect(option)} class="w-full text-left">
		<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
			<span class="font-normal block truncate" class:font-semibold={option === $value}>
				{option}
			</span>

			{#if option === $value}
				<span
					transition:scale|local
					class="text-primary absolute inset-y-0 right-0 flex items-center pr-1.5"
				>
					<Icon path={check} />
				</span>
			{/if}

			<HoverBackground />
		</div>
	</button>
</li>
