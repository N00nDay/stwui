<script lang="ts">
	import { Card, Col, Input } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Inputs</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Input name="input-1" placeholder="Basic" allowClear />
			<br />
			<Input name="input-2" label="Label" leading="email" trailing="phone" allowClear />
			<br />
			<Input
				name="input-3"
				label="Label"
				leading="email"
				trailing="phone"
				error="There has been an error"
				handleLeadingClick={() => console.log('clicking leading')}
			/>
			<br />
			<Input type="password" name="input-4" label="Password" leading="lock" showPasswordToggle />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Input" {props} />
</Col>
