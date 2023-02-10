<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'rotate' | 'flip' = 'rotate';
	export let loading: false | true | undefined = undefined;
	export let swapped: false | true | undefined = undefined;

	const defaultClass = 'swap relative inset-0';
	const rotateClass = 'swap-rotate';
	const flipClass = 'swap-flip';

	$: finalClass = twMerge(
		defaultClass,

		type === 'rotate' ? rotateClass : false,
		type === 'flip' ? flipClass : false,

		$$props.class
	);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<input type="checkbox" class="invisible" checked={loading || swapped} disabled />
	<span class="swap-on absolute inset-0">
		<slot name="on" />
	</span>
	<span class="swap-off absolute inset-0 {loading || swapped ? 'isOn' : 'isOff'}">
		<slot name="off" />
	</span>
</div>

<style lang="postcss">
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
