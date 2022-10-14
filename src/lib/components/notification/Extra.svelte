<script lang="ts">
	import { getContext } from 'svelte';
	import { NOTIFICATION_CONTEXT_ID } from './Notification.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: NOTIFICATION_CONTEXT_ID,
		parent: 'Notification',
		component: 'Notification.Extra'
	});

	const { extra }: { extra: Writable<boolean> } = getContext(NOTIFICATION_CONTEXT_ID);

	$: $extra = true;

	const defaultClass = 'ml-4 flex flex-shrink-0 relative top-0 right-0';
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
