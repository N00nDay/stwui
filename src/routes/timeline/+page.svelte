<script lang="ts">
	import { Timeline } from '../../lib';
	import type { TimelineItem } from '../../lib/types/timeline-item';
	import { example, slots, itemProps } from './examples';
	import { PropsTable, SlotsTable, CodeBlock, BetaComponent, ExampleContainer } from '../../docs';

	import { account, currency_usd } from '../../lib/icons';

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
			icon: account,
			created: new Date(2022, 8, 5),
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			creator: 'Hilary Mahy',
			description:
				'<span class="text-content font-medium">Hilary Mahy</span> assigned <span class="text-content font-medium">Kristin Watson</span>'
		},
		{
			icon: currency_usd,
			created: new Date(2022, 8, 6),
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			creator: 'Hilary Mahy',
			description:
				'<span class="text-content font-medium">Hilary Mahy</span> added tags <span class="inline-flex items-center py-0.5 font-medium bg-opacity-20 bg-info text-info-content px-2.5 text-xs rounded-full"> Accessibility </span>'
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

<BetaComponent />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full">
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
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<SlotsTable component="Timeline" {slots} />

<PropsTable component="Timeline.Item" props={itemProps} />
