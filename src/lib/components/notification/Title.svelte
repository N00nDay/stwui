<script lang="ts">
	import { NOTIFICATION_CONTEXT_ID } from './Notification.svelte';
	import { NOTIFICATION_CONTENT_CONTEXT_ID } from './Content.svelte';
	import { useContext } from '$lib/utils/useContext';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: NOTIFICATION_CONTEXT_ID,
		parent: 'Notification',
		component: 'Notification.Content.Title'
	});

	useContext({
		context_id: NOTIFICATION_CONTENT_CONTEXT_ID,
		parent: 'Notification.Content',
		component: 'Notification.Content.Title'
	});

	const { title }: { title: Writable<boolean> } = getContext(NOTIFICATION_CONTENT_CONTEXT_ID);

	$: $title = true;

	const defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<p
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</p>
