<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext, get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let disabled: boolean = getContext('filepicker-disabled');

	const defaultClass = 'mt-1 font-medium text-content';
	$: finalClass = twMerge(defaultClass, disabled ? 'opacity-30' : false, $$props.class);
</script>

<h3
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</h3>
