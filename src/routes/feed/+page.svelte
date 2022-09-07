<script lang="ts">
	import { Card, CardHeader, CardContent } from '../../lib/components/card';

	import { Col } from '../../lib/components/grid';
	import { Feed, type FeedItem } from '../../lib/components/feed';

	const feed1: FeedItem[] = [
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			description: 'Applied to ',
			creator: 'Front End Developer',
			date: new Date(2022, 8, 20),
			href: '#feed1'
		},
		{
			icon: 'thumb_up',
			description: 'Advanced to phone screening by ',
			creator: 'Bethany Blake',
			date: new Date(2022, 8, 22),
			type: 'info',
			href: '#feed2'
		},
		{
			icon: 'done',
			description: 'Completed phone screening with ',
			creator: 'Martha Gardner',
			date: new Date(2022, 8, 28),
			type: 'success',
			href: '#feed3'
		},
		{
			icon: 'thumb_up',
			description: 'Advanced to interview by ',
			creator: 'Bethany Blake',
			date: new Date(2022, 8, 30),
			type: 'info',
			href: '#feed4'
		},
		{
			icon: 'done',
			description: 'Completed interview with ',
			creator: 'Katherine Snyder',
			date: new Date(2022, 9, 4),
			type: 'success',
			href: '#feed5'
		}
	];

	const feed2: FeedItem[] = [
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			description: 'Deployed Workcation (2d89f0c8 in master) to production',
			creator: 'Lindsay Walton',
			date: new Date(2022, 8, 20),
			href: '#feed1'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			description: 'Deployed KiteTail (249df660 in master) to staging',
			creator: 'Floyd Miles',
			date: new Date(2022, 8, 22),
			href: '#feed2'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			description: 'Deployed Workcation (11464223 in master) to staging',
			creator: 'Floyd Miles',
			date: new Date(2022, 8, 28),
			href: '#feed3'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			description: 'Deployed Easywire (dad28e95 in master) to production',
			creator: 'Whitney Francis',
			date: new Date(2022, 8, 30),
			href: '#feed4'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			description: 'Deployed Easywire (624bc94c in master) to production',
			creator: 'Lindsay Walton',
			date: new Date(2022, 9, 4),
			href: '#feed5'
		}
	];
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Simple</CardHeader>
		<CardContent class="p-4">
			<Feed feed={feed1} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Stacked</CardHeader>
		<CardContent noPadding>
			<Feed feed={feed2} variant="stacked" />
		</CardContent>
	</Card>
</Col>
