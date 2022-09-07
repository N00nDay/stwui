<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface Tab {
		icon?: MaterialIcons;
		href: string;
		title: string;
	}
</script>

<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';

	export let tabs: Tab[] = [];
	export let currentTab: string;
	export let variant: 'default' | 'full-width' | 'bar' = 'default';
</script>

<div
	class="border-light-border dark:border-dark-border transition-all duration-150 overflow-hidden"
	class:rounded-md={variant === 'bar'}
	class:shadow-md={variant === 'bar'}
	class:dark:shadow-black={variant === 'bar'}
	class:border={variant === 'bar'}
	class:border-b={variant !== 'bar'}
>
	<nav
		class="-mb-px flex transition-all duration-150"
		class:space-x-8={variant === 'default'}
		class:justify-evently={variant === 'full-width' || variant === 'bar'}
		class:isolate={variant === 'bar'}
		class:divide-x={variant === 'bar'}
		class:divide-light-border={variant === 'bar'}
		class:dark:divide-dark-border={variant === 'bar'}
	>
		{#each tabs as tab}
			<a
				href={tab.href}
				class="group border-transparent group inline-flex items-center py-4 px-1 font-medium text-sm"
				class:text-primary={tab.title === currentTab}
				class:border-primary={tab.title === currentTab}
				class:text-light-secondary-content={tab.title !== currentTab}
				class:dark:text-dark-secondary-content={tab.title !== currentTab}
				class:hover:text-light-content={tab.title !== currentTab}
				class:dark:hover:text-dark-content={tab.title !== currentTab}
				class:hover:border-light-border-base={tab.title !== currentTab}
				class:dark:hover:border-dark-border-base={tab.title !== currentTab}
				class:w-full={variant === 'full-width' || variant === 'bar'}
				class:flex={variant === 'full-width' || variant === 'bar'}
				class:justify-center={variant === 'full-width' || variant === 'bar'}
				class:focus:z-10={variant === 'bar'}
				class:relative={variant === 'bar'}
				class:border-b-2={variant !== 'bar'}
			>
				{#if tab.icon}
					<span
						class="material-icons mr-2"
						class:text-primary={tab.title === currentTab}
						class:border-primary={tab.title === currentTab}
						class:text-light-secondary-content={tab.title !== currentTab}
						class:dark:text-dark-secondary-content={tab.title !== currentTab}
						class:group-hover:text-light-content={tab.title !== currentTab}
						class:dark:group-hover:text-dark-content={tab.title !== currentTab}
						class:group-hover:border-light-border-base={tab.title !== currentTab}
						class:dark:group-hover:border-dark-border-base={tab.title !== currentTab}
						>{tab.icon}</span
					>
				{/if}
				<span>{tab.title}</span>
				{#if variant === 'bar'}
					<span
						class="absolute inset-x-0 bottom-0 h-0.5"
						class:bg-primary={tab.title === currentTab}
						class:bg-transparent={tab.title !== currentTab}
					/>
					<HoverBackground />
				{/if}
			</a>
		{/each}
	</nav>
</div>

<!-- <div>
   <div class="hidden sm:block">
     <nav class="isolate flex " aria-label="Tabs">
       <a href="#" class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page">
         <span>My Account</span>
         <span aria-hidden="true" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
       </a>
 
       <a href="#" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
         <span>Company</span>
         <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
       </a>
 
       <a href="#" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
         <span>Team Members</span>
         <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
       </a>
 
       <a href="#" class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
         <span>Billing</span>
         <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
       </a>
     </nav>
   </div>
 </div> -->
