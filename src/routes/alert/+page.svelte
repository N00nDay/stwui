<script lang="ts">
	import { Alert, Button, Card, Col } from '../../lib';
	import {
		example,
		props,
		slots,
		iconProps,
		titleSlots,
		descriptionSlots,
		extraSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { close, clear, thumb_up } from '../../lib/icons';

	let type: 'info' | 'warn' | 'success' | 'error' = 'info';

	function handleClick() {
		if (type === 'info') {
			type = 'success';
		} else {
			type = 'info';
		}
	}
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
				<Alert.Leading slot="leading" data={clear} />
				<Alert.Title slot="title">Title</Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
				<Alert.Extra slot="extra">
					<Button ariaLabel="close" shape="circle" on:click={() => console.log('I clicked extra')}>
						<Button.Icon slot="icon" data={close} />
					</Button>
				</Alert.Extra>
			</Alert>

			<br />
			<Alert {type}>
				<Alert.Leading slot="leading" data={type === 'info' ? clear : thumb_up} />
				<Alert.Title slot="title">Title</Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
				<Alert.Extra slot="extra">
					<Button type="primary" on:click={handleClick}>Toggle</Button>
				</Alert.Extra>
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
	<PropsTable component="Alert.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Alert.Extra" slots={extraSlots} />
</Col>
