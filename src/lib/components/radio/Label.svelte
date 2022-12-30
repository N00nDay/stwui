<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const id: string = getContext('radio-name');

	const defaultClass = 'font-medium cursor-pointer text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label
	for={id ? id : undefined}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'for'])}><slot /></label
>
