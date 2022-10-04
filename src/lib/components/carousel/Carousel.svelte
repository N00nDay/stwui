<script lang="ts">
	import type { Slide } from '../../types/carousel-slide';

	export let slides: Slide[] = [];
	export let activeSlide = 0;
	export let rotation = 0;

	function handleNext() {
		if (activeSlide === slides.length - 1) {
			activeSlide = 0;
		} else {
			activeSlide++;
		}
	}

	function handlePrevious() {
		if (activeSlide === 0) {
			activeSlide = slides.length - 1;
		} else {
			activeSlide--;
		}
	}

	function handleGoTo(index: number) {
		activeSlide = index;
	}
</script>

<div class="relative h-full">
	{#if $$slots.controls}
		<slot name="controls" />
	{/if}

	<div class="absolute z-10 right-0 bottom-0 left-0 flex gap-2 justify-center p-0 mb-4">
		{#each slides as _, i}
			<button
				on:click={() => handleGoTo(i)}
				class="h-1.5 bg-light-surface shadow-md max-w-[40px] hover:shadow-lg hover:opacity-90"
				class:opacity-50={activeSlide !== i}
				class:hover:opacity-90={activeSlide !== i}
				style={`width: calc(100% / ${slides.length});`}
			/>
		{/each}
	</div>
	<div class="relative w-full h-full overflow-hidden">
		{#each slides as slide, i}
			<div
				class="absolute inset-0 w-full h-full transition-opacity duration-200 flex items-center justify-center"
				class:opacity-0={activeSlide !== i}
				class:opacity-100={activeSlide === i}
			>
				<img
					src={slide.src}
					style="--rotation: {rotation}deg"
					class="image block max-w-full max-h-full h-auto w-auto object-contain"
					alt={slide.alt}
				/>
			</div>
		{/each}
	</div>
	<button
		on:click={handlePrevious}
		class="group absolute bg-black bg-opacity-5 top-0 bottom-0 flex items-center justify-center px-4 text-center border-0 outline-none hover:outline-none hover:no-underline focus:outline-none focus:no-underline shadow-md left-0"
		type="button"
	>
		<div
			class="flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full transition-reveal scale-90 group-hover:scale-100 group-hover:bg-opacity-20 group-hover:active:scale-95"
		>
			<span class="material-icons text-3xl text-dark-content"> arrow_back </span>
			<span class="sr-only">Previous</span>
		</div>
	</button>
	<button
		on:click={handleNext}
		class="group absolute bg-black bg-opacity-5 top-0 bottom-0 flex items-center justify-center px-4 text-center border-0 outline-none hover:outline-none hover:no-underline focus:outline-none focus:no-underline shadow-md right-0"
		type="button"
	>
		<div
			class="flex items-center justify-center h-14 w-14 bg-white bg-opacity-10 rounded-full transition-reveal scale-90 group-hover:scale-100 group-hover:bg-opacity-20 group-hover:active:scale-95"
		>
			<span class="material-icons text-3xl text-dark-content"> arrow_forward </span>
			<span class="sr-only">Next</span>
		</div>
	</button>
</div>

<style>
	.image {
		transform: rotate(var(--rotation));
	}
</style>
