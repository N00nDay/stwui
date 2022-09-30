<script lang="ts">
	import type MaterialIcons from '../../lib/types/material-icons';
	import { Card, Col, Tabs } from '../../lib';

	interface Tab {
		href: string;
		title: string;
		icon: MaterialIcons;
	}

	const tabs: Tab[] = [
		{
			href: '#step1',
			title: 'Step 1',
			icon: 'home'
		},
		{
			href: '#step2',
			title: 'Step 2',
			icon: 'done'
		},
		{
			href: '#step3',
			title: 'Step 3',
			icon: 'info'
		}
	];

	let currentTab: number | undefined = undefined;

	function handleClick(index: number) {
		currentTab = index;
	}
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {currentTab}>
				{#each tabs as tab, i}
					<Tabs.Tab index={i} href={tab.href} on:click={() => handleClick(i)}>
						<Tabs.Tab.Icon slot="icon" icon={tab.icon} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Full Width</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {currentTab} variant="full-width">
				{#each tabs as tab, i}
					<Tabs.Tab index={i} href={tab.href} on:click={() => handleClick(i)}>
						<Tabs.Tab.Icon slot="icon" icon={tab.icon} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bar</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {currentTab} variant="bar">
				{#each tabs as tab, i}
					<Tabs.Tab index={i} href={tab.href} on:click={() => handleClick(i)}>
						<Tabs.Tab.Icon slot="icon" icon={tab.icon} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>
		</Card.Content>
	</Card>
</Col>
