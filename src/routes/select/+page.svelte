<script lang="ts">
	import { Card, Col, Select } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, CodeBlock, BetaComponent } from '../../docs';
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Select</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Select name="select-1" placeholder="Basic" options={['Option 1', 'Option 2', 'Option 3']} />
			<br />
			<Select
				name="select-2"
				label="Label"
				leading="email"
				trailing="phone"
				options={['Option 1', 'Option 2', 'Option 3']}
			/>
			<br />
			<Select
				name="select-3"
				label="Label"
				leading="email"
				trailing="phone"
				error="There has been an error"
				options={['Option 1', 'Option 2', 'Option 3']}
			/>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Alert" {props} />
</Col>
