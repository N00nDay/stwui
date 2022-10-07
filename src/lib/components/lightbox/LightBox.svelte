<script lang="ts">
	import { crossfade } from '../../utils/crossfade';
	import { fade, fly, scale } from 'svelte/transition';

	import type { CarouselSlide, LightboxAction } from '../../types';
	import Control from './Control.svelte';
	import Portal from '../portal/Portal.svelte';

	export let slides: CarouselSlide[] = [];
	export let activeSlide = 0;
	export let handleClose: () => void;
	export let showClose = true;
	export let allowRotation = true;
	export let allowPrint = true;
	export let allowDownload = true;
	export let actions: LightboxAction[] = [];

	const [send, receive] = crossfade;
	let rotation = 0;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (e.key === 'Escape' && e.code === 'Escape' && !e.shiftKey) {
			handleClose();
		} else if (e.key === 'ArrowRight' && e.code === 'ArrowRight' && !e.shiftKey) {
			handleNext();
		} else if (e.key === 'ArrowLeft' && e.code === 'ArrowLeft' && !e.shiftKey) {
			handlePrevious();
		}
	}

	function handleNext() {
		if (activeSlide === slides.length - 1) {
			activeSlide = 0;
		} else {
			activeSlide++;
		}
		rotation = 0;
	}

	function handlePrevious() {
		if (activeSlide === 0) {
			activeSlide = slides.length - 1;
		} else {
			activeSlide--;
		}
		rotation = 0;
	}

	function handleGoTo(index: number) {
		activeSlide = index;
	}

	function rotateRight() {
		rotation += 90;
	}

	function rotateLeft() {
		rotation -= 90;
	}

	function handlePrint() {
		window.print();
	}

	async function handleDownload() {
		const response = await fetch(slides[activeSlide].src);
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.download = slides[activeSlide].id;
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
		a.remove();
	}

	$: key = activeSlide > 3 ? slides[3].id : slides[activeSlide].id;
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div
	class="fixed inset-0 w-full z-50 pointer-events-none h-full bg-dark-background"
	role="dialog"
	aria-modal="true"
	in:receive={{ key }}
	out:send={{ key }}
>
	<div class="modal fixed inset-0 overflow-y-auto p-0 overflow-hidden">
		<div class="content mx-auto h-full w-full transform overflow-hidden pointer-events-auto m-0">
			<div class="relative h-full">
				{#if actions}
					<div
						in:fly={{ delay: 250, y: -200 }}
						out:scale={{ delay: 300 }}
						class="absolute z-10 right-0 left-0 top-0 flex items-center justify-center mt-3"
					>
						<div
							class="rounded-[1.85rem] bg-dark-surface p-2 text-sm text-dark-content bg-opacity-70 flex flex-row gap-1 justify-center items-center"
						>
							{#if showClose}
								<Control icon="close" on:click={handleClose} />
							{/if}
							{#if allowRotation}
								<Control icon="undo" on:click={rotateLeft} />
								<Control icon="redo" on:click={rotateRight} />
							{/if}
							{#if allowPrint}
								<Control icon="print" on:click={handlePrint} />
							{/if}
							{#if allowDownload}
								<Control icon="download" on:click={handleDownload} />
							{/if}
							{#each actions as action}
								<Control icon={action.icon} on:click={action.action} />
							{/each}
						</div>
					</div>
				{/if}

				<div
					in:scale={{ delay: 300 }}
					out:fade
					class="absolute z-10 right-0 left-0 bottom-7 flex items-center justify-center"
				>
					<div class="rounded-xl bg-dark-surface px-2 py-1 text-sm text-dark-content bg-opacity-70">
						{activeSlide + 1} / {slides.length}
					</div>
				</div>

				<div
					class="absolute z-10 right-0 bottom-0 left-0 flex gap-2 justify-center p-0 mb-3"
					in:scale={{ delay: 300 }}
					out:fade
				>
					{#each slides as _, i}
						<button
							on:click={() => handleGoTo(i)}
							class="h-1.5 rounded-sm bg-light-surface max-w-[40px] hover:shadow-lg hover:opacity-90"
							class:opacity-50={activeSlide !== i}
							class:hover:opacity-90={activeSlide !== i}
							style={`width: calc(100% / ${slides.length});`}
						/>
					{/each}
				</div>
				<div class="relative w-full h-full overflow-hidden">
					{#key activeSlide}
						<div
							class="absolute inset-0 w-full h-full flex items-center justify-center p-2"
							transition:fade|local
						>
							<img
								src={slides[activeSlide].src}
								style="--rotation: {rotation}deg"
								class="image block max-w-full shadow-lg shadow-black max-h-full h-auto w-auto object-cover"
								alt={slides[activeSlide].alt}
							/>
						</div>
					{/key}
				</div>
				<button
					in:fly={{ delay: 250, x: -200 }}
					out:fade
					on:click={handlePrevious}
					class="group absolute z-10 bg-black bg-opacity-5 top-0 bottom-0 flex items-center justify-center px-4 text-center border-0 outline-none hover:outline-none hover:no-underline duration-150 focus:outline-none focus:no-underline shadow-md left-0"
					type="button"
				>
					<div
						in:scale={{ delay: 350 }}
						class="flex items-center justify-center h-12 w-12 bg-white bg-opacity-30 rounded-full transition-reveal scale-90 group-hover:scale-100 group-hover:bg-opacity-20 group-hover:active:scale-95"
					>
						<span class="material-icons text-3xl text-dark-content"> arrow_back </span>
						<span class="sr-only">Previous</span>
					</div>
				</button>
				<button
					in:fly={{ delay: 250, x: 200 }}
					out:fade
					on:click={handleNext}
					class="group absolute z-10 bg-black bg-opacity-5 top-0 bottom-0 flex items-center justify-center px-4 text-center border-0 outline-none hover:outline-none hover:no-underline duration-150 focus:outline-none focus:no-underline shadow-md right-0"
					type="button"
				>
					<div
						in:scale={{ delay: 350 }}
						class="flex items-center justify-center h-12 w-12 bg-white bg-opacity-30 rounded-full transition-reveal scale-90 group-hover:scale-100 group-hover:bg-opacity-20 group-hover:active:scale-95"
					>
						<span class="material-icons text-3xl text-dark-content"> arrow_forward </span>
						<span class="sr-only">Next</span>
					</div>
				</button>
			</div>
		</div>
	</div>
</div>

{#if allowPrint}
	<Portal>
		<img
			src={slides[activeSlide].src}
			style="--rotation: {rotation}deg"
			class="print:block image max-w-full max-h-full h-auto w-auto hidden"
			alt={slides[activeSlide].alt}
		/>
	</Portal>
{/if}

<style>
	.image {
		transform: rotate(var(--rotation));
	}
</style>
