<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	export let handleClose: () => void;
	export let fullScreen = false;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (e.key === 'Escape' && e.code === 'Escape' && !e.shiftKey) {
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div
	class="relative z-10 pointer-events-none"
	class:fullScreen
	role="dialog"
	aria-modal="true"
	transition:fade
>
	<div
		class="overlay fixed inset-0 bg-dark-background dark:bg-light-background bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto"
		transition:fade
		on:click={handleClose}
	/>

	<div
		class="modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20"
		in:scale={{ start: 0.9, duration: 250, delay: 150 }}
		out:scale={{ start: 0.95, duration: 150 }}
	>
		<div class="content mx-auto max-w-xl transform overflow-hidden rounded-md pointer-events-auto">
			<slot />
		</div>
	</div>
</div>

<style>
	div.fullScreen > .overlay {
		@apply bg-black;
	}

	div.fullScreen > .modal {
		@apply p-0;
		@apply sm:p-0;
		@apply md:p-0;
		@apply overflow-hidden;
	}

	div.fullScreen > .modal > .content {
		@apply m-0;
		@apply max-w-none;
		@apply w-full;
		@apply h-full;
	}
</style>
