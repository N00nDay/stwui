<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let placeholder = true;

	const defaultClass = 'stwui-avatar-group';
	const xsClass = 'flex overflow-hidden p-0.5 -space-x-1';
	const smClass = 'flex overflow-hidden p-0.5 -space-x-2';
	const mdClass = 'flex overflow-hidden p-0.5 -space-x-2';
	const lgClass = 'flex overflow-hidden p-0.5 -space-x-3';
	const xlClass = 'flex overflow-hidden p-0.5 -space-x-3';

	$: finalClass = twMerge(
		defaultClass,

		size === 'xs' ? xsClass : false,
		size === 'sm' ? smClass : false,
		size === 'md' ? mdClass : false,
		size === 'lg' ? lgClass : false,
		size === 'xl' ? xlClass : false,

		$$props.class
	);

	setContext('avatar-group-shape', shape);
	setContext('avatar-group-size', size);
	setContext('avatar-group-placeholder', placeholder);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
