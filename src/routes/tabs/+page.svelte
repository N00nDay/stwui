<script lang="ts">
	import { Card, Col, Tabs } from '../../lib';
	import {
		example1,
		example2,
		example3,
		props,
		slots,
		iconProps,
		tabProps,
		tabSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { home } from '../../docs/icons';
	import { check, info } from '../../lib/icons';

	interface Tab {
		href: string;
		title: string;
		data: string;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			data: home
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			data: check
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			data: info
		}
	];

	let currentTab = '#tab1';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {currentTab}>
				{#each tabs as tab, i}
					<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
						<Tabs.Tab.Icon slot="icon" data={tab.data} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>

			<br />

			<CodeBlock language="svelte" code={example1} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Full Width</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {currentTab} variant="full-width">
				{#each tabs as tab, i}
					<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
						<Tabs.Tab.Icon slot="icon" data={tab.data} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>

			<br />

			<CodeBlock language="svelte" code={example2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bar</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {currentTab} variant="bar">
				{#each tabs as tab, i}
					<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
						<Tabs.Tab.Icon slot="icon" data={tab.data} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>

			<br />

			<CodeBlock language="svelte" code={example3} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Tabs" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Tabs" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Tabs.Tab" props={tabProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Tabs.Tab" slots={tabSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Tabs.Tab.Icon" props={iconProps} />
</Col>
