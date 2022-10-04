<script lang="ts">
	import { DRAWER_CONTEXT_ID } from './Drawer.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: DRAWER_CONTEXT_ID,
		parent: 'Drawer',
		component: 'DrawerFooter'
	});

	const defaultClass = 'relative flex-grow text-light-content dark:text-dark-content p-4';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
