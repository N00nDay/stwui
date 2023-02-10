<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';
	const currentType = writable(type);
	$: currentType.set(type);

	const defaultClass = 'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20';
	const defaultLeadingClass = 'flex-shrink-0 h-5 w-5 flex items-center justify-center';

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' ? 'bg-info-background' : false,
		type === 'warn' ? 'bg-warn-background' : false,
		type === 'success' ? 'bg-success-background' : false,
		type === 'error' ? 'bg-error-background' : false,

		$$props.class
	);

	$: finalLeadingClass = twMerge(
		defaultLeadingClass,

		type === 'info' ? 'text-info-icon' : false,
		type === 'warn' ? 'text-warn-icon' : false,
		type === 'success' ? 'text-success-icon' : false,
		type === 'error' ? 'text-error-icon' : false
	);

	setContext('alert-type', currentType);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="flex">
		{#if $$slots.leading}
			<div class={finalLeadingClass}>
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
