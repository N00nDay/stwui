<script lang="ts">
	import { scale } from 'svelte/transition';

	export let loaderColor: string;
</script>

<svg
	transition:scale|local
	class="stc-button-loader mr-2 border-none outline-none h-[18px] w-[18px] align-top origin-center"
	viewBox="25 25 50 50"
	stroke-width="5"
>
	<circle class="fill-transparent opacity-25" stroke={loaderColor} cx="50" cy="50" r="20" />
	<circle class="fill-transparent stc-animated" stroke={loaderColor} cx="50" cy="50" r="20" />
</svg>

<style>
	.stc-animated {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
		stroke-linecap: round;
		animation: stc-stretch calc(2s * 0.75) ease-in-out infinite;
	}

	@keyframes stc-rotate-loader {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes stc-stretch {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 200;
			stroke-dashoffset: -35px;
		}
		100% {
			stroke-dashoffset: -124px;
		}
	}
</style>
