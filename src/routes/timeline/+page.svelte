<script lang="ts">
	import { Card, Col, Timeline, Divider } from '../../lib';
	import type { TimelineItem } from '../../lib/types/timeline-item';
	import { example, slots, itemProps } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	const timeline: TimelineItem[] = [
		{
			created: new Date(2022, 8, 1),
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			creator: 'Eduardo Benz',
			type: 'comment',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.'
		},
		{
			icon: 'account_circle',
			created: new Date(2022, 8, 5),
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			creator: 'Hilary Mahy',
			description:
				'<span class="text-light-content dark:text-dark-content font-medium">Hilary Mahy</span> assigned <span class="text-light-content dark:text-dark-content font-medium">Kristin Watson</span>'
		},
		{
			icon: 'local_offer',
			created: new Date(2022, 8, 6),
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			creator: 'Hilary Mahy',
			description:
				'<span class="text-light-content dark:text-dark-content font-medium">Hilary Mahy</span> added tags <span class="inline-flex items-center py-0.5 font-medium bg-opacity-20 dark:bg-opacity-20 bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content px-2.5 text-xs rounded-full"> Accessibility </span>'
		},
		{
			created: new Date(new Date().getTime() - 1000 * 60 * 30),
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			creator: 'Jason Meyers',
			type: 'comment',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.'
		}
	];
</script>

<Col class="col-24 mb-4">
	<h1 class="text-light-content dark:text-dark-content mb-0">Timeline</h1>
	<Divider />
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Timeline>
				{#each timeline as item}
					<Timeline.Item
						created={item.created}
						avatar={item.avatar}
						creator={item.creator}
						type={item.type}
						icon={item.icon}
						description={item.description}
					/>
				{/each}
			</Timeline>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<SlotsTable component="Timeline" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Timeline.Item" props={itemProps} />
</Col>
