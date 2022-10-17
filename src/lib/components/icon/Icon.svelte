<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { MaterialIcon } from '../../types';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let path: string;
	export let viewBox = '0 0 24 24';
	export let fill = 'currentColor';

	const defaultClass = 'h-6 w-6';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<!-- TODO: add documentation -->

<svg
	class={finalClass}
	{viewBox}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'path'])}><path {fill} d={path} /></svg
>
