<script lang="ts">
	import { getContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let placement: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' = 'top-right';

	const shape: 'circle' | 'rounded' | 'square' = getContext('avatar-shape');
	const size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = getContext('avatar-size');

	// TODO: add status prop to change color

	const defaultClass = 'absolute block rounded-full ring-2 ring-surface bg-primary';
	const topRightClass = 'top-0 right-0';
	const topLeftClass = 'top-0 left-0';
	const bottomLeftClass = 'bottom-0 left-0';
	const bottomRightClass = 'bottom-0 right-0';
	const notCircleClass = 'transform';
	const notCircleTopRightClass = '-translate-y-1/2 translate-x-1/2';
	const notCircleTopLeftClass = '-translate-y-1/2 -translate-x-1/2';
	const notCircleBottomRightClass = 'translate-y-1/2 translate-x-1/2';
	const notCircleBottomLeftClass = 'translate-y-1/2 -translate-x-1/2';
	const xsClass = 'h-1.5 w-1.5';
	const smClass = 'h-2 w-2';
	const mdClass = 'h-2.5 w-2.5';
	const lgClass = 'h-3 w-3';
	const xlClass = 'h-3.5 w-3.5';

	$: finalClass = twMerge(
		defaultClass,

		placement === 'top-right' ? topRightClass : false,
		placement === 'top-left' ? topLeftClass : false,
		placement === 'bottom-right' ? bottomRightClass : false,
		placement === 'bottom-left' ? bottomLeftClass : false,

		shape !== 'circle' ? notCircleClass : false,
		shape !== 'circle' && placement === 'top-left' ? notCircleTopLeftClass : false,
		shape !== 'circle' && placement === 'top-right' ? notCircleTopRightClass : false,
		shape !== 'circle' && placement === 'bottom-left' ? notCircleBottomLeftClass : false,
		shape !== 'circle' && placement === 'bottom-right' ? notCircleBottomRightClass : false,

		size === 'xs' ? xsClass : false,
		size === 'sm' ? smClass : false,
		size === 'md' ? mdClass : false,
		size === 'lg' ? lgClass : false,
		size === 'xl' ? xlClass : false,

		$$props.class
	);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
/>
