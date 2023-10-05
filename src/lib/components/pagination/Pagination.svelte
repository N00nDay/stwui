<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';
	import Icon from '../icon/Icon.svelte';
	import { chevron_left, chevron_right } from '../../icons';

	export let start: number;
	export let end: number;
	export let currentPage: number;
	export let total: number;
	export let onPreviousClick: () => void;
	export let onNextClick: () => void;
	export let onPageClick: (page: number) => void;
	export let pageSize = 25;

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

	const totalPages = Math.ceil(total / pageSize);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	const lastPage = pages.slice(-1)[0];

	$: pagination = pageRange(currentPage, totalPages);
</script>

<div class="flex items-center justify-between px-4 py-3 sm:px-6 stwui-pagination">
	<div class="flex flex-1 justify-between md:hidden">
		<button
			type="button"
			on:click={onPreviousClick}
			disabled={currentPage === 1}
			class="stwui-pagination-previous relative group shadow-sm overflow-hidden inline-flex items-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary-content"
			class:pointer-events-none={currentPage === 1}
			>Previous
			<HoverBackground />
		</button>
		<button
			type="button"
			on:click={onNextClick}
			disabled={end === total}
			class="stwui-pagination-next relative group shadow-sm overflow-hidden inline-flex items-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary-content"
			class:pointer-events-none={end === total}
			>Next
			<HoverBackground /></button
		>
	</div>
	<div class="hidden md:flex sm:flex-1 sm:items-center sm:justify-between stwui-pagination-current">
		<div>
			<p class="text-sm text-secondary-content">
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
			<nav class="isolate inline-flex -space-x-px rounded-md shadow-md">
				<button
					type="button"
					on:click={onPreviousClick}
					disabled={currentPage === 1}
					class="stwui-pagination-first relative overflow-hidden group inline-flex items-center rounded-l-md border border-border bg-surface px-2 py-2 text-sm font-medium text-secondary-content focus:z-20"
					class:pointer-events-none={currentPage === 1}
				>
					<Icon data={chevron_left} />
					<span class="sr-only">Previous</span>
					<HoverBackground />
				</button>
				{#each pagination as pageNumber}
					{#if typeof pageNumber === 'string'}
						<span
							class="stwui-pagination-blank-page relative inline-flex items-center border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary-content"
						>
							...
						</span>
					{:else if typeof pageNumber === 'number'}
						<button
							type="button"
							on:click={() => onPageClick(pageNumber)}
							class="stwui-pagination-page relative group overflow-hidden z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
							class:bg-primary={pageNumber === currentPage}
							class:border-primary={pageNumber === currentPage}
							class:text-primary-content={pageNumber === currentPage}
							class:z-20={pageNumber === currentPage}
							class:bg-surface={pageNumber !== currentPage}
							class:text-secondary-content={pageNumber !== currentPage}
							class:border-border={pageNumber !== currentPage}
						>
							{pageNumber}
							<HoverBackground />
						</button>
					{/if}
				{/each}
				<button
					type="button"
					on:click={onNextClick}
					disabled={end === total}
					class="stwui-pagination-last relative group overflow-hidden inline-flex items-center rounded-r-md border border-border bg-surface px-2 py-2 text-sm font-medium text-secondary-content focus:z-20"
					class:pointer-events-none={end === total}
				>
					<Icon data={chevron_right} />
					<span class="sr-only">Next</span>
					<HoverBackground />
				</button>
			</nav>
		</div>
	</div>
</div>
