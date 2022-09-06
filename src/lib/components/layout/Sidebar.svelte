<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	interface Items {
		icon?: MaterialIcons;
		title: string;
		href?: string;
		handleClick?: () => void;
	}
</script>

<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { Svrollbar } from 'svrollbar';
	import Scrollbar from '../scrollbar/Scrollbar.svelte';

	export let items: Items[] = [];
	export let sidebarWidth: number;

	let active = false;

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'LayoutSidebar'
	});
</script>

<div
	class="hidden h-full overflow-x-hidden overflow-y-auto lg:flex lg:flex-shrink-0 relative{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
>
	<div class="flex flex-col transition-all duration-150" style="width: {sidebarWidth}px;">
		<div class="flex-1 flex flex-col min-h-0 transition-all duration-150">
			<Scrollbar id="sidebar" class="flex-1 flex flex-col pt-3 pb-4">
				<nav class="flex-1">
					<div class="px-3 space-y-1">
						{#each items as item}
							{#if item.href}
								<a
									href={item.href}
									class="group relative text-base text-light-secondary-content dark:text-dark-secondary-content hover:text-light-content dark:hover:text-dark-content w-full mb-2 group flex items-center px-3 py-2 font-medium rounded-md overflow-hidden transition-all duration-150 active:hover:animate-none active:hover:scale-95 border-none outline-none"
									class:bg-light-icon-background-hover={active}
									class:dark:bg-dark-icon-background-hover={active}
									class:text-light-content={active}
									class:dark:text-dark-content={active}
								>
									{#if item.icon}
										<span class="material-icons h-6 w-6 min-h-6 min-w-6 mr-3">
											{item.icon}
										</span>
									{/if}
									{item.title}
									<HoverBackground class="rounded-md" />
								</a>
							{:else}
								<button
									on:click={item.handleClick}
									class="group relative text-base text-light-secondary-content dark:text-dark-secondary-content hover:text-light-content dark:hover:text-dark-content w-full mb-2 group flex items-center px-3 py-2 font-medium rounded-md overflow-hidden transition-all duration-150 active:hover:animate-none active:hover:scale-95 border-none outline-none"
									class:bg-light-icon-background-hover={active}
									class:dark:bg-dark-icon-background-hover={active}
									class:text-light-content={active}
									class:dark:text-dark-content={active}
								>
									{#if item.icon}
										<span class="material-icons h-6 w-6 min-h-6 min-w-6 mr-3">
											{item.icon}
										</span>
									{/if}
									{item.title}
									<HoverBackground class="rounded-md" />
								</button>
							{/if}
						{/each}
					</div>
				</nav>
			</Scrollbar>
		</div>
	</div>
</div>
