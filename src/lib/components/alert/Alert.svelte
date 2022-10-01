<script lang="ts" context="module">
	export const ALERT_CONTEXT_ID = 'alert-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';

	setContext(ALERT_CONTEXT_ID, {
		alert: true,
		type
	});

	const defaultClass =
		'rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<!-- TODO: pull out the type and add to defaultClass -->
<div
	class={finalClass}
	class:bg-info-background={type === 'info'}
	class:bg-warn-background={type === 'warn'}
	class:bg-success-background={type === 'success'}
	class:bg-error-background={type === 'error'}
	style={$$props.style}
>
	<div class="flex">
		<slot name="icon" />
		<div class="flex items-start justify-start flex-col w-full" class:ml-3={$$slots.icon}>
			<slot name="title" />
			<slot name="description" />
		</div>
		<slot name="extra" />
	</div>
</div>
