<script lang="ts">
	import { scale } from 'svelte/transition';

	export let color: string;
</script>

<svg
	transition:scale|local
	class="button-loader{$$props.class ? ` ${$$props.class}` : ''}"
	viewBox="25 25 50 50"
	stroke-width="5"
>
	<circle class="background-circle" stroke={color} cx="50" cy="50" r="20" />
	<circle class="animated" stroke={color} cx="50" cy="50" r="20" />
</svg>

<style>
	.button-loader {
		margin-right: 0.5rem;
		border: none;
		outline: none;
		height: 18px;
		width: 18px;
		vertical-align: top;
		transform-origin: center;
		animation: stc-rotate-loader 2s linear infinite;
	}

	.button-loader.swap {
		margin-right: 0;
	}

	.background-circle {
		fill: none;
		opacity: 0.25;
	}
	.animated {
		fill: none;
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
