<script lang="ts">
	import { Alert, Button, Card, Col, Icon } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import { example, props, slots, iconProps } from './examples';
	import { PropsTable, SlotsTable } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Alert</Card.Header>
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
					<Icon icon="cancel" class="text-current" />
				</Alert.Icon>
				<Alert.Title slot="title"><span>Title</span></Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
				<Button
					slot="extra"
					shape="circle"
					class="top-[-0.5rem] right-[-0.5rem] text-error-icon dark:text-dark-error-icon"
					on:click={() => console.log('I clicked extra')}
				>
					<Button.Icon slot="icon" icon="close" />
				</Button>
			</Alert>

			<br />

			<CodeBlock language="typescript" code={example} />
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
	<PropsTable component="Alert.Icon" props={iconProps} />
</Col>
