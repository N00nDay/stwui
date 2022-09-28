<script lang="ts" context="module">
	import type MaterialIcons from '$lib/types/material-icons';

	interface GroupMenuItem {
		label: string;
		href: string;
	}
	interface MenuItem {
		icon?: MaterialIcons;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
		children?: GroupMenuItem[];
	}
</script>

<script lang="ts">
	import { Badge, Button, Card, Col, Menu } from '../../lib';

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
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Menu showActiveByURL={false}>
				{#each items1 as item}
					{#if item.icon && item.badge}
						<Menu.Item label={item.label} href={item.href}>
							<Menu.Item.Icon slot="icon" icon={item.icon} />
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else if item.icon}
						<Menu.Item label={item.label} href={item.href}>
							<Menu.Item.Icon slot="icon" icon={item.icon} />
						</Menu.Item>
					{:else if item.badge}
						<Menu.Item label={item.label} href={item.href}>
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else}
						<Menu.Item label={item.label} href={item.href} />
					{/if}
				{/each}
			</Menu>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Collapsable Items</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Menu>
				{#each items2 as item}
					{#if item.children && item.children.length > 0}
						{#if item.icon}
							<Menu.Group label={item.label} href={item.href}>
								<Menu.Item.Icon slot="icon" icon={item.icon} />
								{#each item.children as child}
									<Menu.Group.Item label={child.label} href={child.href} />
								{/each}
							</Menu.Group>
						{:else}
							<Menu.Group label={item.label} href={item.href}>
								{#each item.children as child}
									<Menu.Group.Item label={child.label} href={child.href} />
								{/each}
							</Menu.Group>
						{/if}
					{:else if item.icon && item.badge}
						<Menu.Item label={item.label} href={item.href}>
							<Menu.Item.Icon slot="icon" icon={item.icon} />
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else if item.icon}
						<Menu.Item label={item.label} href={item.href}>
							<Menu.Item.Icon slot="icon" icon={item.icon} />
						</Menu.Item>
					{:else if item.badge}
						<Menu.Item label={item.label} href={item.href}>
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else}
						<Menu.Item label={item.label} href={item.href} />
					{/if}
				{/each}
			</Menu>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header" class="flex flex-row items-center justify-between"
			>Collapsable Sider
			<Button slot="extra" type="primary" on:click={toggleCollapse}>Collapse</Button>
		</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Menu {collapsed}>
				{#each items2 as item}
					{#if item.children && item.children.length > 0}
						{#if item.icon}
							<Menu.Group label={item.label} href={item.href}>
								<Menu.Item.Icon slot="icon" icon={item.icon} />
								{#each item.children as child}
									<Menu.Group.Item label={child.label} href={child.href} />
								{/each}
							</Menu.Group>
						{:else}
							<Menu.Group label={item.label} href={item.href}>
								{#each item.children as child}
									<Menu.Group.Item label={child.label} href={child.href} />
								{/each}
							</Menu.Group>
						{/if}
					{:else if item.icon && item.badge}
						<Menu.Item label={item.label} href={item.href}>
							<Menu.Item.Icon slot="icon" icon={item.icon} />
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else if item.icon}
						<Menu.Item label={item.label} href={item.href}>
							<Menu.Item.Icon slot="icon" icon={item.icon} />
						</Menu.Item>
					{:else if item.badge}
						<Menu.Item label={item.label} href={item.href}>
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else}
						<Menu.Item label={item.label} href={item.href} />
					{/if}
				{/each}
			</Menu>
		</Card.Content>
	</Card>
</Col>
