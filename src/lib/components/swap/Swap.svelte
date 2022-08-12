<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '@utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '@utils/useActions';
	import { exclude } from '@utils/exclude';
	const forwardEvents = forwardEventsBuilder(current_component);
	export let use: ActionArray = [];

	export let type: 'rotate' | 'flip' = 'rotate';
	export let loading: false | true | undefined = undefined;
	export let swapped: false | true | undefined = undefined;

	$: isChecked = loading ? loading : swapped ? swapped : false;
</script>

<div
	class="swap relative inset-0 {$$props.class ? ` ${$$props.class}` : ''}"
	class:swap-rotate={type === 'rotate'}
	class:swap-flip={type === 'flip'}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<input type="checkbox" class="invisible" checked={isChecked} disabled />
	<span class="swap-on absolute inset-0">
		<slot name="icon1" />
	</span>
	<span class="swap-off absolute inset-0">
		<slot name="icon2" />
	</span>
</div>

<style>
	.swap {
		@apply cursor-pointer;
	}

	.swap > * {
		@apply origin-center;
		@apply duration-300 ease-in-out;
		transition-property: transform, opacity;
	}

	.swap-rotate .swap-on {
		@apply rotate-0;
		@apply flex;
		@apply justify-center;
		@apply items-center;
	}

	.swap-rotate .swap-off {
		@apply -rotate-45;
		@apply opacity-0;
		@apply flex;
		@apply justify-center;
		@apply items-center;
	}

	.swap-rotate input:checked ~ .swap-off {
		@apply -rotate-45;
		@apply rotate-0;
		@apply opacity-100;
	}

	.swap-rotate input:checked ~ .swap-on {
		@apply opacity-0;
		@apply rotate-45;
	}

	.swap-flip {
		@apply origin-center;
		transform-style: preserve-3d;
		perspective: 16em;
	}

	.swap-flip .swap-on {
		transform: rotateY(0deg);
		backface-visibility: hidden;
		@apply opacity-100;
		@apply flex;
		@apply justify-center;
		@apply items-center;
	}

	.swap-flip .swap-off {
		transform: rotateY(-180deg);
		backface-visibility: hidden;
		@apply opacity-0;
		@apply flex;
		@apply justify-center;
		@apply items-center;
	}

	.swap-flip input:checked ~ .swap-off {
		transform: rotateY(0deg);
		@apply opacity-100;
	}

	.swap-flip input:checked ~ .swap-on {
		transform: rotateY(180deg);
		@apply opacity-0;
	}
</style>
