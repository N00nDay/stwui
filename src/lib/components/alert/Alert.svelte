<script lang="ts" context="module">
	export const ALERT_CONTEXT_ID = 'alert-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';
	let reactiveType = writable(type);
	$: $reactiveType = type;

	setContext(ALERT_CONTEXT_ID, {
		alert: true,
		type: reactiveType
	});

	let leadingClass = '';
	if ($reactiveType === 'info') {
		leadingClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-info-icon';
	} else if ($reactiveType === 'warn') {
		leadingClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-warn-icon';
	} else if ($reactiveType === 'success') {
		leadingClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-success-icon';
	} else if ($reactiveType === 'error') {
		leadingClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center text-error-icon';
	}

	let defaultClass = '';
	$: if ($reactiveType === 'info') {
		defaultClass = 'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 bg-info-background';
	} else if ($reactiveType === 'warn') {
		defaultClass = 'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 bg-warn-background';
	} else if ($reactiveType === 'success') {
		defaultClass = 'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 bg-success-background';
	} else if ($reactiveType === 'error') {
		defaultClass = 'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 bg-error-background';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="flex">
		{#if $$slots.leading}
			<div class={leadingClass}>
				<slot name="leading" />
			</div>
		{/if}

		{#if $$slots.title || $$slots.description}
			<div class="flex items-start justify-start flex-col w-full" class:ml-3={$$slots.leading}>
				<slot name="title" />
				<slot name="description" />
			</div>
		{/if}
		<slot name="extra" />
	</div>
</div>
