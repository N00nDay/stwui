<script lang="ts" context="module">
	export const NOTIFICATION_LEADING_CONTEXT_ID = 'notification-leading-context-id';
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { NOTIFICATION_CONTEXT_ID } from './Notification.svelte';
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
		component: 'Notification.Leading'
	});

	setContext(NOTIFICATION_LEADING_CONTEXT_ID, {
		leading: true
	});

	const { leading }: { leading: Writable<boolean> } = getContext(NOTIFICATION_CONTEXT_ID);

	$: $leading = true;

	const defaultClass = 'flex-shrink-0 text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="avatar" />
	<slot name="icon" />
	<slot />
</div>
