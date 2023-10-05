<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { fade } from 'svelte/transition';

	export let handleClose: () => void;

	const defaultClass =
		'overlay fixed inset-0 bg-background bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto stwui-modal-backdrop';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	type="button"
	tabindex="-1"
	class={finalClass}
	style={$$props.style}
	transition:fade
	on:click={handleClose}
/>
