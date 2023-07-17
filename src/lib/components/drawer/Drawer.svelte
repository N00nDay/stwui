<script lang="ts">
	import { trapFocus } from '$lib/utils';
	import { onMount, setContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import Backdrop from './Backdrop.svelte';

	export let handleClose: (() => void) | undefined = undefined;
	export let placement: 'left' | 'right' | 'top' | 'bottom' = 'right';
	export let disableEscClose = false;
	export let disableOverlayClose = false;
	export let panelClass = '';

	function captureEscapeEvent(e: KeyboardEvent) {
		if (
			e.key === 'Escape' &&
			e.code === 'Escape' &&
			!e.shiftKey &&
			!disableEscClose &&
			handleClose
		) {
			onClose();
			e.preventDefault();
			e.stopPropagation();
		}
	}

	function onClose() {
		const dialogs = document.querySelectorAll(
			`[data-placement=${placement}]`
		) as unknown as HTMLDivElement[];

		let offset = 0;

		for (let i = dialogs.length - 1; i >= 0; i--) {
			if (i !== dialogs.length - 1) {
				if (placement === 'left') {
					dialogs[i].style.transform = `translateX(${offset}px)`;
					offset -= 180;
				} else if (placement === 'top') {
					dialogs[i].style.transform = `translateY(${offset}px)`;
					offset -= 180;
				} else if (placement === 'bottom') {
					dialogs[i].style.transform = `translateY(${offset}px)`;
					offset += 180;
				} else {
					dialogs[i].style.transform = `translateX(${offset}px)`;
					offset += 180;
				}
			}
		}

		if (handleClose) {
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

	function shiftDrawers() {
		const dialogs = document.querySelectorAll(
			`[data-placement=${placement}]`
		) as unknown as HTMLDivElement[];

		let offset = 0;

		for (let i = 0; i < dialogs.length; i++) {
			if (i !== dialogs.length - 1) {
				if (placement === 'left') {
					offset += 180;
					dialogs[i].style.transform = `translateX(${offset}px)`;
				} else if (placement === 'top') {
					offset += 180;
					dialogs[i].style.transform = `translateY(${offset}px)`;
				} else if (placement === 'bottom') {
					offset -= 180;
					dialogs[i].style.transform = `translateY(${offset}px)`;
				} else {
					offset -= 180;
					dialogs[i].style.transform = `translateX(${offset}px)`;
				}
			}
		}
	}

	const defaultClass = 'flex inner-panel flex-col bg-surface overflow-hidden';
	$: finalClass = twMerge(defaultClass, $$props.class);

	const defaultPanelClass = 'pointer-events-auto panel transition-transform duration-200';
	$: finalPanelClass = twMerge(defaultPanelClass, panelClass);

	setContext('drawer-handleClose', onClose);
	setContext('drawer-disableOverlayClose', disableOverlayClose);

	onMount(() => {
		shiftDrawers();
	});
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div class="relative z-10" role="dialog">
	{#if $$slots.backdrop}
		<slot name="backdrop" />
	{:else}
		<Backdrop />
	{/if}

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
					use:trapFocus
					class={finalPanelClass}
					class:left={placement === 'left'}
					class:right={placement === 'right'}
					class:top={placement === 'top'}
					class:bottom={placement === 'bottom'}
					class:shadow-2xl={placement !== 'bottom'}
					class:shadow-negative-2xl={placement === 'bottom'}
					style="opactiy: 1"
					transition:fly={flyConfig}
					data-dialog
					data-placement={placement}
				>
					<div
						class={finalClass}
						class:left={placement === 'left'}
						class:right={placement === 'right'}
						class:top={placement === 'top'}
						class:bottom={placement === 'bottom'}
						style={$$props.style}
					>
						<button
							class="h-0 w-0 border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
						/>
						<slot name="header" />
						<slot name="content" />
						<slot />
						<slot name="footer" />
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
