<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let data = '';
	export let viewBox = extractViewBox(data);
	export let size = '24px';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let stroke: string | undefined = undefined;
	export let fill = color;

	$: elements = data.replace(/<svg ([^>]*)>/, '').replace('</svg>', '');

	function extractViewBox(svg: string) {
		const regex = /viewBox="([\d\- ]+)"/;
		const res = regex.exec(svg);
		if (!res) return '0 0 24 24'; // default value
		return res[1];
	}

	const defaultClass =
		'relative cursor-pointer flex items-center justify-center h-12 w-12 bg-white bg-opacity-10 rounded-full transition-reveal scale-90 hover:scale-100 hover:bg-opacity-20 hover:active:scale-95 pointer-events-auto text-white';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, [
		'use',
		'class',
		'width',
		'height',
		'viewBox',
		'stroke',
		'fill',
		'data',
		'color',
		'size'
	])}
>
	<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox} {stroke} {fill}>
		{@html elements}
	</svg>
</span>
