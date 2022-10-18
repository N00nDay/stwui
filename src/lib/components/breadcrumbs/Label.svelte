<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BREADCRUMBS_CONTEXT_ID } from './Breadcrumbs.svelte';
	import { BREADCRUMBS_CRUMB_CONTEXT_ID } from './Crumb.svelte';
	import { useContext } from '../../utils/useContext';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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

	const defaultClass = 'ml-4 text-sm font-medium';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}><slot /></span
>
