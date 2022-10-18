<script lang="ts">
	import { Alert, Button, Card, Col, Icon } from '../../lib';
	import { example, props, slots, iconSlots, titleSlots, descriptionSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { close, clear } from '../../lib/icons';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Alert>
				<Alert.Title slot="title">Title</Alert.Title>
			</Alert>
			<br />
			<Alert type="warn">
				<Alert.Title slot="title">Title</Alert.Title>
			</Alert>
			<br />
			<Alert type="error">
				<Alert.Icon slot="icon">
					<Icon data={clear} class="text-current" />
				</Alert.Icon>
				<Alert.Title slot="title">Title</Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
				<Button
					ariaLabel="close"
					slot="extra"
					shape="circle"
					class="top-[-0.5rem] right-[-0.5rem] text-error-icon dark:text-dark-error-icon"
					on:click={() => console.log('I clicked extra')}
				>
					<Icon slot="icon" data={close} let:size {size} />
				</Button>
			</Alert>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Alert" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Icon" slots={iconSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Description" slots={descriptionSlots} />
</Col>
