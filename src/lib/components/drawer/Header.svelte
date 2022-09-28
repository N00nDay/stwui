<script lang="ts">
	import { twMerge } from 'tailwind-merge';
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

	const defaultClass =
		'px-4 sm:px-6 py-4 shadow-md dark:shadow-black flex-shrink text-lg font-medium text-light-content dark:text-dark-content  transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass}>
	<div class="flex items-start justify-between">
		<h2>
			<slot />
		</h2>
		{#if handleClose}
			<div class="ml-3 flex h-7 items-center">
				<Button type="ghost" on:click={handleClose} shape="circle">
					<Button.Icon slot="icon" icon="close" />
				</Button>
			</div>
		{/if}
	</div>
</div>
