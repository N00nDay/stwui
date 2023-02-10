<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'rounded-md divide-y divide-light-border-base border border-light-border-base dark:border-dark-border-base dark:divide-dark-border';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
