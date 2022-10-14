<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { twMerge } from 'tailwind-merge';
	import { LAYOUT_CONTENT_CONTEXT_ID } from './Content.svelte';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'Layout.Content.Sidebar'
	});

	useContext({
		context_id: LAYOUT_CONTENT_CONTEXT_ID,
		parent: 'Layout.Content',
		component: 'Layout.Content.Sidebar'
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

	const defaultClass = 'hidden h-full lg:flex lg:flex-shrink-0 relative';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<div
		class="h-full flex flex-col transition-size duration-300"
		style="width: {$collapsed ? $collapsedWidth : $expandedWidth}"
	>
		<div
			class="h-full flex-1 flex flex-col min-h-0 pt-3 pb-4 pl-2 pr-2 max-h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden"
		>
			<slot />
		</div>
	</div>
</div>
