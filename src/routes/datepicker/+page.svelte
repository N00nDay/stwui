<script lang="ts">
	import { Card, Col, DatePicker } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock } from '../../docs';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<DatePicker name="date-1" />
			<br />
			<DatePicker name="date-2" label="Date" max={date2Max} min={date2Min} />
			<br />
			<DatePicker name="date-3" label="Date" min={date2Min} error="Your doing it wrong" />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="DatePicker" {props} />
</Col>
