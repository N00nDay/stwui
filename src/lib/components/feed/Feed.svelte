<script lang="ts" context="module">
	import type MaterialIcons from '$lib/types/material-icons';

	export interface FeedItem {
		icon?: MaterialIcons;
		avatar?: string;
		description: string;
		creator: string;
		date: Date;
		type?: 'info' | 'warn' | 'success' | 'error';
		href: string;
	}
</script>

<script lang="ts">
	import dayjs from 'dayjs';
	import { Avatar } from '../avatar';

	export let variant: 'simple' | 'stacked' = 'simple';
	export let feed: FeedItem[] = [];
	export let dateFormat = 'MMM d';
</script>

{#if variant === 'simple'}
	<div class="flow-root">
		<ul class="-mb-8">
			{#each feed as f, i}
				<li>
					<div class="relative pb-8">
						{#if feed.length !== i + 1}
							<span
								class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
							/>
						{/if}
						<div class="relative flex space-x-3">
							<div>
								<span
									class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-light-surface dark:ring-dark-surface transition-all duration-150"
									class:bg-info-background={f.type === 'info'}
									class:bg-warn-background={f.type === 'warn'}
									class:bg-error-background={f.type === 'error'}
									class:bg-success-background={f.type === 'success'}
									class:bg-icon-background={!f.type}
								>
									{#if f.icon}
										<span class="material-icons text-xl text-white transition-all duration-150"
											>{f.icon}</span
										>
									{:else if f.avatar}
										<Avatar src={f.avatar} alt="user-avatar" size="sm" />
									{/if}
								</span>
							</div>
							<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
								<div>
									<p
										class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
									>
										{f.description}
										<a
											href={f.href}
											class="font-medium text-light-content dark:text-dark-content transtion-all duration-150"
											>{f.creator}</a
										>
									</p>
								</div>
								<div
									class="whitespace-nowrap text-right text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
								>
									<time datetime={f.date.toISOString()}>{dayjs(f.date).format(dateFormat)}</time>
								</div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{:else if variant === 'stacked'}
	<div>
		<ul class="divide-y divide-light-border dark:divide-dark-border transition-all duration-150">
			{#each feed as f, i}
				<li class="py-4 px-4">
					<div class="flex space-x-3">
						<Avatar src={f.avatar} alt="user-avatar" size="xs" />
						<div class="flex-1 space-y-1">
							<div class="flex items-center justify-between">
								<h3
									class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
								>
									{f.creator}
								</h3>
								<p
									class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
								>
									{dayjs(f.date).format('MMM d')}
								</p>
							</div>
							<p
								class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
							>
								{f.description}
							</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}
