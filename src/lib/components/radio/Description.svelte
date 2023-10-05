<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const id: string = getContext('radio-id');

	const defaultClass = 'text-secondary-content stwui-radio-description';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	id={id ? `${id}-description` : undefined}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'id'])}><slot /></span
>
