<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Menu, type MenuItem } from '../../lib/components/menu';

	const items: MenuItem[] = [
		{
			icon: 'home',
			label: 'Dashboard',
			badge: '5',
			badgeType: 'info',
			href: '#item1'
		},
		{
			icon: 'people',
			label: 'Team',
			href: '#item2'
		},
		{
			icon: 'folder',
			label: 'Projects',
			badge: '19',
			badgeType: 'warn',
			href: '#item3'
		},
		{
			icon: 'calendar_month',
			label: 'Calendar',
			badge: '20+',
			badgeType: 'error',
			href: '#item4'
		},
		{
			icon: 'description',
			label: 'Documents',
			href: '#item5'
		},
		{
			icon: 'leaderboard',
			label: 'Reports',
			href: '#item6'
		}
	];
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Default</CardHeader>
		<CardContent class="p-4">
			<Menu {items} activeItem="Projects" />
		</CardContent>
	</Card>
</Col>
