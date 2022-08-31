<script lang="ts">
	import { DRAWER_CONTEXT_ID } from './Drawer.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: DRAWER_CONTEXT_ID,
		parent: 'Drawer',
		component: 'DrawerFooter'
	});
</script>

<div
	class="px-4 sm:px-6 py-4 text-light-content dark:text-dark-content  transition-all duration-150 shadow-negative-md dark:shadow-black flex-shrink{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
>
	<slot />
</div>
