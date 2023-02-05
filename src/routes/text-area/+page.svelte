<script lang="ts">
	import { Card, Col, TextArea } from '../../lib';
	import { example, props, slots, labelSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<TextArea name="input-1" placeholder="Basic" />
			<br />
			<TextArea name="input-2">
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>
			<br />
			<TextArea name="input-3" {error} bind:value>
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="TextArea" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="TextArea" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="TextArea.Label" slots={labelSlots} />
</Col>
