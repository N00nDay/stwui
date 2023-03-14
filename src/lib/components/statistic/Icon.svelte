<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let data = '';
	export let viewBox = extractViewBox(data);
	export let size = '38px';
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

	const defaultClass = 'text-content absolute -top-3 -right-2';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, [
		'use',
		'class',
		'data',
		'size',
		'width',
		'height',
		'color',
		'stroke',
		'fill',
		'viewBox'
	])}
>
	<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox} {stroke} {fill}>
		{@html elements}
	</svg>
</dd>
