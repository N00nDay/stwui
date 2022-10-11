<script lang="ts" context="module">
	export const MENU_CONTEXT_ID = 'menu-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let collapsed = false;
	export let collapsedWidth = 'w-12';
	export let active = '';

	let menuCollapse = writable(collapsed);
	$: menuCollapse.set(collapsed);

	let activeItem = writable(active);
	$: activeItem.set(active);

	setContext(MENU_CONTEXT_ID, {
		menu: true,
		menuCollapse,
		collapsedWidth,
		activeItem
	});

	let defaultClass = 'space-y-1 transition-all duration-300';
	$: if ($menuCollapse) {
		defaultClass = defaultClass + ' ' + collapsedWidth;
	} else {
		defaultClass = defaultClass + ' w-full';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<nav class={finalClass} style={$$props.style}>
	<slot />
</nav>
