<script lang="ts">
	import { Card, Col, Select, Icon } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, CodeBlock, BetaComponent } from '../../docs';
	import { email } from '../../docs/icons';
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Select name="select-1" placeholder="Basic" options={['Option 1', 'Option 2', 'Option 3']} />
			<br />
			<Select name="select-2" options={['Option 1', 'Option 2', 'Option 3']}>
				<Select.Label slot="label">Label</Select.Label>
				<Icon slot="leading" path={email} />
			</Select>
			<br />
			<Select
				name="select-3"
				error="There has been an error"
				options={['Option 1', 'Option 2', 'Option 3']}
			>
				<Select.Label slot="label">Label</Select.Label>
				<Icon slot="leading" path={email} />
			</Select>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Select" {props} />
</Col>
