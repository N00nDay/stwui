<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const name: string = getContext('radio-name');

	const defaultClass =
		'text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<legend
	for={name}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'for'])}><slot /></legend
>
