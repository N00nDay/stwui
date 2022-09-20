<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { POST_CONTEXT_ID } from './Post.svelte';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let images: string[] = [];
	export let handleClick: ((index: number) => void) | undefined = undefined;

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Cover'
	});

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
		{#if images.length === 1}
			<img
				src={images[0]}
				alt="post-1"
				class="w-full h-full max-w-full max-h-full object-center object-cover"
				class:cursor-pointer={handleClick}
				on:click={() => (handleClick ? handleClick(0) : null)}
			/>
		{:else if images.length === 2}
			<div class="w-full h-80 max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
				{#each images as image, i}
					<img
						src={image}
						alt="post-{i + 1}"
						class="w-full h-full max-w-full max-h-full object-center object-cover"
						class:cursor-pointer={handleClick}
						on:click={() => (handleClick ? handleClick(i) : null)}
					/>
				{/each}
			</div>
		{:else if images.length === 3}
			<div class="w-full h-80 max-w-full max-h-full grid grid-cols-2 grid-flow-col gap-1">
				<img
					src={images[0]}
					alt="post-1"
					class="w-full h-full object-center object-cover"
					class:cursor-pointer={handleClick}
					on:click={() => (handleClick ? handleClick(0) : null)}
				/>
				<div class="w-full h-80 max-w-full max-h-full grid grid-rows-2 grid-flow-row gap-1">
					<img
						src={images[1]}
						alt="post-2"
						class="w-full h-full max-w-full max-h-full object-center object-cover"
						class:cursor-pointer={handleClick}
						on:click={() => (handleClick ? handleClick(1) : null)}
					/>
					<img
						src={images[2]}
						alt="post-3"
						class="w-full h-full max-w-full max-h-full object-center object-cover"
						class:cursor-pointer={handleClick}
						on:click={() => (handleClick ? handleClick(2) : null)}
					/>
				</div>
			</div>
		{:else if images.length > 3}
			<div class="w-full h-80 max-w-full max-h-full grid grid-cols-2 grid-flow-col gap-1">
				<img
					src={images[0]}
					alt="post-1"
					class="w-full h-80 max-w-full max-h-full object-center object-cover"
					class:cursor-pointer={handleClick}
					on:click={() => (handleClick ? handleClick(0) : null)}
				/>

				<div class="w-full h-80 max-w-full max-h-full grid grid-rows-3 grid-flow-row gap-1">
					{#each images as image, i}
						{#if i > 0 && i < 4}
							{#if i === 3 && images.length > 4}
								<div
									class="w-full h-full max-w-full max-h-full relative"
									class:cursor-pointer={handleClick}
									on:click={() => (handleClick ? handleClick(3) : null)}
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
									class="w-full h-full max-w-full max-h-full object-center object-cover"
									class:cursor-pointer={handleClick}
									on:click={() => (handleClick ? handleClick(i) : null)}
								/>
							{:else}
								<img
									src={image}
									alt="post-{i + 1}"
									class="w-full h-full max-w-full max-h-full object-center object-cover"
									class:cursor-pointer={handleClick}
									on:click={() => (handleClick ? handleClick(i) : null)}
								/>
							{/if}
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
