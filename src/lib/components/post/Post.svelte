<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let bordered = false;

	const defaultClass =
		'bg-light-surface text-light-content dark:bg-dark-surface dark:text-dark-content rounded-md shadow-md dark:shadow-black';
	const borderClass = 'border border-light-border-base dark:border-dark-border-base';

	$: finalClass = twMerge(
		defaultClass,

		bordered ? borderClass : false,

		$$props.class
	);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="header" />
	<slot name="content" />
	<slot />
	<slot name="images" />
	<slot name="status" />
	<slot name="actions" />
</div>
