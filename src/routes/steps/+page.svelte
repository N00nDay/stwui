<script lang="ts">
	import { Steps } from '../../lib';
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
		descriptionSlots,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

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

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Simple">
	<div slot="preview" class="w-full">
		<Steps {currentStep}>
			{#each steps as step, i}
				<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
					<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
					<Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
				</Steps.Step>
			{/each}
		</Steps>
	</div>
	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="Bullets">
	<div slot="preview" class="w-full">
		<Steps variant="bullets" {currentStep}>
			<Steps.Summary slot="summary">Step {currentStep} of {steps.length}</Steps.Summary>
			{#each steps as step, i}
				<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
					<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
				</Steps.Step>
			{/each}
		</Steps>
	</div>
	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<ExampleContainer title="Bullets & Text">
	<div slot="preview" class="w-full">
		<Steps variant="bullets-text" {currentStep}>
			{#each steps as step, i}
				<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
					<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
				</Steps.Step>
			{/each}
		</Steps>
	</div>
	<CodeBlock slot="code" language="svelte" code={example3} />
</ExampleContainer>

<ExampleContainer title="Circles & Text">
	<div slot="preview" class="w-full">
		<Steps variant="circles-text" {currentStep}>
			{#each steps as step, i}
				<Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
					<Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
					<Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
				</Steps.Step>
			{/each}
		</Steps>
	</div>
	<CodeBlock slot="code" language="svelte" code={example4} />
</ExampleContainer>

<PropsTable component="Steps" {props} />

<SlotsTable component="Steps" {slots} />

<PropsTable component="Steps.Step" props={stepProps} />

<SlotsTable component="Steps.Step" slots={stepSlots} />

<SlotsTable component="Steps.Step.Title" slots={titleSlots} />

<SlotsTable component="Steps.Step.Description" slots={descriptionSlots} />

<ClassTable component="Steps" {classList} />
