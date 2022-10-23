<script lang="ts">
	import { setContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	setContext('avatar-group-shape', shape);
	setContext('avatar-group-size', size);

	let defaultClass = '';
	if (size === 'xs') {
		defaultClass = 'flex overflow-hidden p-0.5 -space-x-1';
	} else if (size === 'sm' || size === 'md') {
		defaultClass = 'flex overflow-hidden p-0.5 -space-x-2';
	} else if (size === 'lg' || size === 'xl') {
		defaultClass = 'flex overflow-hidden p-0.5 -space-x-3';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
