<script lang="ts">
	import { getContext } from 'svelte';
	import Button from '../button';
	import { DRAWER_CONTEXT_ID } from './Drawer.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: DRAWER_CONTEXT_ID,
		parent: 'Drawer',
		component: 'DrawerHeader'
	});
	const { handleClose }: { handleClose: () => void } = getContext(DRAWER_CONTEXT_ID);
</script>

<div class="px-4 sm:px-6 py-4 shadow-md dark:shadow-black flex-shrink">
	<div class="flex items-start justify-between">
		<h2
			class="text-lg font-medium text-light-content dark:text-dark-content  transition-all duration-150"
		>
			<slot />
		</h2>
		{#if handleClose}
			<div class="ml-3 flex h-7 items-center">
				<Button type="ghost" icon="close" on:click={handleClose} shape="circle" />
			</div>
		{/if}
	</div>
</div>
