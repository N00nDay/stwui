<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Menu, type MenuItem } from '../../lib/components/menu';
	import { Button } from '../../lib/components/button';

	const items1: MenuItem[] = [
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

	const items2: MenuItem[] = [
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
			href: '#item2',
			children: [
				{
					label: 'Sub 1',
					href: '#item2-sub1'
				},
				{
					label: 'Sub 2',
					href: '#item2-sub2'
				}
			]
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

	let collapsed = false;

	function toggleCollapse() {
		collapsed = !collapsed;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Default</CardHeader>
		<CardContent class="p-4">
			<Menu items={items1} activeItem="#item5" useUrl={false} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Collapsable Items</CardHeader>
		<CardContent class="p-4">
			<Menu items={items2} activeItem="#item3" useUrl={false} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader class="flex flex-row items-center justify-between"
			>Collapsable Sider
			<Button slot="extras" type="primary" on:click={toggleCollapse}>Collapse</Button>
		</CardHeader>
		<CardContent class="p-4">
			<Menu items={items2} {collapsed} />
		</CardContent>
	</Card>
</Col>
