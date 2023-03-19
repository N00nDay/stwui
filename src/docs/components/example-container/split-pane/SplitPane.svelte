<script>
	import { createEventDispatcher } from 'svelte';
	import { constrain } from './utils.js';
	const dispatch = createEventDispatcher();
	/** @type {string | undefined} */
	export let id = undefined;
	/** @type {'horizontal' | 'vertical'} */
	export let type;
	/** @type {import('./types').Length} */
	export let pos = '50%';
	/** @type {import('./types').Length} */
	export let min = '0%';
	/** @type {import('./types').Length} */
	export let max = '100%';
	export let disabled = false;
	/** @type {'min' | 'max'}*/
	export let priority = 'min';
	/** @type {HTMLElement} */
	let container;
	let dragging = false;
	let w = 0;
	let h = 0;
	$: position = pos;
	// constrain position
	$: if (container) {
		const size = type === 'horizontal' ? w : h;
		position = constrain(size, min, max, position, priority);
	}
	/**
	 * @param {number} x
	 * @param {number} y
	 */
	function update(x, y) {
		if (disabled) return;
		const { top, left } = container.getBoundingClientRect();
		const pos_px = type === 'horizontal' ? x - left : y - top;
		const size = type === 'horizontal' ? w : h;
		position = pos.endsWith('%') ? `${(100 * pos_px) / size}%` : `${pos_px}px`;
		dispatch('change');
	}
	/**
	 * @param {HTMLElement} node
	 * @param {(event: MouseEvent) => void} callback
	 */
	function drag(node, callback) {
		/** @param {MouseEvent} event */
		const mousedown = (event) => {
			if (event.button !== 0) return;
			event.preventDefault();
			dragging = true;
			const onmouseup = () => {
				dragging = false;
				window.removeEventListener('mousemove', callback, false);
				window.removeEventListener('mouseup', onmouseup, false);
			};
			window.addEventListener('mousemove', callback, false);
			window.addEventListener('mouseup', onmouseup, false);
		};
		node.addEventListener('mousedown', mousedown, false);
		return {
			destroy() {
				node.removeEventListener('mousedown', mousedown, false);
			}
		};
	}
	/**
	 * @param {HTMLElement} node
	 * @param {(event: TouchEvent) => void} callback
	 */
	function touchDrag(node, callback) {
		/** @param {TouchEvent} event */
		const touchdown = (event) => {
			if (event.targetTouches.length > 1) return;
			event.preventDefault();
			dragging = true;
			const ontouchend = () => {
				dragging = false;
				window.removeEventListener('touchmove', callback, false);
				window.removeEventListener('touchend', ontouchend, false);
			};
			window.addEventListener('touchmove', callback, false);
			window.addEventListener('touchend', ontouchend, false);
		};
		node.addEventListener('touchstart', touchdown, {
			capture: true,
			passive: false
		});
		return {
			destroy() {
				// @ts-expect-error TypeScript doesn't understand modern DOM event options, apparently
				node.removeEventListener('touchstart', touchdown, {
					capture: true,
					passive: false
				});
			}
		};
	}
</script>

<div
	data-pane={id}
	class="container {type}"
	bind:this={container}
	bind:clientWidth={w}
	bind:clientHeight={h}
	style="--pos: {position}"
>
	<div class="pane">
		<slot name="a" />
	</div>

	<div class="pane">
		<slot name="b" />
	</div>

	{#if pos !== '0%' && pos !== '100%'}
		<div
			class="{type} divider"
			class:disabled
			use:drag={(e) => update(e.clientX, e.clientY)}
			use:touchDrag={(e) => update(e.touches[0].clientX, e.touches[0].clientY)}
		/>
	{/if}
</div>

{#if dragging}
	<div class="mousecatcher" />
{/if}

<style>
	.container {
		--sp-thickness: var(--thickness, 8px);
		--sp-color: var(--color, transparent);
		display: grid;
		position: relative;
		width: 100%;
		height: 100%;
	}
	.container.vertical {
		grid-template-rows: var(--pos) 1fr;
	}
	.container.horizontal {
		grid-template-columns: var(--pos) 1fr;
	}
	.pane {
		width: 100%;
		height: 100%;
		/* overflow: auto; */
	}
	.pane > :global(*) {
		width: 100%;
		height: 100%;
		/* overflow: hidden; */
		overflow: visible;
	}
	.mousecatcher {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.0001);
	}
	.divider {
		position: absolute;
		z-index: 10;
	}
	.divider::after {
		content: '';
		position: absolute;
		background-color: var(--sp-color);
	}
	.horizontal > .divider {
		padding: 0 calc(0.5 * var(--sp-thickness));
		width: 0;
		height: 100%;
		cursor: ew-resize;
		left: var(--pos);
		transform: translate(calc(-0.5 * var(--sp-thickness)), 0);
	}
	.horizontal > .divider.disabled {
		cursor: default;
	}
	.horizontal > .divider::after {
		left: 50%;
		top: 0;
		width: 1px;
		height: 100%;
	}
	.vertical > .divider {
		padding: calc(0.5 * var(--sp-thickness)) 0;
		width: 100%;
		height: 0;
		cursor: ns-resize;
		top: var(--pos);
		transform: translate(0, calc(-0.5 * var(--sp-thickness)));
	}
	.vertical > .divider.disabled {
		cursor: default;
	}
	.vertical > .divider::after {
		top: 50%;
		left: 0;
		width: 100%;
		height: 1px;
	}
</style>
