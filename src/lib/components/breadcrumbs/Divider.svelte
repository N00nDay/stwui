<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BREADCRUMBS_CONTEXT_ID } from './Breadcrumbs.svelte';
	import { useContext } from '$lib/utils/useContext';
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: BREADCRUMBS_CONTEXT_ID,
		parent: 'Breadcrumbs',
		component: 'Breadcrumbs.Crumb'
	});

	const { type }: { type: 'solid' | 'ghost' } = getContext(BREADCRUMBS_CONTEXT_ID);

	let defaultClass = '';
	if (type === 'ghost') {
		defaultClass = 'divider flex-shrink-0 h-5 w-5 opacity-30';
	} else {
		defaultClass = 'divider flex-shrink-0 w-6 h-full opacity-30';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if type === 'ghost'}
	<svg
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
			clip-rule="evenodd"
		/>
	</svg>
{:else if type === 'solid'}
	<svg
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
		viewBox="0 0 24 44"
		preserveAspectRatio="none"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
	</svg>
{/if}
