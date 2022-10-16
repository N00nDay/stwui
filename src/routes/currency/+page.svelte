<script lang="ts">
	import { Card, Col, Currency } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Currency name="currency-1" placeholder="Basic" />
			<br />
			<Currency name="currency-2" label="Label" leading="email" trailing="phone" />
			<br />
			<Currency
				name="currency-3"
				label="Label"
				leading="email"
				trailing="phone"
				error="There has been an error"
			/>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Input" {props} />
</Col>
