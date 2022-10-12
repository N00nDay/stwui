<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'overflow-hidden rounded-md px-4 py-5 shadow-md dark:shadow-black sm:p-5 bg-light-surface dark:bg-dark-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	{#if $$slots.title || $$slots.icon}
		<div class="relative flex flex-row items-center justify-between">
			<slot name="title" />
			<slot name="icon" />
		</div>
	{/if}
	<slot name="value" />
	<slot />
	<slot name="goal" />
	<slot name="comparison" />
</div>
