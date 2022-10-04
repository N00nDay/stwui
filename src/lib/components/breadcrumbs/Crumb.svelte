<script lang="ts" context="module">
	export const BREADCRUMBS_CRUMB_CONTEXT_ID = 'breadcrumbs-crumb-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BREADCRUMBS_CONTEXT_ID } from './Breadcrumbs.svelte';
	import { useContext } from '$lib/utils/useContext';
	import { getContext, setContext } from 'svelte/internal';
	import Divider from './Divider.svelte';

	export let href: string;

	useContext({
		context_id: BREADCRUMBS_CONTEXT_ID,
		parent: 'Breadcrumbs',
		component: 'Breadcrumbs.Crumb'
	});

	setContext(BREADCRUMBS_CRUMB_CONTEXT_ID, {
		crumb: true
	});

	const { type }: { type: 'solid' | 'ghost' } = getContext(BREADCRUMBS_CONTEXT_ID);

	const defaultClass =
		'flex items-center text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li class="crumb">
	<div class={finalClass} style={$$props.style}>
		{#if $$slots.divider}
			<slot name="divider" />
		{:else}
			<Divider />
		{/if}
		<a {href} class="flex items-center">
			<slot name="icon" />
			<slot name="label" />
			<slot />
		</a>
	</div>
</li>
