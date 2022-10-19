<script lang="ts">
	import { Button, Card, Col, Empty } from '../../lib';
	import { example, slots, iconProps, titleSlots, descriptionSlots, actionSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	import { plus_circle, lock } from '../../docs/icons';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Empty>
				<Empty.Icon slot="icon" data={lock} />
				<Empty.Title slot="title">No Projects</Empty.Title>
				<Empty.Description slot="description">
					Get started by creating a new project.
				</Empty.Description>
				<Empty.Action slot="action">
					<Button type="primary" on:click={() => console.log('clicked new project')}>
						<Button.Leading slot="leading" data={plus_circle} />
						New Project
					</Button>
				</Empty.Action>
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

<Col class="col-24">
	<SlotsTable component="Empty.Action" slots={actionSlots} />
</Col>
