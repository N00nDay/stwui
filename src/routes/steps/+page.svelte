<script lang="ts">
	import { Card, Col, Steps } from '../../lib';
	import {
		example1,
		example2,
		example3,
		example4,
		props,
		slots,
		stepProps,
		stepSlots,
		titleSlots,
		descriptionSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let currentStep = 2;

	const steps = [
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
			<Steps {currentStep}>
				{#each steps as step, i}
					<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
						<Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
					</Steps.Step>
				{/each}
			</Steps>

			<br />

			<CodeBlock language="svelte" code={example1} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bullets</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="bullets" {currentStep}>
				<Steps.Summary slot="summary">Step {currentStep} of {steps.length}</Steps.Summary>
				{#each steps as step, i}
					<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
					</Steps.Step>
				{/each}
			</Steps>

			<br />

			<CodeBlock language="svelte" code={example2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Bullets & Text</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="bullets-text" {currentStep}>
				{#each steps as step, i}
					<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
					</Steps.Step>
				{/each}
			</Steps>

			<br />

			<CodeBlock language="svelte" code={example3} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Circles & Text</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Steps variant="circles-text" {currentStep}>
				{#each steps as step, i}
					<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
						<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
						<Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
					</Steps.Step>
				{/each}
			</Steps>

			<br />

			<CodeBlock language="svelte" code={example4} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Steps" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Steps" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Steps.Step" props={stepProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Steps.Step" slots={stepSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Steps.Step.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Steps.Step.Description" slots={descriptionSlots} />
</Col>
