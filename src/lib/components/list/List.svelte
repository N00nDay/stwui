<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let divided = true;
	export let bordered = false;
	export let edgeToEdge = false;

	const dividedClass = 'divide-y divide-light-border-base dark:divide-dark-border';
	const borderedClass = 'border border-light-border-base dark:border-dark-border';

	$: finalClass = twMerge(
		divided ? dividedClass : false,
		bordered ? borderedClass : false,

		$$props.class
	);

	setContext('list-bordered', bordered || edgeToEdge);
</script>

<ul
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</ul>
