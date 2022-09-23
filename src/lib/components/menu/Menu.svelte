<script lang="ts" context="module">
	export const MENU_CONTEXT_ID = 'menu-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	export let showActiveByURL = true;
	export let collapsed = false;

	let menuCollapse = writable(collapsed);

	$: menuCollapse.set(collapsed);

	setContext(MENU_CONTEXT_ID, {
		menu: true,
		menuCollapse,
		showActiveByURL
	});
</script>

<nav class="space-y-1 transition-all duration-300" style="width: {collapsed ? '3rem' : '100%'}">
	<slot />
</nav>
