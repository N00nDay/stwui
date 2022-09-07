<script lang="ts">
	import { browser } from '$app/environment';

	export let src: string | undefined = undefined;
	export let alt = 'avatar';
	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let indicator = false;
	export let indicatorLocation: 'top-right' | 'bottom-right' = 'top-right';
	export let initials: string | undefined = undefined;
	export let withPlaceholder = true;

	let img: HTMLImageElement;

	function handleError(e: Event) {
		if (withPlaceholder) {
			img.remove();
		}
	}
</script>

{#if src && !indicator}
	<span
		class="inline-block relative align-middle {size}"
		class:rounded-full={shape === 'circle'}
		class:rounded-md={shape === 'rounded'}
	>
		<img
			bind:this={img}
			class="inline-block {size} relative z-10{$$props.class ? ` ${$$props.class}` : ''}"
			class:rounded-full={shape === 'circle'}
			class:rounded-md={shape === 'rounded'}
			src={(browser && src) || ''}
			{alt}
			on:error={handleError}
		/>
		{#if withPlaceholder}
			<div
				class="absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden transition-all duration-150 bg-light-icon-background dark:bg-dark-icon-background{$$props.class
					? ` ${$$props.class}`
					: ''}"
				class:rounded-full={shape === 'circle'}
				class:rounded-md={shape === 'rounded'}
			>
				<span
					class="material-icons absolute text-light-icon dark:text-dark-icon transition-all duration-150"
					class:text-2xl={size === 'xs'}
					class:text-4xl={size === 'sm'}
					class:text-5xl={size === 'md'}
					class:text-6xl={size === 'lg'}
					class:text-7xl={size === 'xl'}
					class:bottom-[-0.5rem]={size === 'xs' || size === 'sm' || size === 'md'}
					class:bottom-[-0.75rem]={size === 'lg' || size === 'xl'}
				>
					person
				</span>
			</div>
		{/if}
	</span>
{:else if indicator && src}
	<span
		class="inline-block relative align-middle"
		class:rounded-full={shape === 'circle'}
		class:rounded-md={shape === 'rounded'}
	>
		<img
			bind:this={img}
			class="{size}{$$props.class ? ` ${$$props.class}` : ''}"
			class:rounded-full={shape === 'circle'}
			class:rounded-md={shape === 'rounded'}
			src={(browser && src) || ''}
			{alt}
			on:error={handleError}
		/>
		<span
			class="absolute {indicatorLocation}{shape !== 'circle' && indicatorLocation === 'top-right'
				? ' -translate-y-1/2 translate-x-1/2'
				: shape !== 'circle' && indicatorLocation === 'bottom-right'
				? ' translate-y-1/2 translate-x-1/2'
				: ''} block rounded-full ring-2 ring-light-surface dark:ring-dark-surface bg-primary transition-all duration-150"
			class:h-1.5={size === 'xs'}
			class:w-1.5={size === 'xs'}
			class:h-2={size === 'sm'}
			class:w-2={size === 'sm'}
			class:h-2.5={size === 'md'}
			class:w-2.5={size === 'md'}
			class:h-3={size === 'lg'}
			class:w-3={size === 'lg'}
			class:h-3.5={size === 'xl'}
			class:w-3.5={size === 'xl'}
			class:transform={shape !== 'circle'}
		/>
	</span>
{:else if initials}
	<span
		class="inline-flex items-center justify-center align-middle {size} bg-gray-500{$$props.class
			? ` ${$$props.class}`
			: ''}"
		class:rounded-full={shape === 'circle'}
		class:rounded-md={shape === 'rounded'}
	>
		<span
			class="font-medium leading-none text-white"
			class:text-xs={size === 'xs'}
			class:text-sm={size === 'sm'}
			class:text-xl={size === 'lg'}
			class:text-2xl={size === 'xl'}>{initials}</span
		>
	</span>
{/if}

<style>
	.xs {
		height: 1.5rem;
		width: 1.5rem;
	}

	.sm {
		height: 2rem;
		width: 2rem;
	}

	.md {
		height: 2.5rem;
		width: 2.5rem;
	}

	.lg {
		height: 3rem;
		width: 3rem;
	}

	.xl {
		height: 4rem;
		width: 4rem;
	}

	.top-left {
		top: 0;
		left: 0;
	}

	.top-right {
		top: 0;
		right: 0;
	}

	.bottom-left {
		bottom: 0;
		left: 0;
	}

	.bottom-right {
		bottom: 0;
		right: 0;
	}
</style>
