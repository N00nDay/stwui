<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let half = false;
	export let outOf = 5;
	export let name: string;
	export let value = 0;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let showValue = false;

	let defaultClass = 'rating text-primary';

	defaultClass = twMerge(defaultClass, $$props.class);

	function handleSelect(rating: number) {
		value = rating;
	}
</script>

<div class="w-full flex flex-row items-center justify-start">
	<div
		class={defaultClass}
		class:rating-half={half}
		class:sm={size === 'sm'}
		class:md={size === 'md'}
		class:lg={size === 'lg'}
	>
		<input type="radio" {name} class="hidden" checked={value === 0} />
		{#if half}
			{#each Array(outOf) as _, i}
				<input
					type="radio"
					{name}
					class="mask mask-star-2 mask-half-1"
					on:input={() => handleSelect(i + 0.5)}
					checked={i + 0.5 === value}
				/>
				<input
					type="radio"
					{name}
					class="mask mask-star-2 mask-half-2"
					on:input={() => handleSelect(i + 1)}
					checked={i + 1 === value}
				/>
			{/each}
		{:else}
			{#each Array(outOf) as _, i}
				<input
					type="radio"
					{name}
					class="mask mask-star-2"
					on:input={() => handleSelect(i + 1)}
					checked={i + 1 === value}
				/>
			{/each}
		{/if}
	</div>
	{#if showValue}
		<span
			class="ml-2 text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
			class:text-sm={size === 'sm'}
			class:text-base={size === 'md'}
			class:text-lg={size === 'lg'}>{value} of {outOf}</span
		>
	{/if}
</div>

<style>
	.rating {
		position: relative;
		display: inline-flex;
	}

	.rating input {
		appearance: none;
		-webkit-appearance: none;
	}

	.mask-star-2 {
		background-image: none;
		-webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDE1My4wNDQtNTguNzc5IDI2LjI0MyA3LjAyLTYzLjUxM0wuODk0IDY4LjQ4MWw2My4xMTctMTMuMDFMOTYgMGwzMS45ODkgNTUuNDcyIDYzLjExNyAxMy4wMS00My4zNDcgNDcuMjkyIDcuMDIgNjMuNTEzeicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+);
		mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDE1My4wNDQtNTguNzc5IDI2LjI0MyA3LjAyLTYzLjUxM0wuODk0IDY4LjQ4MWw2My4xMTctMTMuMDFMOTYgMGwzMS45ODkgNTUuNDcyIDYzLjExNyAxMy4wMS00My4zNDcgNDcuMjkyIDcuMDIgNjMuNTEzeicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+);
	}

	.rating.sm input {
		width: 1rem;
	}

	.rating.lg input {
		height: 2rem;
		width: 2rem;
	}

	.rating :where(input) {
		cursor: pointer;
		height: 1.5rem;
		width: 1.5rem;
		color: inherit;
		background-color: currentColor;
		opacity: 1;
		animation: rating-pop var(--animation-input, 0.25s) ease-out;
	}

	input[type='radio']:active {
		transition: all;
		transition-duration: 200ms;
		transform: translateY(-0.125em);
	}

	.mask {
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.rating input:checked ~ input {
		opacity: 0.2;
	}

	.rating-half.sm > input {
		width: 0.5rem;
	}

	.rating-half.lg > input {
		width: 1rem;
	}

	.rating-half > input {
		width: 0.75rem;
	}

	.mask-half-1 {
		-webkit-mask-size: 200%;
		mask-size: 200%;
		-webkit-mask-position: left;
		mask-position: left;
	}

	.mask-half-2 {
		-webkit-mask-size: 200%;
		mask-size: 200%;
		-webkit-mask-position: right;
		mask-position: right;
	}

	[type='radio'] {
		font-family: inherit;
		font-size: 100%;
		line-height: inherit;
		color: inherit;
		margin: 0;
		padding: 0;
		border-radius: unset;
		background-size: unset;
		background-position: unset;
		background-repeat: unset;
		border-color: transparent;
	}

	@keyframes rating-pop {
		0% {
			transform: translateY(-0.125em);
		}

		40% {
			transform: translateY(-0.125em);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
