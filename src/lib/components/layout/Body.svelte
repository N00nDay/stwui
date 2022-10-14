<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { getContext } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import { LAYOUT_CONTENT_CONTEXT_ID } from './Content.svelte';

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
		collapsed
	}: {
		collapsed: Writable<boolean>;
	} = getContext(LAYOUT_CONTENT_CONTEXT_ID);

	let defaultClass = 'w-full h-full';
	if ($collapsed) {
		defaultClass = 'w-full h-full lg:pl-0';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
