<script lang="ts">
	import { Card, Col, Steps } from '../../lib';

	let currentStep1 = 2;

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

	function handleClick(index: number) {
		currentStep1 = index + 1;
	}
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Simple</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps currentStep={currentStep1}>
				{#each steps1 as step, i}
					<Steps.Step index={i} href={step.href} on:click={() => handleClick(i)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
						<Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
					</Steps.Step>
				{/each}
			</Steps>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bullets</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="bullets" currentStep={currentStep1}>
				<Steps.Summary slot="summary">Step {currentStep1} of {steps1.length}</Steps.Summary>
				{#each steps1 as step, i}
					<Steps.Step index={i} href={step.href} on:click={() => handleClick(i)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
					</Steps.Step>
				{/each}
			</Steps>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bullets & Text</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="bullets-text" currentStep={currentStep1}>
				{#each steps1 as step, i}
					<Steps.Step index={i} href={step.href} on:click={() => handleClick(i)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
					</Steps.Step>
				{/each}
			</Steps>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Circles & Text</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="circles-text" currentStep={currentStep1}>
				{#each steps1 as step, i}
					<Steps.Step index={i} href={step.href} on:click={() => handleClick(i)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
						<Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
					</Steps.Step>
				{/each}
			</Steps>
		</Card.Content>
	</Card>
</Col>
