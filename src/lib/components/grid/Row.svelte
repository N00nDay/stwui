<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export const ROW_CONTEXT_ID = 'row-context-id';

	export function useRowContext(component: string) {
		let context = getContext(ROW_CONTEXT_ID);
		if (context === undefined) {
			console.warn(`<${component} /> is missing a parent <Row /> component.`);
		}
		return context;
	}
</script>

<script lang="ts">
	import type TwSizes from '../../types/twSizes';
	import { twSizes } from '../../utils/twSizes';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let gutter: TwSizes | [TwSizes, TwSizes] = '0';
	export let justify: undefined | 'start' | 'center' | 'end' | 'between' | 'around' = 'start';
	export let align: 'start' | 'center' | 'end' = 'start';

	let margin: string, padding: string;
	if (gutter.constructor === Array) {
		const verticalGutter = twSizes[gutter[0]] / 2;
		const horizontalGutter = twSizes[gutter[1]] / 2;
		margin = `margin: -${verticalGutter}px -${horizontalGutter}rem;`;
		padding = `padding: ${verticalGutter}px ${horizontalGutter}rem;`;
	} else if (typeof gutter === 'string') {
		margin = `margin: -${twSizes[gutter] / 2}rem;`;
		padding = `padding: ${twSizes[gutter] / 2}rem;`;
	} else {
		margin = 'margin: 0;';
		padding = 'padding: 0;';
	}

	setContext(ROW_CONTEXT_ID, {
		padding
	});
</script>

<div
	class="relative mr-0 ml-0 block box-border before:table before:content-[''] after:table after:content-[''] after:clear-both{$$props.class
		? ` ${$$props.class}`
		: ''}"
	class:flex={justify !== undefined}
	class:flex-row={justify !== undefined}
	class:flex-wrap={justify !== undefined}
	class:before:flex={justify !== undefined}
	class:after:flex={justify !== undefined}
	class:justify-start={justify === 'start'}
	class:justify-center={justify === 'center'}
	class:justify-end={justify === 'end'}
	class:justify-between={justify === 'between'}
	class:justify-around={justify === 'around'}
	class:items-start={align === 'start'}
	class:items-center={align === 'center'}
	class:items-end={align === 'end'}
	style="{$$props.style ? `${$$props.style} ` : ''}{margin}"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
