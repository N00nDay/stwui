<script lang="ts">
	import Card from '../../lib/components/card';

	import { Col } from '../../lib/components/grid';
	import { Timeline, type TimelineItem } from '../../lib/components/timeline';

	const timeline: TimelineItem[] = [
		{
			date: new Date(2022, 8, 1),
			creator: {
				avatar:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				name: 'Eduardo Benz'
			},
			type: 'comment',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.'
		},
		{
			icon: 'account_circle',
			date: new Date(2022, 8, 5),
			creator: {
				avatar:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				name: 'Hilary Mahy'
			},
			description:
				'<span class="text-light-content dark:text-dark-content font-medium transition-all duration-150">Hilary Mahy</span> assigned <span class="text-light-content dark:text-dark-content font-medium transition-all duration-150">Kristin Watson</span>'
		},
		{
			icon: 'local_offer',
			date: new Date(2022, 8, 6),
			creator: {
				avatar:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				name: 'Hilary Mahy'
			},
			description:
				'<span class="text-light-content dark:text-dark-content font-medium transition-all duration-150">Hilary Mahy</span> added tags <span class="inline-flex items-center py-0.5 font-medium bg-opacity-20 dark:bg-opacity-20 bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content px-2.5 text-xs rounded-full"> Accessibility </span>'
		},
		{
			date: new Date(2022, 8, 7),
			creator: {
				avatar:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				name: 'Jason Meyers'
			},
			type: 'comment',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.'
		}
	];
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Timeline {timeline} />
		</Card.Content>
	</Card>
</Col>
