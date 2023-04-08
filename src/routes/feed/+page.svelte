<script lang="ts">
	import { Feed } from '../../lib';
	import { formatDate } from '../../lib/utils';
	import {
		example,
		slots,
		itemSlots,
		leadingSlots,
		avatarProps,
		iconProps,
		contentSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';

	import { check, currency_usd } from '../../lib/icons';

	interface Item {
		avatar?: string;
		icon?: string;
		content: string;
		date: Date;
	}

	const items: Item[] = [
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			content: '<span>Applied to <a href="#item1" class="font-bold">Front End Developer</a></span>',
			date: new Date(2022, 8, 21)
		},
		{
			icon: currency_usd,
			content:
				'<span>Advanced to phone screeingin by <a href="#item2" class="font-bold">Bethany Blake</a></span>',
			date: new Date(2022, 8, 19)
		},
		{
			icon: check,
			content:
				'<span>Completed phone screening with <a href="#item3" class="font-bold">Martha Gardner</a></span>',
			date: new Date(2022, 8, 15)
		},
		{
			icon: currency_usd,
			content:
				'<span>Advanced to interview by <a href="#item4" class="font-bold">Bethany Blake</a></span>',
			date: new Date(2022, 8, 2)
		},
		{
			icon: check,
			content:
				'<span>Completed interview with <a href="#item5" class="font-bold">Katherine Snyder</a></span>',
			date: new Date(2022, 7, 22)
		}
	];
</script>

<ExampleContainer title="Avatar Dropdown">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<Feed>
			{#each items as item}
				{#if item.avatar}
					<Feed.Item>
						<Feed.Item.Leading slot="leading">
							<Feed.Item.Leading.Avatar slot="avatar" src={item.avatar} />
						</Feed.Item.Leading>
						<Feed.Item.Content slot="content">
							{@html item.content}
						</Feed.Item.Content>
						<Feed.Item.DateTime slot="datetime">
							<time datetime={item.date.toISOString()}>{formatDate(item.date)}</time>
						</Feed.Item.DateTime>
					</Feed.Item>
				{:else if item.icon}
					<Feed.Item>
						<Feed.Item.Leading slot="leading" class="bg-info">
							<Feed.Item.Leading.Icon slot="icon" data={item.icon} />
						</Feed.Item.Leading>
						<Feed.Item.Content slot="content">
							{@html item.content}
						</Feed.Item.Content>
						<Feed.Item.DateTime slot="datetime">
							<time datetime={item.date.toISOString()}>{formatDate(item.date)}</time>
						</Feed.Item.DateTime>
					</Feed.Item>
				{:else}
					<Feed.Item>
						<Feed.Item.Content slot="content">
							{@html item.content}
						</Feed.Item.Content>
						<Feed.Item.DateTime slot="datetime">
							<time datetime={item.date.toISOString()}>{formatDate(item.date)}</time>
						</Feed.Item.DateTime>
					</Feed.Item>
				{/if}
			{/each}
		</Feed>
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<SlotsTable component="Feed" {slots} />

<SlotsTable component="Feed.Item" slots={itemSlots} />

<SlotsTable component="Feed.Item.Leading" slots={leadingSlots} />

<PropsTable component="Feed.Item.Leading.Avatar" props={avatarProps} />

<PropsTable component="Feed.Item.Leading.Icon" props={iconProps} />

<SlotsTable component="Feed.Item.Content" slots={contentSlots} />
