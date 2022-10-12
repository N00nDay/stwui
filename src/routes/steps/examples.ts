import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'variant',
		type: "'simple' | 'bullets' | 'bullets-text' | 'circles-text'",
		default: 'info'
	},
	{
		id: '2',
		prop: 'currentStep',
		type: 'number',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'summary',
		component: '<Steps.Summary slot="summary" />'
	},
	{
		id: '2',
		slot: 'default',
		component: '<Steps.Step />'
	}
];

export const summarySlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const stepProps: Prop[] = [
	{
		id: '1',
		prop: 'href',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'step',
		type: 'number',
		default: ''
	}
];

export const stepSlots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<Steps.Step.Title slot="title" />'
	},
	{
		id: '1',
		slot: 'description',
		component: '<Steps.Step.Description slot="description" />'
	}
];

export const titleSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const descriptionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example1 = `
<script lang="ts">
	import { Steps } from 'stwui';

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

<Steps {currentStep}>
   {#each steps as step, i}
      <Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
         <Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
         <Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
      </Steps.Step>
   {/each}
</Steps>`;

export const example2 = `
<script lang="ts">
	import { Steps } from 'stwui';

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

<Steps variant="bullets" {currentStep}>
   <Steps.Summary slot="summary">Step {currentStep} of {steps.length}</Steps.Summary>
   {#each steps as step, i}
      <Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
         <Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
      </Steps.Step>
   {/each}
</Steps>`;

export const example3 = `
<script lang="ts">
	import { Steps } from 'stwui';

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

<Steps variant="bullets-text" {currentStep}>
   {#each steps as step, i}
      <Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
         <Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
      </Steps.Step>
   {/each}
</Steps>`;

export const example4 = `
<script lang="ts">
	import { Steps } from 'stwui';

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

<Steps variant="circles-text" {currentStep}>
   {#each steps as step, i}
      <Steps.Step step={i + 1} href={step.href} on:click={() => (currentStep = i + 1)}>
         <Steps.Step.Title slot="title">{step.title}</Steps.Step.Title>
         <Steps.Step.Description slot="description">{step.description}</Steps.Step.Description>
      </Steps.Step>
   {/each}
</Steps>`;
