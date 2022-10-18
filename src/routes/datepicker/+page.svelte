<script lang="ts">
	import { Card, Col, DatePicker, Icon } from '../../lib';
	import {
		example,
		props,
		slots,
		labelSlots,
		leadingSlots,
		trailingSlots,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, UpdatedComponent, CodeBlock } from '../../docs';
	import { phone } from '../../docs/icons';
	import { calendar } from '../../lib/icons';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<DatePicker name="date-1" placeholder="Basic" />
			<br />
			<br />
			<DatePicker name="date-2" label="Date" max={date2Max} min={date2Min}>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Trailing slot="trailing">
					<DatePicker.Trailing.Icon slot="icon" data={calendar} />
				</DatePicker.Trailing>
			</DatePicker>
			<br />
			<br />
			<DatePicker name="date-3" min={date2Min} error="Your doing it wrong">
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Leading slot="leading">
					<DatePicker.Leading.Icon slot="icon" data={phone} />
				</DatePicker.Leading>
			</DatePicker>

			<br />
			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="DatePicker" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="DatePicker" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="DatePicker.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="DatePicker.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="DatePicker.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="DatePicker.Trailing" slots={trailingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="DatePicker.Trailing.Icon" props={iconProps} />
</Col>
