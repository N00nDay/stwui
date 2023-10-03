<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass = 'button-loader stwui-button-loader';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<svg
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	viewBox="25 25 50 50"
	stroke-width="5"
>
	<circle class="background-circle" cx="50" cy="50" r="20" />
	<circle class="animated" cx="50" cy="50" r="20" />
</svg>

<style>
	.button-loader {
		/* margin-right: 0.5rem; */
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
		stroke: currentColor;
	}
	.animated {
		fill: none;
		stroke: currentColor;
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
