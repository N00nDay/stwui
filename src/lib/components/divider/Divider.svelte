<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let position: 'left' | 'center' | 'right' = 'center';

	const defaultClass = 'w-full border-t light-border-base dark:dark-border-base';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class="relative">
	<div class="absolute inset-0 flex items-center" aria-hidden="true">
		<div class={finalClass} style={$$props.style} />
	</div>
	{#if $$slots.label || $$slots.icon || $$slots.default}
		<div
			class="relative flex"
			class:justify-start={position === 'left'}
			class:justify-center={position === 'center'}
			class:justify-end={position === 'right'}
		>
			<slot name="label" />
			<slot name="icon" />
			<slot />
		</div>
	{/if}
</div>
