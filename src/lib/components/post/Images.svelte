<script lang="ts">
	import { crossfade } from '../../utils/crossfade';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import type { CarouselSlide, LightboxAction } from '../../types';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import LightBox from '../lightbox/LightBox.svelte';

	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let images: CarouselSlide[] = [];
	export let handleClick: ((index: number) => void) | undefined = undefined;
	export let includeLightBox = true;
	export let activeSlide = 0;
	export let showClose = true;
	export let lightboxActions: LightboxAction[] = [];

	let lightBoxOpen = false;
	let lightBox1Open = false;
	let lightBox2Open = false;
	let lightBox3Open = false;
	let lightBox4Open = false;

	const [send, receive] = crossfade;

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Images'
	});

	function openLightBox(index: number) {
		setTimeout(() => {
			if (index === 0) {
				lightBox1Open = true;
			} else if (index === 1) {
				lightBox2Open = true;
			} else if (index === 2) {
				lightBox3Open = true;
			} else if (index === 3) {
				lightBox4Open = true;
			}
			activeSlide = index;
			lightBoxOpen = true;
		}, 100);
	}

	function closeLightBox() {
		lightBoxOpen = false;
		lightBox1Open = false;
		lightBox2Open = false;
		lightBox3Open = false;
		lightBox4Open = false;
	}

	$: if (lightBoxOpen && activeSlide === 0) {
		lightBox1Open = true;
		lightBox2Open = false;
		lightBox3Open = false;
		lightBox4Open = false;
	} else if (lightBoxOpen && activeSlide === 1) {
		lightBox2Open = true;
		lightBox1Open = false;
		lightBox3Open = false;
		lightBox4Open = false;
	} else if (lightBoxOpen && activeSlide === 2) {
		lightBox3Open = true;
		lightBox1Open = false;
		lightBox2Open = false;
		lightBox4Open = false;
	} else if (lightBoxOpen && activeSlide > 2) {
		lightBox4Open = true;
		lightBox1Open = false;
		lightBox2Open = false;
		lightBox3Open = false;
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
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="w-full h-full aspect-[1/1]">
		{#if images.length === 1}
			{#if !lightBox1Open}
				<div
					class="w-full h-full max-h-full max-w-full relative"
					in:receive|local={{ key: images[0].id }}
					out:send|local={{ key: images[0].id }}
				>
					<img
						src={images[0].src}
						alt="post-1"
						class="w-full h-full max-w-full max-h-full object-center object-cover"
						class:cursor-pointer={handleClick || includeLightBox}
						on:click={() => onClick(0)}
					/>
				</div>
			{/if}
		{:else if images.length === 2}
			<div class="w-full max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
				{#if !lightBox1Open}
					<div
						class="w-full h-full max-w-full max-h-full relative"
						in:receive|local={{ key: images[0].id }}
						out:send|local={{ key: images[0].id }}
					>
						<img
							src={images[0].src}
							alt="post-1"
							class="w-full h-full max-w-full max-h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(0)}
						/>
					</div>
				{/if}
				{#if !lightBox2Open}
					<div
						class="w-full h-full max-w-full max-h-full relative"
						in:receive|local={{ key: images[1].id }}
						out:send|local={{ key: images[1].id }}
					>
						<img
							src={images[1].src}
							alt="post-1"
							class="w-full h-full max-w-full max-h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(1)}
						/>
					</div>
				{/if}
			</div>
		{:else if images.length === 3}
			<div class="w-full h-full max-w-full max-h-full grid grid-cols-2 grid-flow-col aspect-[1/1]">
				{#if !lightBox1Open}
					<div
						class="w-full h-full max-w-full max-h-full relative pr-1"
						in:receive|local={{ key: images[0].id }}
						out:send|local={{ key: images[0].id }}
					>
						<img
							src={images[0].src}
							alt="post-1"
							class="w-full h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(0)}
						/>
					</div>
				{/if}
				<div class="w-full max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1 aspect-[1/2]">
					{#if !lightBox2Open}
						<div
							class="w-full h-full max-w-full max-h-full relative"
							in:receive|local={{ key: images[1].id }}
							out:send|local={{ key: images[1].id }}
						>
							<img
								src={images[1].src}
								alt="post-2"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(1)}
							/>
						</div>
					{/if}
					{#if !lightBox3Open}
						<div
							class="w-full h-full max-w-full max-h-full relative"
							in:receive|local={{ key: images[2].id }}
							out:send|local={{ key: images[2].id }}
						>
							<img
								src={images[2].src}
								alt="post-3"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(2)}
							/>
						</div>
					{/if}
				</div>
			</div>
		{:else if images.length > 3}
			<div class="w-full h-full max-w-full max-h-full grid grid-cols-2 grid-flow-col aspect-[1/1]">
				{#if !lightBox1Open}
					<div
						class="w-full h-full max-w-full max-h-full relative pr-1"
						in:receive|local={{ key: images[0].id }}
						out:send|local={{ key: images[0].id }}
					>
						<img
							src={images[0].src}
							alt="post-1"
							class="w-full h-full object-center object-cover"
							class:cursor-pointer={handleClick || includeLightBox}
							on:click={() => onClick(0)}
						/>
					</div>
				{/if}

				<div class="w-full max-w-full max-h-full grid grid-rows-3 grid-flow-row gap-1 aspect-[1/2]">
					{#if !lightBox2Open}
						<div
							class="w-full h-full max-w-full max-h-full relative"
							in:receive|local={{ key: images[1].id }}
							out:send|local={{ key: images[1].id }}
						>
							<img
								src={images[1].src}
								alt="post-2"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(1)}
							/>
						</div>
					{/if}
					{#if !lightBox3Open}
						<div
							class="w-full h-full max-w-full max-h-full relative"
							in:receive|local={{ key: images[2].id }}
							out:send|local={{ key: images[2].id }}
						>
							<img
								src={images[2].src}
								alt="post-3"
								class="w-full h-full max-w-full max-h-full object-center object-cover"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(2)}
							/>
						</div>
					{/if}

					{#if !lightBox4Open}
						{#if images.length === 4}
							<div
								class="w-full h-full max-w-full max-h-full relative"
								in:receive|local={{ key: images[3].id }}
								out:send|local={{ key: images[3].id }}
							>
								<img
									src={images[3].src}
									alt="post-4"
									class="w-full h-full max-w-full max-h-full object-center object-cover"
									class:cursor-pointer={handleClick || includeLightBox}
									on:click={() => onClick(3)}
								/>
							</div>
						{:else}
							<div
								class="w-full h-full max-w-full max-h-full relative"
								class:cursor-pointer={handleClick || includeLightBox}
								on:click={() => onClick(3)}
								in:receive|local={{ key: images[3].id }}
								out:send|local={{ key: images[3].id }}
							>
								<div
									class="w-full h-full absolute inset-0 bg-light-surface dark:bg-dark-surface backdrop-blur-sm bg-opacity-40 dark:bg-opacity-10 text-light-content dark:text-dark-content font-semibold text-3xl flex items-center justify-center"
								>
									{images.length - 4}+
								</div>
								<img
									src={images[3].src}
									alt="post-4"
									class="w-full h-full object-center object-cover"
								/>
							</div>
						{/if}
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

{#if lightBoxOpen && (lightBox1Open || lightBox2Open || lightBox3Open || lightBox4Open)}
	<LightBox
		handleClose={closeLightBox}
		slides={images}
		{showClose}
		actions={lightboxActions}
		bind:activeSlide
	/>
{/if}
