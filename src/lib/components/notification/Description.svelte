<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const title: Writable<boolean> = getContext('notification-title');

	const defaultClass = 'text-sm text-secondary-content';
	const titleClass = 'mt-1';

	$: finalClass = twMerge(
		defaultClass,

		$title ? titleClass : false,

		$$props.class
	);
</script>

<p
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</p>
