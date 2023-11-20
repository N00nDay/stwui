<script lang="ts">
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const iconSize: string = getContext('button-icon-size');

	export let data = '';
	export let viewBox = extractViewBox(data);
	export let size = iconSize;
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

	const defaultClass = 'stwui-button-icon';
	$: finalClass = [defaultClass, $$props.class].join(' ');
</script>

<svg
	class={finalClass}
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
		'fill',
		'viewBox',
		'width',
		'height',
		'stroke',
		'size',
		'color',
		'class'
	])}
>
	{#if $$slots.icon}
		<slot name="icon" />
	{:else if $$slots.leading}
		<slot name="leading" />
	{:else if $$slots.trailing}
		<slot name="trailing" />
	{:else}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html elements}
	{/if}
</svg>

<style>
	:global(.stwui-button-icon svg) {
		stroke: currentColor;
	}
</style>
