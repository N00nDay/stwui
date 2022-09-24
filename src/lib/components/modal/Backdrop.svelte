<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { fade } from 'svelte/transition';

	export let handleClose: () => void;

	const defaultClass =
		'overlay fixed inset-0 bg-dark-background dark:bg-light-background bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} transition:fade on:click={handleClose} />
