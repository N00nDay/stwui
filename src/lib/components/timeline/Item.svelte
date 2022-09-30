<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import Avatar from '../avatar';
	import { formatDate } from '../../utils/formatDate';

	export let type: 'comment' | undefined = undefined;
	export let avatar: string | undefined = undefined;
	export let creator: string;
	export let created: Date;
	export let description: string;
	export let icon: MaterialIcons | undefined = undefined;
</script>

{#if type === 'comment'}
	<li>
		<div class="relative pb-8">
			<span
				class="divider absolute top-5 left-5 -ml-px h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
			/>
			<div class="relative flex items-start space-x-3">
				<div class="relative">
					<Avatar
						src={avatar}
						alt="user-avatar"
						size="md"
						class="ring-8 ring-light-surface dark:ring-dark-surface transition-all duration-150"
					/>

					<span
						class="absolute -bottom-1.5 -right-1 rounded-tl bg-light-surface dark:bg-dark-surface transition-all duration-150 px-0.5 py-px z-10"
					>
						<span
							class="material-icons text-lg text-light-content dark:text-dark-content transition-all duration-150"
						>
							message
						</span>
					</span>
				</div>
				<div class="min-w-0 flex-1">
					<div>
						<div class="text-sm">
							<span
								class="font-medium text-light-content dark:text-dark-content transition-all duration-150"
								>{creator}</span
							>
						</div>
						<p
							class="mt-0.5 text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
						>
							Commented {formatDate(created)}
						</p>
					</div>
					<div
						class="mt-2 text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
					>
						<p>
							{@html description}
						</p>
					</div>
				</div>
			</div>
		</div>
	</li>
{:else}
	<li>
		<div class="relative pb-8">
			<span
				class="divider absolute top-5 left-5 -ml-px h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
			/>
			<div class="relative flex items-start space-x-3">
				<div>
					<div class="relative px-1">
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full bg-light-icon-background dark:bg-dark-icon-background transition-all duration-150 ring-8 ring-light-surface dark:ring-dark-surface"
						>
							<span
								class="material-icons text-light-content dark:text-dark-content transition-all duration-150"
								>{icon}</span
							>
						</div>
					</div>
				</div>
				<div class="min-w-0 flex-1 py-1.5">
					<div
						class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
					>
						{@html description}
						<span class="whitespace-nowrap ml-1">{formatDate(created)}</span>
					</div>
				</div>
			</div>
		</div>
	</li>
{/if}

<style>
	ul li:last-of-type .divider {
		display: none;
	}
</style>
