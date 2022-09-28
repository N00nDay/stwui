<script lang="ts" context="module">
	export const NOTIFICATION_CONTENT_CONTEXT_ID = 'notification-content-context-id';
</script>

<script lang="ts">
	import { NOTIFICATION_CONTEXT_ID } from './Notification.svelte';
	import { getContext, setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import { writable, type Writable } from 'svelte/store';

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

	const { leading }: { leading: Writable<boolean> } = getContext(NOTIFICATION_CONTEXT_ID);

	let defaultClass = 'ml-3 w-0 flex-1 pt-0.5';
	$: if ($leading) {
		defaultClass = 'w-0 flex-1 pt-0.5';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="title" />
	<slot name="description" />
	<slot />
</div>
