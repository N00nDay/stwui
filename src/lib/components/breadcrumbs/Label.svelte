<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BREADCRUMBS_CONTEXT_ID } from './Breadcrumbs.svelte';
	import { BREADCRUMBS_CRUMB_CONTEXT_ID } from './Crumb.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: BREADCRUMBS_CONTEXT_ID,
		parent: 'Breadcrumbs',
		component: 'Breadcrumbs.Crumb.Label'
	});

	useContext({
		context_id: BREADCRUMBS_CRUMB_CONTEXT_ID,
		parent: 'Breadcrumbs.Crumb',
		component: 'Breadcrumbs.Crumb.Label'
	});

	const defaultClass = 'ml-4 text-sm font-medium hover:text-primary';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}><slot /></span>
