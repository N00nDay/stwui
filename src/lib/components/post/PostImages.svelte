<script lang="ts">
	import type { Slide } from '../carousel';
	import { LightBox } from '../lightbox';

	export let images: string[] = [];
	export let allowDownload = true;
	export let allowShare = true;

	let slides: Slide[] = [];
	let activeSlide: number = 0;
	let open = false;

	for (const image of images) {
		slides.push({
			src: image
		});
	}

	function handleClick(index: number) {
		activeSlide = index;
		open = true;
	}

	function handleClose() {
		open = false;
	}
</script>

<div class="w-full h-80">
	{#if images.length === 1}
		<img
			src={images[0]}
			alt="post-1"
			class="w-full h-full max-w-full max-h-full object-center object-cover cursor-pointer"
			on:click={() => handleClick(0)}
		/>
	{:else if images.length === 2}
		<div class="w-full h-80 max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
			{#each images as image, i}
				<img
					src={image}
					alt="post-{i + 1}"
					class="w-full h-full max-w-full max-h-full object-center object-cover cursor-pointer"
					on:click={() => handleClick(i)}
				/>
			{/each}
		</div>
	{:else if images.length === 3}
		<div class="w-full h-80 max-w-full max-h-full grid grid-cols-2 grid-flow-col gap-1">
			<img
				src={images[0]}
				alt="post-1"
				class="w-full h-full object-center object-cover cursor-pointer"
				on:click={() => handleClick(0)}
			/>
			<div class="w-full h-80 max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
				<img
					src={images[1]}
					alt="post-2"
					class="w-full h-full max-w-full max-h-full object-center object-cover cursor-pointer"
					on:click={() => handleClick(1)}
				/>
				<img
					src={images[2]}
					alt="post-3"
					class="w-full h-full max-w-full max-h-full object-center object-cover cursor-pointer"
					on:click={() => handleClick(2)}
				/>
			</div>
		</div>
	{:else if images.length > 3}
		<div class="w-full h-80 max-w-full max-h-full grid grid-cols-2 grid-flow-col gap-1">
			<img
				src={images[0]}
				alt="post-1"
				class="w-full h-80 max-w-full max-h-full object-center object-cover cursor-pointer"
				on:click={() => handleClick(0)}
			/>

			<div class="w-full h-80 max-w-full max-h-full grid grid-rows-3 grid-flow-row gap-1">
				{#each images as image, i}
					{#if i > 0 && i < 4}
						{#if i === 3 && images.length > 4}
							<div
								class="w-full h-full max-w-full max-h-full relative cursor-pointer"
								on:click={() => handleClick(3)}
							>
								<div
									class="w-full h-full absolute inset-0 bg-light-surface dark:bg-dark-surface backdrop-blur-sm bg-opacity-40 dark:bg-opacity-10 text-light-content dark:text-dark-content font-semibold text-3xl flex items-center justify-center transition-all duration-150"
								>
									{images.length - 4}+
								</div>
								<img
									src={image}
									alt="post-{i + 1}"
									class="w-full h-full object-center object-cover"
								/>
							</div>
						{:else if i === 3}
							<img
								src={image}
								alt="post-{i + 1}"
								class="w-full h-full max-w-full max-h-full object-center object-cover cursor-pointer"
								on:click={() => handleClick(i)}
							/>
						{:else}
							<img
								src={image}
								alt="post-{i + 1}"
								class="w-full h-full max-w-full max-h-full object-center object-cover cursor-pointer"
								on:click={() => handleClick(i)}
							/>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

<LightBox {open} {slides} {activeSlide} {handleClose} {allowDownload} {allowShare} />
