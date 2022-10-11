<script lang="ts">
	import { MEDIA_CONTEXT_ID } from './Media.svelte';
	import { useContext } from '../../utils/useContext';
	import Avatar from '../avatar';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let align: 'top' | 'center' | 'bottom' = 'top';
	export let src: string;
	export let alt = 'avatar';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	useContext({
		context_id: MEDIA_CONTEXT_ID,
		parent: 'Media',
		component: 'Media.Avatar'
	});

	let defaultClass = 'first:mr-4 last:ml-4 flex-shrink-0';
	$: if (align === 'center') {
		defaultClass = defaultClass + ' self-center';
	} else if (align === 'bottom') {
		defaultClass = defaultClass + ' self-end';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<Avatar {src} {alt} {size} />
</div>
