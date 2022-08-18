<script lang="ts" context="module">
	export const LAYOUT_CONTEXT_ID = 'layout-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let sideBarWidth = writable('212');

	function toggleSidebarWidth() {
		if ($sideBarWidth === '212') {
			$sideBarWidth = '72';
		} else {
			$sideBarWidth = '212';
		}
	}

	setContext(LAYOUT_CONTEXT_ID, {
		layout: true,
		sideBarWidth,
		toggleSidebarWidth
	});
</script>

<div class="h-full flex flex-col{$$props.class ? ` ${$$props.class}` : ''}" style={$$props.style}>
	<slot />
</div>
