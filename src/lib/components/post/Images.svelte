<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import type { Slide } from '../../types/carousel-slide';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	import LightBox from '../lightbox/LightBox.svelte';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let images: Slide[] = [];
	export let handleClick: ((index: number) => void) | undefined = undefined;
	export let includeLightBox = true;
	export let activeSlide = 0;

	let selected: Slide | null = null;
	let lightBoxOpen = false;

	const [send, receive] = crossfade({
		duration: 300
	});

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Cover'
	});

	function openLightBox(index: number) {
		activeSlide = index;
		selected = images[index];
		lightBoxOpen = true;
	}

	function closeLightBox() {
		lightBoxOpen = false;
		setTimeout(() => {
			activeSlide = 0;
			selected = null;
		}, 301);
	}

	function onClick(index: number) {
		if (handleClick) {
			handleClick(index);
		} else if (includeLightBox) {
			openLightBox(index);
		}
	}

	const defaultClass =
		'mt-[-1px] mr-[-1px] ml-[-1px] last:h-[calc(100%+2px)] first:rounded-t-md last:rounded-b-md overflow-hidden';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="w-full h-80">
		{#if !lightBoxOpen}
			{#if images.length === 1}
				{#each images as image (image.id)}
					<div
						id={image.id}
						class="w-full h-full max-h-full max-w-full relative"
						in:receive={{ key: image.id }}
						out:send={{ key: image.id }}
					>
						<img
							src={image.src}
							alt="post-1"
							class="w-full h-full max-w-full max-h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(0)}
						/>
					</div>
				{/each}
			{:else if images.length === 2}
				<div class="w-full h-80 max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
					{#each images as image, i}
						<div
							id={image.id}
							class="w-full h-full max-w-full max-h-full relative"
							in:receive={{ key: image.id }}
							out:send={{ key: image.id }}
						>
							<img
								src={image.src}
								alt="post-{i + 1}"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(i)}
							/>
						</div>
					{/each}
				</div>
			{:else if images.length === 3}
				<div class="w-full h-80 max-w-full max-h-full grid grid-cols-2 grid-flow-col gap-1">
					<div
						id={images[0].id}
						class="w-full h-full max-w-full max-h-full relative"
						in:receive={{ key: images[0].id }}
						out:send={{ key: images[0].id }}
					>
						<img
							src={images[0].src}
							alt="post-1"
							class="w-full h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(0)}
						/>
					</div>
					<div class="w-full h-80 max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
						<div
							id={images[1].id}
							class="w-full h-full max-w-full max-h-full relative"
							in:receive={{ key: images[1].id }}
							out:send={{ key: images[1].id }}
						>
							<img
								src={images[1].src}
								alt="post-2"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(1)}
							/>
						</div>
						<div
							id={images[2].id}
							class="w-full h-full max-w-full max-h-full relative"
							in:receive={{ key: images[2].id }}
							out:send={{ key: images[2].id }}
						>
							<img
								src={images[2].src}
								alt="post-3"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(2)}
							/>
						</div>
					</div>
				</div>
			{:else if images.length > 3}
				<div class="w-full h-80 max-w-full max-h-full grid grid-cols-2 grid-flow-col gap-1">
					<div
						id={images[0].id}
						class="w-full h-80 max-w-full max-h-full relative"
						in:receive={{ key: images[0].id }}
						out:send={{ key: images[0].id }}
					>
						<img
							src={images[0].src}
							alt="post-1"
							class="w-full h-80 max-w-full max-h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(0)}
						/>
					</div>

					<div class="w-full h-80 max-w-full max-h-full grid grid-rows-3 grid-flow-row gap-1">
						{#each images as image, i (image.id)}
							{#if i > 0 && i < 4}
								{#if i === 3 && images.length > 4}
									<div
										id={image.id}
										class="w-full h-full max-w-full max-h-full relative"
										class:cursor-pointer={handleClick || includeLightBox}
										on:click={() => onClick(3)}
										in:receive={{ key: images[3].id }}
										out:send={{ key: images[3].id }}
									>
										<div
											class="w-full h-full absolute inset-0 bg-light-surface dark:bg-dark-surface backdrop-blur-sm bg-opacity-40 dark:bg-opacity-10 text-light-content dark:text-dark-content font-semibold text-3xl flex items-center justify-center transition-all duration-150"
										>
											{images.length - 4}+
										</div>
										<img
											src={image.src}
											alt="post-{i + 1}"
											class="w-full h-full object-center object-cover"
										/>
									</div>
								{:else if i === 3}
									<div
										id={image.id}
										class="w-full h-full max-w-full max-h-full relative"
										in:receive={{ key: images[i].id }}
										out:send={{ key: images[i].id }}
									>
										<img
											src={image.src}
											alt="post-{i + 1}"
											class="w-full h-full max-w-full max-h-full object-center object-cover"
											class:cursor-pointer={handleClick || includeLightBox}
											on:click={() => onClick(i)}
										/>
									</div>
								{:else}
									<div
										id={image.id}
										class="w-full h-full max-w-full max-h-full relative"
										in:receive={{ key: images[i].id }}
										out:send={{ key: images[i].id }}
									>
										<img
											src={image.src}
											alt="post-{i + 1}"
											class="w-full h-full max-w-full max-h-full object-center object-cover"
											class:cursor-pointer={handleClick || includeLightBox}
											on:click={() => onClick(i)}
										/>
									</div>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>

{#if lightBoxOpen && selected}
	<div
		class="fixed inset-0 h-screen w-screen z-10"
		in:receive={{ key: selected.id }}
		out:send={{ key: selected.id }}
	>
		<LightBox handleClose={closeLightBox} slides={images} {activeSlide} />
	</div>
{/if}
