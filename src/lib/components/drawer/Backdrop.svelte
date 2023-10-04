<script lang="ts">
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';

	const defaultClass =
		'fixed inset-0 bg-background bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto stwui-drawer-backdrop';
	$: finalClass = twMerge(defaultClass, $$props.class);

	const handleClose: () => void = getContext('drawer-handleClose');
	const disableOverlayClose: boolean = getContext('drawer-disableOverlayClose');
</script>

<button
	class={finalClass}
	style={$$props.style}
	transition:fade
	on:click={disableOverlayClose ? undefined : handleClose}
	type="button"
	tabindex="-1"
/>
