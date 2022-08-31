<script lang="ts">
	import { Svrollbar } from 'svrollbar';

	export let twMaxHeight = 'max-h-full';

	let viewport: Element;
	let contents: Element;
</script>

<div class="wrapper {twMaxHeight} bg-transparent">
	<div
		bind:this={viewport}
		class="viewport {twMaxHeight}{$$props.class ? ` ${$$props.class}` : ''}"
	>
		<div bind:this={contents} class="contents {twMaxHeight}">
			<slot />
		</div>
	</div>
	<Svrollbar {viewport} {contents} initiallyVisible />
</div>

<style>
	.wrapper {
		position: relative;
	}

	.viewport {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: scroll;
		box-sizing: border-box;

		/* hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.viewport::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}
</style>
