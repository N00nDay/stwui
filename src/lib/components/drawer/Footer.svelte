<script lang="ts">
	import { DRAWER_CONTEXT_ID } from './Drawer.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: DRAWER_CONTEXT_ID,
		parent: 'Drawer',
		component: 'DrawerFooter'
	});

	const defaultClass =
		'px-4 sm:px-6 py-4 text-light-content dark:text-dark-content  transition-all duration-150 shadow-negative-md dark:shadow-black flex-shrink';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
