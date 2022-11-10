<script lang="ts">
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';

	const defaultClass =
		'fixed inset-0 bg-dark-background dark:bg-light-background bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto';
	$: finalClass = twMerge(defaultClass, $$props.class);

	const handleClose: () => void = getContext('handleClose');
	const disableOverlayClose: boolean = getContext('disableOverlayClose');
</script>

<div
	class={finalClass}
	style={$$props.style}
	transition:fade
	on:click={disableOverlayClose ? undefined : handleClose}
	on:keypress
/>
