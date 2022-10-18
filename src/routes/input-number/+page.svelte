<script lang="ts">
	import { Card, Col, Icon, InputNumber } from '../../lib';
	import { example, props, slots, leadingSlots, labelSlots, trailingSlots } from './examples';
	import { PropsTable, SlotsTable, UpdatedComponent, CodeBlock } from '../../docs';
	import { phone } from '../../docs/icons';
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<InputNumber name="input-number-1" placeholder="Basic" />
			<br />
			<InputNumber name="input-number-2">
				<InputNumber.Label slot="label">Number</InputNumber.Label>
				<InputNumber.Trailing slot="trailing">
					<Icon data={phone} />
				</InputNumber.Trailing>
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
	<SlotsTable component="InputNumber.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="InputNumber.Trailing" slots={trailingSlots} />
</Col>
