<script lang="ts">
	import { Card, Col, Currency, Input, TextArea } from '../../lib';
	import { example, currencyExample, textareaExample, props } from './examples';
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
			/>
			<br />
			<Input type="password" name="input-4" label="Password" leading="lock" showPasswordToggle />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Currency Input</Card.Header>
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

			<CodeBlock language="svelte" code={currencyExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">TextArea</Card.Header>
		<Card.Content slot="content" class="p-4">
			<TextArea name="input-1" placeholder="Basic" />
			<br />
			<TextArea name="input-2" label="Label" leading="email" trailing="phone" />
			<br />
			<TextArea
				name="input-3"
				label="Label"
				leading="email"
				trailing="phone"
				error="There has been an error"
			/>

			<br />

			<CodeBlock language="svelte" code={textareaExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Input" {props} />
</Col>
