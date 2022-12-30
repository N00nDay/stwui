<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { writable, type Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let title = writable(false);

	setContext('notification-title', title);

	const leading: Writable<boolean> = getContext('notification-leading');
	const type: 'info' | 'warn' | 'error' | 'success' | undefined = getContext('notification-type');

	let defaultClass = 'w-0 flex-1 pt-0.5';
	$: if ($leading || type) {
		defaultClass = 'ml-3 w-0 flex-1 pt-0.5';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="title" />
	<slot name="description" />
	<slot />
</div>
