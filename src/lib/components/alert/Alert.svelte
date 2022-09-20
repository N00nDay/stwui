<script lang="ts" context="module">
	export const ALERT_CONTEXT_ID = 'alert-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { validateSlots } from '$lib/utils/validateSlots';

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';

	validateSlots($$slots, ['icon', 'title', 'description'], 'Alert');

	setContext(ALERT_CONTEXT_ID, {
		alert: true,
		type
	});

	const defaultClass =
		'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:bg-info-background={type === 'info'}
	class:bg-warn-background={type === 'warn'}
	class:bg-success-background={type === 'success'}
	class:bg-error-background={type === 'error'}
	style={$$props.style}
>
	<div class="flex">
		{#if $$slots.icon}
			<slot name="icon" />
		{/if}
		<div class="ml-3 flex items-start justify-start flex-col w-full">
			<slot name="title" />
			{#if $$slots.extra}
				<slot name="extra" />
			{/if}
			{#if $$slots.description}
				<slot name="description" />
			{/if}
		</div>
	</div>
</div>
