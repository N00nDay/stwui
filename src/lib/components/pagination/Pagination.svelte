<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import { page } from '$app/stores';
	import { encodeSearchParams } from '../../utils/encodeSearchParams';

	export let start: number;
	export let end: number;
	export let total: number;
	export let scrollElement: string | undefined = undefined;

	$: orderBy = $page.url.searchParams.get('orderBy');
	$: order = $page.url.searchParams.get('order');
	$: currentPage = parseInt($page.url.searchParams.get('page') || '1');

	function pageRange(cp: number, tp: number): (number | string)[] {
		if (tp <= 6) {
			return Array.from({ length: tp }, (_, i) => i + 1);
		}

		if (cp === 1 || cp === 2 || cp === 3 || cp === 4) {
			return [1, 2, 3, 4, 5, '...', lastPage];
		}

		if (cp === lastPage || cp === lastPage - 1 || cp === lastPage - 2 || cp === lastPage - 3) {
			return [1, '...', ...pages.slice(lastPage - 5, lastPage)];
		}

		return [1, '...', ...pages.slice(cp - 3, cp + 2), '...', lastPage];
	}

	let size = 25;

	const totalPages = Math.ceil(total / size);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	const lastPage = pages.slice(-1)[0];

	$: pagination = pageRange(currentPage, totalPages);

	$: previousRoute =
		`${$page.url.pathname}` +
		encodeSearchParams({
			orderBy,
			order,
			page: currentPage - 1
		});

	$: nextRoute =
		`${$page.url.pathname}` +
		encodeSearchParams({
			orderBy,
			order,
			page: currentPage + 1
		});

	function scrollToTop() {
		if (scrollElement) {
			const el = document.getElementById(scrollElement);
			if (el) {
				el.scrollTop = 0;
			}
		}
	}
</script>

<div class="flex items-center justify-between px-4 py-3 sm:px-6">
	<div class="flex flex-1 justify-between md:hidden">
		<a
			on:click={scrollToTop}
			href={previousRoute}
			disabled={currentPage === 1}
			class="relative group shadow-sm dark:shadow-black overflow-hidden inline-flex items-center rounded-md border border-light-border-base dark:border-dark-border-base bg-light-surface dark:bg-dark-surface px-4 py-2 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content"
			class:pointer-events-none={currentPage === 1}
			>Previous
			<HoverBackground />
		</a>
		<a
			on:click={scrollToTop}
			href={nextRoute}
			disabled={end === total}
			class="relative group shadow-sm dark:shadow-black overflow-hidden inline-flex items-center rounded-md border border-light-border-base dark:border-dark-border-base bg-light-surface dark:bg-dark-surface px-4 py-2 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content"
			class:pointer-events-none={end === total}
			>Next
			<HoverBackground /></a
		>
	</div>
	<div class="hidden md:flex sm:flex-1 sm:items-center sm:justify-between">
		<div>
			<p class="text-sm text-light-secondary-content dark:text-dark-secondary-content">
				Showing
				<span class="font-medium">{start}</span>
				to
				<span class="font-medium">{end}</span>
				of
				<span class="font-medium">{total}</span>
				results
			</p>
		</div>
		<div>
			<nav class="isolate inline-flex -space-x-px rounded-md shadow-md dark:shadow-black">
				<a
					on:click={scrollToTop}
					href={previousRoute}
					disabled={currentPage === 1}
					class="relative overflow-hidden group inline-flex items-center rounded-l-md border border-light-border-base dark:border-dark-border-base bg-light-surface dark:bg-dark-surface px-2 py-2 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content focus:z-20"
					class:pointer-events-none={currentPage === 1}
				>
					<span class="sr-only">Previous</span>
					<span class="material-icons"> chevron_left </span>
					<HoverBackground />
				</a>
				<!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
				{#each pagination as pageNumber}
					{#if typeof pageNumber === 'string'}
						<span
							class="relative inline-flex items-center border border-light-border-base dark:border-dark-border-base bg-light-surface dark:bg-dark-surface px-4 py-2 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content"
						>
							...
						</span>
					{:else}
						<a
							data-sveltekit-prefetch
							on:click={scrollToTop}
							href={`${$page.url.pathname}?orderBy=${orderBy}&order=${order}&page=${pageNumber}`}
							class="relative group overflow-hidden z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
							class:bg-primary={pageNumber === currentPage}
							class:border-primary={pageNumber === currentPage}
							class:text-primary-content={pageNumber === currentPage}
							class:z-20={pageNumber === currentPage}
							class:bg-light-surface={pageNumber !== currentPage}
							class:dark:bg-dark-surface={pageNumber !== currentPage}
							class:text-light-secondary-content={pageNumber !== currentPage}
							class:dark:text-dark-secondary-content={pageNumber !== currentPage}
							class:border-light-border-base={pageNumber !== currentPage}
							class:dark:border-dark-border-base={pageNumber !== currentPage}
						>
							{pageNumber}
							<HoverBackground />
						</a>
					{/if}
				{/each}
				<a
					on:click={scrollToTop}
					href={nextRoute}
					disabled={end === total}
					class="relative group overflow-hidden inline-flex items-center rounded-r-md border border-light-border-base dark:border-dark-border-base bg-light-surface dark:bg-dark-surface px-2 py-2 text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content focus:z-20"
					class:pointer-events-none={end === total}
				>
					<span class="sr-only">Next</span>
					<span class="material-icons"> chevron_right </span>
					<HoverBackground />
				</a>
			</nav>
		</div>
	</div>
</div>
