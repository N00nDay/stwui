<script lang="ts">
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const divided: boolean = getContext('card-divided');

	const defaultClass =
		'px-4 py-5 sm:px-6 h-16 first:rounded-t-md last:rounded-b-md border border-l-0 border-b-0 border-r-0 stwui-card-footer';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:border-t={divided}
	class:border-border={divided}
	class:last:border-t-none={divided}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
