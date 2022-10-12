<script lang="ts">
	import { Button, Card, Col, Divider } from '../../lib';
	import { example, props, slots, iconProps, labelSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Divider</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Divider>
				<Divider.Label slot="label"><h3>Divider</h3></Divider.Label>
			</Divider>
			<Divider>
				<Divider.Icon slot="icon" icon="add" />
			</Divider>
			<Divider position="left">
				<Divider.Label slot="label">Divider</Divider.Label>
			</Divider>
			<Divider position="right">
				<Divider.Label slot="label">Divider</Divider.Label>
			</Divider>
			<Divider>
				<Button type="primary">I am a Button</Button>
			</Divider>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Divider" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Divider" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Divider.Label" slots={labelSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Divider.Icon" props={iconProps} />
</Col>
