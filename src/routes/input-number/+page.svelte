<script lang="ts">
	import { Card, Col, InputNumber } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Input Number</Card.Header>
		<Card.Content slot="content" class="p-4">
			<InputNumber name="input-number-1" placeholder="Basic" />
			<br />
			<InputNumber name="input-number-2" label="Number" trailing="phone" />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Input" {props} />
</Col>