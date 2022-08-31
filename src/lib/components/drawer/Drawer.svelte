<script lang="ts" context="module">
	export const DRAWER_CONTEXT_ID = 'drawer-context-name';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	export let handleClose: (() => void) | undefined = undefined;
	export let placement: 'left' | 'right' | 'top' | 'bottom' = 'right';
	export let disableEscClose = false;
	export let disableOverlayClose = false;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (
			e.key === 'Escape' &&
			e.code === 'Escape' &&
			!e.shiftKey &&
			!disableEscClose &&
			handleClose
		) {
			handleClose();
		}
	}

	let flyConfig: { x?: number; y?: number } = { x: 448 };
	if (placement === 'left') {
		flyConfig = { x: -448 };
	} else if (placement === 'top') {
		flyConfig = { y: -448 };
	} else if (placement === 'bottom') {
		flyConfig = { y: 448 };
	}

	setContext(DRAWER_CONTEXT_ID, {
		drawer: true,
		handleClose
	});
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div class="relative z-10" role="dialog">
	<div
		class="fixed inset-0 bg-dark-background dark:bg-light-background bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto"
		transition:fade
		on:click={disableOverlayClose ? undefined : handleClose}
	/>

	<div class="fixed inset-0 overflow-hidden pointer-events-none">
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div
				class="pointer-events-none fixed flex max-w-full drawer"
				class:left={placement === 'left'}
				class:right={placement === 'right'}
				class:top={placement === 'top'}
				class:bottom={placement === 'bottom'}
			>
				<div
					class="pointer-events-auto panel dark:shadow-black"
					class:left={placement === 'left'}
					class:right={placement === 'right'}
					class:top={placement === 'top'}
					class:bottom={placement === 'bottom'}
					class:shadow-2xl={placement !== 'bottom'}
					class:shadow-negative-2xl={placement === 'bottom'}
					style="opactiy: 1"
					transition:fly={flyConfig}
				>
					<div
						class="flex inner-panel flex-col bg-light-surface dark:bg-dark-surface overflow-hidden"
						class:left={placement === 'left'}
						class:right={placement === 'right'}
						class:top={placement === 'top'}
						class:bottom={placement === 'bottom'}
					>
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.drawer.right {
		@apply right-0;
		@apply pl-10;
		@apply inset-y-0;
	}

	.drawer.left {
		@apply left-0;
		@apply pr-10;
		@apply inset-y-0;
	}

	.drawer.top {
		@apply top-0;
		@apply pb-10;
		@apply inset-x-0;
	}

	.drawer.bottom {
		@apply bottom-0;
		@apply pt-10;
		@apply inset-x-0;
	}

	.panel {
		@apply w-full;
		@apply h-full;
		opacity: 1 !important;
	}

	.panel.right,
	.panel.left {
		@apply w-screen;
		@apply max-w-md;
	}

	.panel.top,
	.panel.bottom {
		@apply h-screen;
		@apply max-h-[28rem];
	}

	.inner-panel.right,
	.inner-panel.left {
		@apply h-full;
	}

	.inner-panel.top,
	.inner-panel.bottom {
		@apply w-full;
		@apply h-full;
	}
</style>
