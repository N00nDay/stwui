<script lang="ts">
	import { slide } from 'svelte/transition';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass = 'border-t border-border text-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	transition:slide|local
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
