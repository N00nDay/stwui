<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';
	import { BREADCRUMBS_CONTEXT_ID } from './Breadcrumbs.svelte';
	import { BREADCRUMBS_CRUMB_CONTEXT_ID } from './Crumb.svelte';
	import { useContext } from '../../utils/useContext';

	export let icon: MaterialIcon;

	useContext({
		context_id: BREADCRUMBS_CONTEXT_ID,
		parent: 'Breadcrumbs',
		component: 'Breadcrumbs.Crumb.Icon'
	});

	useContext({
		context_id: BREADCRUMBS_CRUMB_CONTEXT_ID,
		parent: 'Breadcrumbs.Crumb',
		component: 'Breadcrumbs.Crumb.Icon'
	});

	const defaultClass = 'material-icons hover:text-primary';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>{icon}</span>
