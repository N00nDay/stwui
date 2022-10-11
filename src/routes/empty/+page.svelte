<script lang="ts">
	import { Button, Card, Col, Empty } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import { example, slots, iconProps, titleSlots, descriptionSlots } from './examples';
	import { PropsTable, SlotsTable } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Empty</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Empty>
				<Empty.Icon slot="icon" icon="edit_document" />
				<Empty.Title slot="title">No Projects</Empty.Title>
				<Empty.Description slot="description"
					>Get started by creating a new project.</Empty.Description
				>
				<Button class="mt-6" type="primary" on:click={() => console.log('clicked new project')}>
					<Button.Leading slot="leading">
						<Button.Leading.Icon slot="icon" icon="add" />
					</Button.Leading>
					New Project</Button
				>
			</Empty>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<SlotsTable component="Empty" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Empty.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Empty.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Empty.Description" slots={descriptionSlots} />
</Col>
