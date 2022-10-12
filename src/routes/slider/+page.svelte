<script lang="ts">
	import { Card, Col, Slider } from '../../lib';
	import { example, stepExample, props } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Slider value={20} />

			<Slider value={40} type="warn" />

			<Slider value={60} type="error" />

			<Slider value={80} type="success" />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Step and Show Step</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Slider value={20} class="mb-4" step={25} showStep />

			<Slider value={40} type="warn" step={10} showStep />

			<br />

			<CodeBlock language="svelte" code={stepExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Slider" {props} />
</Col>
