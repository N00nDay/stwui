<script lang="ts">
	import { Slider } from '../../lib';
	import {
		example,
		exampleType,
		exampleStep,
		exampleShowStep,
		props,
		usage,
		classList
	} from './examples';
	import { PropsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Slider value={50} />
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="Type">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Slider value={20} type="info" />

		<Slider value={40} type="warn" />

		<Slider value={60} type="error" />

		<Slider value={80} type="success" />
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleType} />
</ExampleContainer>

<ExampleContainer title="Step">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Slider value={20} type="info" step={25} />
		<br />
		<Slider value={40} type="warn" step={10} />
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleStep} />
</ExampleContainer>

<ExampleContainer title="Show Step">
	<div slot="preview" class="w-full flex flex-col gap-2 items-center justify-center">
		<Slider value={20} type="info" step={25} showStep />
		<br />
		<Slider value={40} type="warn" step={10} showStep />
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleShowStep} />
</ExampleContainer>

<PropsTable component="Slider" {props} />

<ClassTable component="Slider" {classList} />
