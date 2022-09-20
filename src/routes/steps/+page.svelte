<script lang="ts">
	import Card from '../../lib/components/card';

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
		<Card.Header slot="header">Simple</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps steps={steps1} currentStep={2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bullets</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="bullets" steps={steps1} currentStep={2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bullets & Text</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="bullets-text" steps={steps1} currentStep={2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Circles & Text</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="circles-text" steps={steps1} currentStep={2} />
		</Card.Content>
	</Card>
</Col>
