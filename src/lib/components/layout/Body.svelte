<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const collapsed: Writable<boolean> = getContext('layout-collapsed');

	let defaultClass = 'w-full h-full';
	$: if ($collapsed) {
		defaultClass = 'w-full h-full lg:pl-0';
	}
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
