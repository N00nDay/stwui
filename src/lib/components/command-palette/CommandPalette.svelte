<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface SearchResult {
		icon: MaterialIcons;
		title: string;
		description: string;
	}
</script>

<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { Button } from '../button';
	export let handleClose: () => void;

	export let onChange: undefined | ((e: Event) => void) = undefined;
	export let title: string | undefined = undefined;
	export let results: SearchResult[] = [];

	function captureEscapeEvent(e: KeyboardEvent) {
		if (e.key === 'Escape' && e.code === 'Escape' && !e.shiftKey) {
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div class="relative z-10 pointer-events-none" role="dialog" aria-modal="true" transition:fade>
	<div
		class="fixed inset-0 bg-dark-background dark:bg-light-background bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm transition-all duration-150 pointer-events-auto"
		transition:fade
		on:click={handleClose}
	/>

	<div
		class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
		in:scale={{ start: 0.9, duration: 250, delay: 150 }}
		out:scale={{ start: 0.95, duration: 150 }}
	>
		<!-- TODO: divide-y align with .light-border and .dark-border -->
		<div
			class="mx-auto max-w-xl transform divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-md bg-light-surface dark:bg-dark-surface shadow-2xl dark:shadow-black transition-all duration-150 pointer-events-auto"
		>
			{#if onChange}
				<div class="relative">
					<span
						class="material-icons pointer-events-none absolute top-3.5 left-4 h-4 w-4 text-gray-400"
						>search</span
					>
					<input
						type="search"
						class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:ring-0 sm:text-sm"
						placeholder="Search..."
						role="combobox"
						aria-expanded="false"
						aria-controls="options"
						autocomplete="off"
						on:input={onChange}
						autofocus
					/>
				</div>
			{:else if title}
				<div class="first:rounded-t-lg last:rounded-b-md px-4 py-5 sm:px-6 flex flex-row relative">
					<div class="flex-grow">{title}</div>
					<div class="flex-shrink">
						<Button
							shape="circle"
							icon="close"
							class="mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none absolute right-3 top-3"
						/>
					</div>
				</div>
			{/if}

			<!-- Results, show/hide based on command palette state -->
			{#if results.length > 0}
				<ul class="max-h-96 scroll-py-3 overflow-y-auto p-3" id="options" role="listbox">
					<!-- Active: "bg-gray-100" -->
					{#each results as result}
						<li
							class="group outline-none focus:outline-none flex cursor-pointer select-none rounded-md p-3 hover:bg-light-icon-background-hover dark:hover:bg-dark-icon-background-hover duration-150 transition-all"
							id="option-1"
							role="option"
							tabindex="-1"
						>
							<div
								class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary"
							>
								<span class="material-icons h-6 w-6 text-white">{result.icon}</span>
							</div>
							<div class="ml-4 flex-auto">
								<!-- Active: "text-gray-900", Not Active: "text-gray-700" -->
								<p
									class="text-sm font-medium text-light-content dark:text-dark-content duration-150 transition-all"
								>
									{result.title}
								</p>
								<!-- Active: "text-gray-700", Not Active: "text-gray-500" -->
								<p
									class="text-sm text-light-secondary-content dark:text-dark-secondary-content duration-150 transition-all"
								>
									{result.description}
								</p>
							</div>
						</li>
					{/each}
				</ul>
			{/if}

			<!-- Empty state, show/hide based on command palette state -->
			{#if results.length === 0}
				<div class="py-14 px-6 text-center text-sm sm:px-14">
					<svg
						class="mx-auto h-6 w-6 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p class="mt-4 font-semibold text-gray-900">No results found</p>
					<p class="mt-2 text-gray-500">
						No components found for this search term. Please try again.
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
