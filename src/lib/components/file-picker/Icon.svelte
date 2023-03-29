<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext, get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let data = '';
	export let viewBox = extractViewBox(data);
	export let size = '48px';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let stroke: string | undefined = undefined;
	export let fill = color;

	let disabled: boolean = getContext('filepicker-disabled');

	$: elements = data.replace(/<svg ([^>]*)>/, '').replace('</svg>', '');

	function extractViewBox(svg: string) {
		const regex = /viewBox="([\d\- ]+)"/;
		const res = regex.exec(svg);
		if (!res) return '0 0 24 24'; // default value
		return res[1];
	}

	const defaultClass = ' flex items-center justify-center';
	$: finalClass = twMerge(
		defaultClass,
		disabled ? 'text-secondary-content opacity-30' : 'text-content',
		$$props.class
	);
</script>

<span class={finalClass} style={$$props.style}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		{width}
		{height}
		{viewBox}
		{stroke}
		{fill}
		{color}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, [
			'use',
			'data',
			'class',
			'style',
			'fill',
			'viewBox',
			'width',
			'height',
			'stroke'
		])}
	>
		{@html elements}
	</svg>
</span>
