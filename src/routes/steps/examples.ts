import type { Slot, Prop, IClass } from '../../docs';

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

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-steps-simple-wrapper'
	},
	{
		id: '2',
		class: 'stwui-steps-bullets-wrapper'
	},
	{
		id: '3',
		class: 'stwui-steps-bullets-text-wrapper'
	},
	{
		id: '4',
		class: 'stwui-steps-circles-text-wrapper'
	},
	{
		id: '5',
		class: 'stwui-steps-step-bullet-previous'
	},
	{
		id: '6',
		class: 'stwui-steps-step-bullet-current'
	},
	{
		id: '7',
		class: 'stwui-steps-step-bullet-next'
	},
	{
		id: '8',
		class: 'stwui-steps-step-simple-previous'
	},
	{
		id: '9',
		class: 'stwui-steps-step-simple-current'
	},
	{
		id: '10',
		class: 'stwui-steps-step-simple-next'
	},
	{
		id: '11',
		class: 'stwui-steps-summary'
	},
	{
		id: '12',
		class: 'stwui-steps-step-bullets-title-previous'
	},
	{
		id: '13',
		class: 'stwui-steps-step-bullets-title-current'
	},
	{
		id: '14',
		class: 'stwui-steps-step-bullets-title-next'
	},
	{
		id: '15',
		class: 'stwui-steps-step-simple-title-previous'
	},
	{
		id: '16',
		class: 'stwui-steps-step-simple-title-current'
	},
	{
		id: '17',
		class: 'stwui-steps-step-simple-title-next'
	},
	{
		id: '18',
		class: 'stwui-steps-step-circles-title-previous'
	},
	{
		id: '19',
		class: 'stwui-steps-step-circles-title-current'
	},
	{
		id: '20',
		class: 'stwui-steps-step-circles-title-next'
	},
	{
		id: '21',
		class: 'stwui-steps-step-circle-description'
	},
	{
		id: '22',
		class: 'stwui-steps-step-simple-description'
	},
	{
		id: '23',
		class: 'stwui-steps-step-simple-previous-description'
	}
];

export const usage = `
import { Steps } from 'stwui';
// OR
import Steps from 'stwui/steps'; // for tree shaking
`;

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
