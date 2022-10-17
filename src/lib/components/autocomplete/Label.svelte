<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { AUTOCOMPLETE_CONTEXT_ID } from './Autocomplete.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: AUTOCOMPLETE_CONTEXT_ID,
		parent: 'Autocomplete',
		component: 'Autocomplete.Label'
	});

	const { name, error }: { name: string; error: string } = getContext(AUTOCOMPLETE_CONTEXT_ID);

	let defaultClass = 'block text-sm font-medium';
	if (error) {
		defaultClass = defaultClass + ' text-danger';
	} else {
		defaultClass = defaultClass + ' text-light-secondary-content dark:text-dark-secondary-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label
	for={name}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}><slot /></label
>
