<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import Scrollbar from '../scrollbar/Scrollbar.svelte';
	import { twMerge } from 'tailwind-merge';

	export let sidebarWidth: number;

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'Layout.Sidebar'
	});

	const defaultClass =
		'hidden h-full overflow-x-hidden overflow-y-auto lg:flex lg:flex-shrink-0 relative';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<div class="flex flex-col transition-all duration-150" style="width: {sidebarWidth}px;">
		<div class="flex-1 flex flex-col min-h-0 transition-all duration-150">
			<Scrollbar id="sidebar" class="flex-1 flex flex-col pt-3 pb-4 px-2">
				<slot />
			</Scrollbar>
		</div>
	</div>
</div>
