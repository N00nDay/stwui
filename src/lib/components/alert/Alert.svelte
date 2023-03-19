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

	const defaultClass = 'rounded-md p-4';
	const defaultLeadingClass = 'flex-grow flex flex-col w-6 flex items-center';

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' ? 'bg-info' : false,
		type === 'warn' ? 'bg-warn' : false,
		type === 'success' ? 'bg-success' : false,
		type === 'error' ? 'bg-error' : false,

		$$props.class
	);

	$: finalLeadingClass = twMerge(
		defaultLeadingClass,

		type === 'info' ? 'text-info-icon' : false,
		type === 'warn' ? 'text-warn-icon' : false,
		type === 'success' ? 'text-success-icon' : false,
		type === 'error' ? 'text-error-icon' : false,

		$$slots.description ? 'justify-start h-6' : 'justify-center'
	);

	setContext('alert-type', currentType);
	setContext('alert-description', $$slots.description ? true : false);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="flex relative">
		{#if $$slots.leading}
			<div class={finalLeadingClass}>
				<slot name="leading" />
			</div>
		{/if}

		{#if $$slots.title || $$slots.description}
			<div
				class="flex items-start flex-col w-full"
				class:ml-3={$$slots.leading}
				class:justify-start={$$slots.description}
				class:justify-center={!$$slots.description}
			>
				<slot name="title" />
				<slot name="description" />
			</div>
		{/if}
		<slot name="extra" />
	</div>
</div>
