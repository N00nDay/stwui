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
	class="relative flex-grow text-light-content dark:text-dark-content transition-all duration-150 p-4{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
>
	<slot />
</div>
