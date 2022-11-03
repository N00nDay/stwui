<script lang="ts">
	import { Card, Col, DatePicker } from '../../lib';
	import { example, props, slots, labelSlots, iconProps } from './examples';
	import { PropsTable, SlotsTable, UpdatedComponent, CodeBlock } from '../../docs';
	import { phone } from '../../docs/icons';
	import { calendar } from '../../lib/icons';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);

	let value: Date | null;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}

	$: console.log('value', value);
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
				<DatePicker.Trailing slot="trailing" data={calendar} />
			</DatePicker>
			<br />
			<br />
			<DatePicker name="date-3" min={date2Min} {error} bind:value allowClear>
				<DatePicker.Label slot="label">Date</DatePicker.Label>
				<DatePicker.Leading slot="leading" data={phone} />
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
	<PropsTable component="DatePicker.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="DatePicker.Trailing" props={iconProps} />
</Col>
