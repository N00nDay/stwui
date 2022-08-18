<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	export let handleClose: () => void;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (e.key === 'Escape' && e.code === 'Escape' && !e.shiftKey) {
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div class="relative z-10 pointer-events-none" role="dialog" aria-modal="true" transition:fade>
	<div
		class="fixed inset-0 bg-light-background dark:bg-dark-background bg-opacity-60 dark:bg-opacity-50 transition-opacity pointer-events-auto"
		transition:fade
		on:click={handleClose}
	/>

	<div
		class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
		in:scale={{ start: 0.9, duration: 250, delay: 150 }}
		out:scale={{ start: 0.95, duration: 150 }}
	>
		<div
			class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-light-surface dark:bg-dark-surface shadow-2xl dark:shadow-black transition-all duration-150 pointer-events-auto"
		>
			<slot />
		</div>
	</div>
</div>
