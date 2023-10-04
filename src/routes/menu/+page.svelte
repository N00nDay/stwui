<script lang="ts" context="module">
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
	import { Badge, Button, Card, Menu } from '../../lib';
	import {
		example,
		props,
		slots,
		iconProps,
		itemProps,
		itemSlots,
		groupProps,
		groupSlots,
		groupItemsProps,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

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

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Card class="w-full max-w-lg">
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
			</Card.Content>
		</Card>
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<PropsTable component="Menu" {props} />

<SlotsTable component="Menu" {slots} />

<PropsTable component="Menu.Item" props={itemProps} />

<SlotsTable component="Menu.Item" slots={itemSlots} />

<PropsTable component="Menu.Item.Icon" props={iconProps} />

<PropsTable component="Menu.Group" props={groupProps} />

<SlotsTable component="Menu.Group" slots={groupSlots} />

<PropsTable component="Menu.Group.Item" props={groupItemsProps} />

<ClassTable component="Menu" {classList} />
