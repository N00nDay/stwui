<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const bordered: boolean = getContext('list-bordered');

	const defaultClass = 'flex py-4';
	const borderedClass = 'px-3';

	$: finalClass = twMerge(
		defaultClass,

		bordered ? borderedClass : false,

		$$props.class
	);
</script>

<li
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="leading" />
	<slot name="content" />
	<slot name="extra" />
</li>
