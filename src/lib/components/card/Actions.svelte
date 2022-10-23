<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const divided: boolean = getContext('card-divided');

	const defaultClass =
		'flex flex-row h-14 justify-evenly divide-x divide-light-icon-background dark:divide-dark-icon-background first:rounded-t-md last:rounded-b-md border border-l-0 border-b-0 border-r-0';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:border-t={divided}
	class:light-border={divided}
	class:dark:dark-border={divided}
	class:last:border-t-none={divided}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
