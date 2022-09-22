<script lang="ts">
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { DRAWER_CONTEXT_ID } from './Drawer.svelte';

	const defaultClass =
		'fixed inset-0 bg-dark-background dark:bg-light-background bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto';
	const finalClass = twMerge(defaultClass, $$props.class);

	const {
		disableOverlayClose,
		handleClose
	}: { disableOverlayClose: boolean; handleClose: () => void } = getContext(DRAWER_CONTEXT_ID);
</script>

<div
	class={finalClass}
	style={$$props.style}
	transition:fade
	on:click={disableOverlayClose ? undefined : handleClose}
/>
