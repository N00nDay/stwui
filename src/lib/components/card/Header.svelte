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
		'first:rounded-t-md last:rounded-b-md px-4 py-5 sm:px-6 h-16 stwui-card-header';
	const extrasClass = 'flex flex-row items-center justify-between';
	const dividedClass = 'border-b border-border last:border-b-none';
	$: finalClass = twMerge(
		defaultClass,

		$$props.extras ? extrasClass : false,
		divided ? dividedClass : false,

		$$props.class
	);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
	<slot name="extra" />
</div>
