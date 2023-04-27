<script lang="ts">
	import { Card, Col, RadioGroup } from '../../lib';
	import {
		example,
		inlineExample,
		props,
		slots,
		labelSlots,
		radioProps,
		radioSlots,
		descriptionSlots,
		pillExample,
		gridExample
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let selected: string | undefined = undefined;
	let error: string | undefined = 'Here is an error!';
	$: if (selected) {
		error = undefined;
	} else {
		error = 'Here is an error!';
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<RadioGroup name="group-1">
				<RadioGroup.Radio value="radio-1">
					<RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">
					<RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">
					<RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">
					<RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
			</RadioGroup>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Group Label Inline with Description</Card.Header>
		<Card.Content slot="content" class="p-4">
			<RadioGroup name="group-2" selected="radio-2">
				<RadioGroup.Label name="label">Radio Group 2</RadioGroup.Label>
				<RadioGroup.Radio value="radio-1">
					<RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-1 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">
					<RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-2 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">
					<RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-3 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">
					<RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
					<RadioGroup.Radio.Description slot="description">
						Radio-4 Description
					</RadioGroup.Radio.Description>
				</RadioGroup.Radio>
			</RadioGroup>

			<br />

			<CodeBlock language="svelte" code={inlineExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">with Error</Card.Header>
		<Card.Content slot="content" class="p-4">
			<RadioGroup name="group-1" bind:selected {error}>
				<RadioGroup.Radio value="radio-1">
					<RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">
					<RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">
					<RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">
					<RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
				</RadioGroup.Radio>
			</RadioGroup>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Pill</Card.Header>
		<Card.Content slot="content" class="p-4">
			<RadioGroup name="group-3" type="pill">
				<RadioGroup.Radio value="radio-1">Radio-1</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">Radio-2</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">Radio-3</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">Radio-4</RadioGroup.Radio>
			</RadioGroup>

			<br />

			<CodeBlock language="svelte" code={pillExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Pill with label and grid</Card.Header>
		<Card.Content slot="content" class="p-4">
			<RadioGroup name="group-4" type="pill" class="grid-cols-2">
				<RadioGroup.Label slot="label">Radio Group 4</RadioGroup.Label>
				<RadioGroup.Radio value="radio-1">Radio-1</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-2">Radio-2</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-3">Radio-3</RadioGroup.Radio>
				<RadioGroup.Radio value="radio-4">Radio-4</RadioGroup.Radio>
			</RadioGroup>

			<br />

			<CodeBlock language="svelte" code={gridExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="RadioGroup" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="RadioGroup" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="RadioGroup.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="RadioGroup.Radio" props={radioProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="RadioGroup.Radio" slots={radioSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="RadioGroup.Radio.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="RadioGroup.Radio.Description" slots={descriptionSlots} />
</Col>
