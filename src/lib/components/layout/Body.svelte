<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { getContext } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	import { LAYOUT_CONTENT_CONTEXT_ID } from './Content.svelte';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'Layout.Content.Body'
	});

	useContext({
		context_id: LAYOUT_CONTENT_CONTEXT_ID,
		parent: 'Layout.Content',
		component: 'Layout.Content.Body'
	});

	const {
		collapsed,
		collapsedWidth,
		expandedWidth
	}: {
		collapsed: Writable<boolean>;
		collapsedWidth: Writable<string>;
		expandedWidth: Writable<string>;
	} = getContext(LAYOUT_CONTENT_CONTEXT_ID);

	let defaultClass = 'w-full h-full';
	if ($collapsed) {
		defaultClass += 'lg:pl-0';
	}
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
