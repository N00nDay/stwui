<script lang="ts">
	import { Progress } from '../../lib';
	import { example, props, radialExample, typeExample, usage } from './examples';
	import { PropsTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full max-w-xl block m-auto">
		<Progress value={25} />
		<br />
		<Progress value={50} />
		<br />
		<Progress value={75} displayValue />
		<br />
		<Progress value={100} />
		<br />
		<Progress value={0} indeterminate />
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="Radial and Size">
	<div slot="preview" class="w-full max-w-xl block m-auto">
		<Progress value={25} size="xs" />
		<br />
		<Progress value={50} size="sm" />
		<br />
		<Progress value={75} />
		<br />
		<Progress value={85} size="lg" />
		<br />
		<Progress value={100} size="xl" />
		<br />
		<Progress value={25} radial size="xs" displayValue />
		<Progress value={50} radial size="sm" />
		<Progress value={75} radial />
		<Progress value={85} radial size="lg" displayValue />
		<Progress value={100} radial size="xl" />
	</div>
	<CodeBlock slot="code" language="svelte" code={radialExample} />
</ExampleContainer>

<ExampleContainer title="Progress with Type">
	<div slot="preview" class="w-full max-w-xl block m-auto">
		<Progress value={75} type="error" />
		<br />
		<Progress value={75} type="success" />
		<br />
		<Progress value={75} type="warn" />
		<br />
		<Progress value={75} />
		<br />
		<Progress value={75} radial type="error" displayValue />
		<Progress value={75} radial type="success" displayValue />
		<Progress value={75} radial type="warn" displayValue />
		<Progress value={75} radial displayValue />
	</div>
	<CodeBlock slot="code" language="svelte" code={typeExample} />
</ExampleContainer>

<PropsTable component="Progress" {props} />
