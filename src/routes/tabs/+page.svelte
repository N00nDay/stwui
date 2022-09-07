<script lang="ts">
	import { Card, CardHeader, CardContent } from '../../lib/components/card';

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
		<CardHeader>Default</CardHeader>
		<CardContent class="p-4">
			<Tabs {tabs} {currentTab} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Full Width</CardHeader>
		<CardContent class="p-4">
			<Tabs {tabs} {currentTab} variant="full-width" />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Bar</CardHeader>
		<CardContent class="p-4">
			<Tabs {tabs} {currentTab} variant="bar" />
		</CardContent>
	</Card>
</Col>
