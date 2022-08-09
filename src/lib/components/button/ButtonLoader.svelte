<script lang="ts">
	import { scale } from 'svelte/transition';

	export let loaderColor: string;
</script>

<svg transition:scale class="button-loader mr-2" viewBox="25 25 50 50" stroke-width="5">
	<circle class="filled" stroke={loaderColor} cx="50" cy="50" r="20" />
	<circle class="animated" stroke={loaderColor} cx="50" cy="50" r="20" />
</svg>

<style>
	.button-loader {
	border: none;
	outline: none;
	height: 18px;
	width: 18px;
	vertical-align: middle;
	transform-origin: center;
	animation: rotate-loader 2s linear infinite;
}

.button-loader circle.filled {
	fill: none;
	/* stroke: white; */
	opacity: 0.25;
}

.button-loader circle.animated {
	fill: none;
	/* stroke: white; */
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	stroke-linecap: round;
	animation: stretch calc(2s * 0.75) ease-in-out infinite;
}

@keyframes rotate-loader {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes stretch {
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