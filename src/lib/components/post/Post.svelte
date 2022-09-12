<script lang="ts">
	import dayjs, { type Dayjs } from 'dayjs';
	import isToday from 'dayjs/plugin/isToday';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(isToday);
	dayjs.extend(relativeTime);

	import { Card, CardHeader, CardContent, CardAction, CardActions, CardCover } from '../card';
	import { Avatar } from '../avatar';
	import PostImages from './PostImages.svelte';

	export let creator: { avatar: string; name: string };
	export let created: Date;
	export let images: string[] = [];
	export let post: string | undefined = undefined;
	export let likes: string[] = [];
	export let comments: string[] = [];
	export let allowDownload = true;
	export let allowShare = true;
	export let bordered = true;

	let dayjsDate: Dayjs = dayjs(created);
	let today: Dayjs = dayjs();
	let renderedDate: string;
	if (dayjsDate.isToday()) {
		renderedDate = dayjsDate.fromNow();
	} else if (dayjsDate.year() === today.year()) {
		renderedDate = dayjsDate.format('MMMM D') + ' at ' + dayjsDate.format('h:mm A');
	} else {
		renderedDate = dayjsDate.format('MMMM D, YYYY') + ' at ' + dayjsDate.format('h:mm A');
	}
</script>

<Card divided class={$$props.class} style={$$props.style} {bordered}>
	<CardHeader class="py-1.5 px-1.5 sm:px-3 h-14 flex flex-row">
		<div class="flex-shrink">
			<Avatar size="md" src={creator.avatar} />
		</div>
		<div class="flex flex-col flex-grow h-full ml-3">
			<h3
				class="text-md font-semibold text-light-content dark:text-dark-content transition-all duration-150"
			>
				{creator.name}
			</h3>
			<p
				class="text-xs text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
			>
				{renderedDate}
			</p>
		</div>
	</CardHeader>

	{#if post}
		<CardContent>
			{@html post}
		</CardContent>
	{/if}

	{#if images.length > 0}
		<CardCover>
			<PostImages {images} {allowDownload} {allowShare} />
		</CardCover>
	{/if}

	{#if likes.length > 0 || comments.length > 0}
		<div
			class="flex flex-row justify-evenly items-center py-1 px-2 border border-light-border dark:border-dark-border transition-all duration-150"
		>
			<div class="h-full w-full flex justify-start items-center text-sm">
				{#if likes.length > 0}
					<div
						class="mr-1 h-5 w-5 rounded-full bg-primary shadow-md dark:shadow-black flex items-center justify-center transition-all duration-150"
					>
						<span class="material-icons text-xs text-primary-content">thumb_up</span>
					</div>
					{likes.length}
				{/if}
			</div>
			<div class="h-full w-full flex justify-end items-center text-sm">
				{#if comments.length > 0}
					{comments.length} Comments
				{/if}
			</div>
		</div>
	{/if}

	<CardActions>
		<CardAction icon="thumb_up" label="Like" />
		<CardAction icon="comment" label="Comment" />
		<CardAction icon="share" label="Share" />
	</CardActions>
</Card>
