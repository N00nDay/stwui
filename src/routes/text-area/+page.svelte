<script lang="ts">
	import { Card, Col, TextArea } from '../../lib';
	import { example, props, slots, labelSlots } from './examples';
	import { PropsTable, SlotsTable, UpdatedComponent, CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<UpdatedComponent version="v0.0.28-next" />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<TextArea name="input-1" placeholder="Basic" />
			<br />
			<TextArea name="input-2">
				<TextArea.Label slot="label">Label</TextArea.Label>
			</TextArea>
			<br />
			<TextArea name="input-3" error="There has been an error">
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
