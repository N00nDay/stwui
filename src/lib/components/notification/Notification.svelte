<script lang="ts" context="module">
	export const NOTIFICATION_CONTEXT_ID = 'notification-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'warn' | 'error' | 'success' | undefined = undefined;

	let typeIcon = 'info';
	if (type === 'warn') {
		typeIcon = 'warning';
	} else if (type === 'success') {
		typeIcon = 'check_circle';
	} else if (type === 'error') {
		typeIcon = 'cancel';
	}

	let leading = writable(false);
	let extra = writable(false);

	setContext(NOTIFICATION_CONTEXT_ID, {
		notification: true,
		leading,
		extra,
		type
	});

	const defaultClass =
		'relative cursor-pointer flex items-start pointer-events-auto p-4 w-full max-w-sm overflow-hidden rounded-lg bg-light-surface dark:bg-dark-surface shadow-lg border light-border dark:dark-border dark:shadow-black';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if $$slots.leading}
		<slot name="leading" />
	{:else if type}
		<div class="flex-shrink-0 text-light-content dark:text-dark-content">
			<span
				class="material-icons"
				class:text-info-icon={type === 'info'}
				class:text-warn-icon={type === 'warn'}
				class:text-success-icon={type === 'success'}
				class:text-error-icon={type === 'error'}>{typeIcon}</span
			>
		</div>
	{/if}
	<slot name="content" />
	<slot name="extra" />
</div>
