<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { BOTTOM_NAVIGATION_CONTEXT_ID } from './BottomNavigation.svelte';

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'BottomNavigationCreateItem'
	});
	useContext({
		context_id: BOTTOM_NAVIGATION_CONTEXT_ID,
		parent: 'BottomNavigation',
		component: 'BottomNavigationCreateItem'
	});

	import Button from '../button/Button.svelte';

	export let open = false;
</script>

<div class="relative h-full w-full">
	<Button
		on:click
		shape="circle"
		size="fab"
		icon="add"
		swap="close"
		swapped={open}
		class="absolute left-[50%] right-[50%] translate-y-[-50%] translate-x-[-50%] shadow-xl dark:shadow-black bg-primary hover:bg-primary-hover text-primary-content outline-none border-none transition-all duration-150"
		style={$$props.style}
	/>
</div>
