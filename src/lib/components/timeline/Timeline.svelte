<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	interface Creator {
		avatar?: string;
		name: string;
	}

	export interface TimelineItem {
		icon?: MaterialIcons;
		date: Date;
		creator: Creator;
		type?: 'default' | 'comment';
		description: string;
	}
</script>

<script lang="ts">
	import { formatDate } from '../../utils/formatDate';
	import Avatar from '../avatar';

	export let timeline: TimelineItem[] = [];
</script>

<div class="flow-root">
	<ul class="-mb-8">
		{#each timeline as tl, i}
			{#if tl.type === 'comment'}
				<li>
					<div class="relative pb-8">
						{#if timeline.length !== i + 1}
							<span
								class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
								aria-hidden="true"
							/>
						{/if}
						<div class="relative flex items-start space-x-3">
							<div class="relative">
								<!-- <img
									class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
									src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
									alt=""
								/> -->
								<Avatar
									src={tl.creator.avatar}
									alt="user-avatar"
									size="md"
									class="ring-8 ring-light-surface dark:ring-dark-surface transition-all duration-150"
								/>

								<span
									class="absolute -bottom-1.5 -right-1 rounded-tl bg-light-surface dark:bg-dark-surface transition-all duration-150 px-0.5 py-px z-10"
								>
									<!-- Heroicon name: mini/chat-bubble-left-ellipsis -->
									<!-- <svg
										class="h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
											clip-rule="evenodd"
										/>
									</svg> -->
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
											>{tl.creator.name}</span
										>
									</div>
									<p
										class="mt-0.5 text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
									>
										Commented {formatDate(tl.date)}
									</p>
								</div>
								<div
									class="mt-2 text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
								>
									<p>
										{@html tl.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			{:else}
				<li>
					<div class="relative pb-8">
						{#if timeline.length !== i + 1}
							<span
								class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-light-border dark:bg-dark-border transition-all duration-150"
								aria-hidden="true"
							/>
						{/if}
						<div class="relative flex items-start space-x-3">
							<div>
								<div class="relative px-1">
									<div
										class="flex h-8 w-8 items-center justify-center rounded-full bg-light-icon-background dark:bg-dark-icon-background transition-all duration-150 ring-8 ring-light-surface dark:ring-dark-surface"
									>
										<span
											class="material-icons text-light-content dark:text-dark-content transition-all duration-150"
											>{tl.icon}</span
										>
									</div>
								</div>
							</div>
							<div class="min-w-0 flex-1 py-1.5">
								<div
									class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
								>
									{@html tl.description}
									<span class="whitespace-nowrap ml-1">{formatDate(tl.date)}</span>
								</div>
							</div>
						</div>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</div>
