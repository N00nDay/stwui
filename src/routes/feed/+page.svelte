<script lang="ts">
	import type { MaterialIcon } from '../../lib/types';
	import { Card, Col, Feed } from '../../lib';
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
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

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

<Col class="col-24">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
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
							<Feed.Item.Leading slot="leading" class="bg-info-background">
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

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<SlotsTable component="Feed" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Feed.Item" slots={itemSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Feed.Item.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Feed.Item.Leading.Avatar" props={avatarProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Feed.Item.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Feed.Item.Content" slots={contentSlots} />
</Col>
