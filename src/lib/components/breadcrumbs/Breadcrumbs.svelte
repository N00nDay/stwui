<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface ICrumb {
		label?: string;
		icon?: MaterialIcons;
		href: string;
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let crumbs: ICrumb[] = [];
	export let type: 'solid' | 'ghost' = 'ghost';

	const defaultClass = 'flex items-center space-x-4 transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol
		class={finalClass}
		class:border={type === 'solid'}
		class:light-border={type === 'solid'}
		class:dark:dark-border={type === 'solid'}
		class:bg-light-surface={type === 'solid'}
		class:dark:bg-dark-surface={type === 'solid'}
		class:dark:shadow-black={type === 'solid'}
		class:shadow={type === 'solid'}
		class:rounded-md={type === 'solid'}
		class:px-6={type === 'solid'}
	>
		{#each crumbs as crumb, i}
			<li>
				<div
					class="flex items-center text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
				>
					{#if i !== 0}
						{#if type === 'ghost'}
							<svg
								class="flex-shrink-0 h-5 w-5 opacity-30"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
						{:else if type === 'solid'}
							<svg
								class="flex-shrink-0 w-6 h-full opacity-30"
								viewBox="0 0 24 44"
								preserveAspectRatio="none"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
							</svg>
						{/if}
					{/if}
					<a href={crumb.href} class="flex items-center">
						{#if crumb.icon}
							<span class="material-icons hover:text-primary transition-all duration-150"
								>{crumb.icon}</span
							>
						{/if}
						{#if crumb.label}
							<span class="ml-4 text-sm font-medium hover:text-primary transition-all duration-150"
								>{crumb.label}</span
							>
						{/if}
					</a>
				</div>
			</li>
		{/each}
	</ol>
</nav>
