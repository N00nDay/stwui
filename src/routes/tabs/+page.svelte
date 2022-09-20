<script lang="ts">
	import Card from '../../lib/components/card';

	import { Col } from '../../lib/components/grid';
	import { Tabs } from '../../lib/components/tabs';

	const tabs = [
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

	const currentTab = 'Step 2';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {tabs} {currentTab} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Full Width</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {tabs} {currentTab} variant="full-width" />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bar</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Tabs {tabs} {currentTab} variant="bar" />
		</Card.Content>
	</Card>
</Col>
