<script lang="ts">
	import { Card, Col, Currency, Icon } from '../../lib';
	import {
		example,
		props,
		slots,
		leadingSlots,
		labelSlots,
		trailingSlots,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, UpdatedComponent, CodeBlock } from '../../docs';
	import { email, phone } from '../../docs/icons';
	import { currency_usd } from '../../lib/icons';
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Currency name="currency-1" placeholder="Basic" />
			<br />
			<Currency name="currency-2">
				<Currency.Label slot="label">Label</Currency.Label>
				<Currency.Leading slot="leading">
					<Currency.Leading.Icon data={currency_usd} />
				</Currency.Leading>
				<Currency.Trailing slot="trailing">
					<Currency.Trailing.Icon data={phone} />
				</Currency.Trailing>
			</Currency>
			<br />
			<Currency name="currency-3" error="There has been an error">
				<Currency.Label slot="label">Label</Currency.Label>
				<Currency.Leading slot="leading">
					<Currency.Leading.Icon data={email} />
				</Currency.Leading>
			</Currency>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Currency" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Currency" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Currency.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Currency.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Currency.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Currency.Trailing" slots={trailingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Currency.Trailing.Icon" props={iconProps} />
</Col>
