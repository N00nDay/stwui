<script lang="ts" context="module">
	import type { MaterialIcon } from '../../lib/types';
	import { calendar } from '../../lib/icons';
	import { home, account_multiple, folder, file_document, poll } from '../../docs/icons';

	interface GroupMenuItem {
		key: string;
		label: string;
		href: string;
	}
	interface MenuItem {
		key: string;
		data?: string;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
		children?: GroupMenuItem[];
	}
</script>

<script lang="ts">
	import { Badge, Button, Card, Col, Menu } from '../../lib';
	import {
		example,
		props,
		slots,
		iconProps,
		itemProps,
		itemSlots,
		groupProps,
		groupSlots,
		groupItemsProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	const items: MenuItem[] = [
		{
			key: 'dashboard',
			data: home,
			label: 'Dashboard',
			badge: '5',
			badgeType: 'info',
			href: '#item1'
		},
		{
			key: 'team',
			data: account_multiple,
			label: 'Team',
			href: '#item2',
			children: [
				{
					key: 'sub1',
					label: 'Sub 1',
					href: '#item2-sub1'
				},
				{
					key: 'sub2',
					label: 'Sub 2',
					href: '#item2-sub2'
				}
			]
		},
		{
			key: 'projects',
			data: folder,
			label: 'Projects',
			badge: '19',
			badgeType: 'warn',
			href: '#item3'
		},
		{
			key: 'calendar',
			data: calendar,
			label: 'Calendar',
			badge: '20+',
			badgeType: 'error',
			href: '#item4'
		},
		{
			key: 'documents',
			data: file_document,
			label: 'Documents',
			href: '#item5'
		},
		{
			key: 'reports',
			data: poll,
			label: 'Reports',
			href: '#item6'
		}
	];

	let collapsed = false;
	let active = '';

	function toggleCollapse() {
		collapsed = !collapsed;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header" class="flex flex-row items-center justify-between"
			>Collapsable Sider
			<Button slot="extra" type="primary" on:click={toggleCollapse}>Collapse</Button>
		</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Menu {collapsed} {active}>
				{#each items as item}
					{#if item.children && item.children.length > 0}
						{#if item.data}
							<Menu.Group key={item.key} label={item.label} href={item.href}>
								<Menu.Item.Icon slot="icon" data={item.data} />
								{#each item.children as child}
									<Menu.Group.Item
										key={child.key}
										label={child.label}
										href={child.href}
										on:click={() => (active = `${item.key}-${child.key}`)}
									/>
								{/each}
							</Menu.Group>
						{:else}
							<Menu.Group key={item.key} label={item.label} href={item.href}>
								{#each item.children as child}
									<Menu.Group.Item
										key={child.key}
										label={child.label}
										href={child.href}
										on:click={() => (active = `${item.key}-${child.key}`)}
									/>
								{/each}
							</Menu.Group>
						{/if}
					{:else if item.data && item.badge}
						<Menu.Item
							key={item.key}
							label={item.label}
							href={item.href}
							on:click={() => (active = item.key)}
						>
							<Menu.Item.Icon slot="icon" data={item.data} />
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else if item.data}
						<Menu.Item
							key={item.key}
							label={item.label}
							href={item.href}
							on:click={() => (active = item.key)}
						>
							<Menu.Item.Icon slot="icon" data={item.data} />
						</Menu.Item>
					{:else if item.badge}
						<Menu.Item
							key={item.key}
							label={item.label}
							href={item.href}
							on:click={() => (active = item.key)}
						>
							<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
						</Menu.Item>
					{:else}
						<Menu.Item
							key={item.key}
							label={item.label}
							href={item.href}
							on:click={() => (active = item.key)}
						/>
					{/if}
				{/each}
			</Menu>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Menu" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Menu" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Menu.Item" props={itemProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Menu.Item" slots={itemSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Menu.Item.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Menu.Group" props={groupProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Menu.Group" slots={groupSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Menu.Group.Item" props={groupItemsProps} />
</Col>
