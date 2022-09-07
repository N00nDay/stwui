<script lang="ts">
	import { Card, CardHeader, CardContent } from '../../lib/components/card';

	import { Col } from '../../lib/components/grid';
	import { Steps } from '../../lib/components/steps';

	const steps1 = [
		{
			href: '#step1',
			title: 'Step 1',
			description: 'Job details'
		},
		{
			href: '#step2',
			title: 'Step 2',
			description: 'Application form'
		},
		{
			href: '#step3',
			title: 'Step 3',
			description: 'Preview'
		}
	];
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Simple</CardHeader>
		<CardContent class="p-4">
			<Steps steps={steps1} currentStep={2} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Bullets</CardHeader>
		<CardContent class="p-4">
			<Steps variant="bullets" steps={steps1} currentStep={2} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Bullets & Text</CardHeader>
		<CardContent class="p-4">
			<Steps variant="bullets-text" steps={steps1} currentStep={2} />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Circles & Text</CardHeader>
		<CardContent class="p-4">
			<Steps variant="circles-text" steps={steps1} currentStep={2} />
		</CardContent>
	</Card>
</Col>
