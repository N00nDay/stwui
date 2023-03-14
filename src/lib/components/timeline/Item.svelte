<script lang="ts">
	import Avatar from '../avatar';
	import Icon from '../icon/Icon.svelte';
	import { comment } from '../../icons';
	import { formatDate } from '../../utils';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'comment' | undefined = undefined;
	export let avatar: string | undefined = undefined;
	export let creator: string;
	export let created: Date;
	export let description: string;
	export let icon: string | undefined = undefined;
</script>

{#if type === 'comment'}
	<li use:useActions={use} use:forwardEvents {...exclude($$props, ['use'])}>
		<div class="relative pb-8">
			<span class="divider absolute top-5 left-5 -ml-px h-full w-0.5 bg-default" />
			<div class="relative flex items-start space-x-3">
				<div class="relative">
					<Avatar src={avatar} alt="user-avatar" size="md" class="ring-8 ring-surface" />

					<span class="absolute -bottom-1.5 -right-1 rounded-tl bg-surface px-0.5 py-px z-10">
						<span class="text-content">
							<Icon data={comment} size="16px" class="scale-x-[-1]" />
						</span>
					</span>
				</div>
				<div class="min-w-0 flex-1">
					<div>
						<div class="text-sm">
							<span class="font-medium text-content">{creator}</span>
						</div>
						<p class="mt-0.5 text-sm text-secondary-content">
							Commented {formatDate(created)}
						</p>
					</div>
					<div class="mt-2 text-sm text-secondary-content">
						<p>
							{@html description}
						</p>
					</div>
				</div>
			</div>
		</div>
	</li>
{:else}
	<li use:useActions={use} use:forwardEvents {...exclude($$props, ['use'])}>
		<div class="relative pb-8">
			<span class="divider absolute top-5 left-5 -ml-px h-full w-0.5 bg-default" />
			<div class="relative flex items-start space-x-3">
				<div>
					<div class="relative px-1">
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full bg-default ring-8 ring-surface"
						>
							<span class="text-content">
								<Icon data={icon} />
							</span>
						</div>
					</div>
				</div>
				<div class="min-w-0 flex-1 py-1.5">
					<div class="text-sm text-secondary-content">
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
