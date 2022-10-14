<script lang="ts" context="module">
	export const NOTIFICATION_CONTENT_CONTEXT_ID = 'notification-content-context-id';
</script>

<script lang="ts">
	import { NOTIFICATION_CONTEXT_ID } from './Notification.svelte';
	import { getContext, setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import { writable, type Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let title = writable(false);

	useContext({
		context_id: NOTIFICATION_CONTEXT_ID,
		parent: 'Notification',
		component: 'Notificaiton.Content'
	});

	setContext(NOTIFICATION_CONTENT_CONTEXT_ID, {
		content: true,
		title
	});

	const {
		leading,
		type
	}: { leading: Writable<boolean>; type: 'info' | 'warn' | 'error' | 'success' | undefined } =
		getContext(NOTIFICATION_CONTEXT_ID);

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
