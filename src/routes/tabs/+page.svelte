<script lang="ts">
	import { Tabs } from '../../lib';
	import {
		example1,
		example2,
		example3,
		props,
		slots,
		iconProps,
		tabProps,
		tabSlots,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
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

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Default">
	<div slot="preview" class="w-full">
		<Tabs {currentTab}>
			{#each tabs as tab}
				<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
					<Tabs.Tab.Icon slot="icon" data={tab.data} />
					{tab.title}
				</Tabs.Tab>
			{/each}
		</Tabs>
	</div>
	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="Full Width">
	<div slot="preview" class="w-full">
		<Tabs {currentTab} variant="full-width">
			{#each tabs as tab}
				<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
					<Tabs.Tab.Icon slot="icon" data={tab.data} />
					{tab.title}
				</Tabs.Tab>
			{/each}
		</Tabs>
	</div>
	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<ExampleContainer title="Bar">
	<div slot="preview" class="w-full">
		<Tabs {currentTab} variant="bar">
			{#each tabs as tab}
				<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
					<Tabs.Tab.Icon slot="icon" data={tab.data} />
					{tab.title}
				</Tabs.Tab>
			{/each}
		</Tabs>
	</div>
	<CodeBlock slot="code" language="svelte" code={example3} />
</ExampleContainer>

<PropsTable component="Tabs" {props} />

<SlotsTable component="Tabs" {slots} />

<PropsTable component="Tabs.Tab" props={tabProps} />

<SlotsTable component="Tabs.Tab" slots={tabSlots} />

<PropsTable component="Tabs.Tab.Icon" props={iconProps} />

<ClassTable component="Tabs" {classList} />
