<script lang="ts">
	import { scale } from 'svelte/transition';
	import { Carousel, type Slide } from '../carousel';
	import { Modal } from '../modal';
	import { Portal } from '../portal';

	export let open = false;
	export let slides: Slide[] = [];
	export let activeSlide: number = 0;
	export let handleClose: () => void;
	export let allowDownload = true;
	export let allowShare = true;

	let rotation = 0;

	function handleRotateRight() {
		rotation = rotation + 90;
	}

	function handleRotateLeft() {
		rotation = rotation - 90;
	}

	async function handleDownload() {
		const url = slides[activeSlide].src;
		const image = await fetch(url);
		const imageBlob = await image.blob();
		const imageURL = URL.createObjectURL(imageBlob);

		const link = document.createElement('a');
		link.href = imageURL;
		link.download = 'image';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	async function handleShare() {
		if (navigator.canShare()) {
			const url = slides[activeSlide].src;
			const shareData = {
				title: 'App Name', // TODO: need to get the app name here from the app using the app
				text: 'Check out this image', // TODO: need to set a default text but allow for a passed value
				url
			};
			navigator.share(shareData);
		}
	}
</script>

{#if open}
	<Portal>
		<Modal {handleClose} fullScreen>
			<Carousel bind:activeSlide {slides} {rotation}>
				<svelte:fragment slot="controls">
					<div
						transition:scale
						class="relative z-10 cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full scale-95 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 transition-all duration-150 pointer-events-auto"
						on:click={handleClose}
					>
						<span class="material-icons text-3xl text-light-surface"> close </span>
						<span class="sr-only">Close</span>
					</div>

					<div
						transition:scale
						class="relative z-10 cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full scale-95 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 transition-all duration-150 pointer-events-auto"
						on:click={handleRotateLeft}
					>
						<span class="material-icons text-3xl text-light-surface"> undo </span>
						<span class="sr-only">Rotate Left</span>
					</div>

					<div
						transition:scale
						class="relative z-10 cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full scale-95 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 transition-all duration-150 pointer-events-auto"
						on:click={handleRotateRight}
					>
						<span class="material-icons text-3xl text-light-surface"> redo </span>
						<span class="sr-only">Rotate Right</span>
					</div>

					{#if allowDownload}
						<div
							transition:scale
							class="relative z-10 cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full scale-95 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 transition-all duration-150 pointer-events-auto"
							on:click={handleDownload}
						>
							<span class="material-icons text-3xl text-light-surface"> download </span>
							<span class="sr-only">Download</span>
						</div>
					{/if}

					{#if allowShare}
						<div
							transition:scale
							class="relative z-10 cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full scale-95 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 transition-all duration-150 pointer-events-auto"
							on:click={handleShare}
						>
							<span class="material-icons text-3xl text-light-surface"> share </span>
							<span class="sr-only">Share</span>
						</div>
					{/if}
				</svelte:fragment>
			</Carousel>
		</Modal>
	</Portal>
{/if}
