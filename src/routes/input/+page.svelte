<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Input } from '../../lib/components/input';
	import { Currency } from '../../lib/components/currency';
	import { TextArea } from '../../lib/components/textarea';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Inputs</CardHeader>
		<CardContent class="p-4">
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
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Currency Input</CardHeader>
		<CardContent class="p-4">
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
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>TextArea</CardHeader>
		<CardContent class="p-4">
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
		</CardContent>
	</Card>
</Col>