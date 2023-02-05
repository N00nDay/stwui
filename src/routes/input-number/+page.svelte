<script lang="ts">
	import { Card, Col, InputNumber } from '../../lib';
	import { example, props, slots, labelSlots, iconProps } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { phone } from '../../docs/icons';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<InputNumber name="input-number-1" placeholder="Basic" />
			<br />
			<InputNumber name="input-number-2">
				<InputNumber.Label slot="label">Number</InputNumber.Label>
				<InputNumber.Trailing slot="trailing" data={phone} />
			</InputNumber>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="InputNumber" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="InputNumber" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="InputNumber.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="InputNumber.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="InputNumber.Trailing" props={iconProps} />
</Col>
