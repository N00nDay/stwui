<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type TwSizes from '../../types/twSizes';
	import { twSizes } from '../../utils/twSizes';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let gutter: TwSizes | [TwSizes, TwSizes] = '0';
	export let justify: undefined | 'start' | 'center' | 'end' | 'between' | 'around' = 'start';
	export let align: 'start' | 'center' | 'end' = 'start';

	let margin: string, padding: string;
	if (gutter.constructor === Array) {
		const verticalGutter = twSizes[gutter[0]] / 2;
		const horizontalGutter = twSizes[gutter[1]] / 2;
		margin = `margin: -${verticalGutter}rem -${horizontalGutter}rem;`;
		padding = `padding: ${verticalGutter}rem ${horizontalGutter}rem;`;
	} else if (typeof gutter === 'string') {
		margin = `margin: -${twSizes[gutter] / 2}rem;`;
		padding = `padding: ${twSizes[gutter] / 2}rem;`;
	} else {
		margin = 'margin: 0;';
		padding = 'padding: 0;';
	}

	const defaultClass = 'relative mr-0 ml-0 block box-border';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('grid-padding', padding);
</script>

<div
	class={finalClass}
	class:flex={justify !== undefined}
	class:flex-row={justify !== undefined}
	class:flex-wrap={justify !== undefined}
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
	{...exclude($$props, ['use', 'class', 'style'])}
>
	<slot />
</div>
