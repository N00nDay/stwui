<script lang="ts">
	import { Alert, Button, Card, Col, Icon, Table } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import { exampleSvelte, propColumns, props, slotColumns, slots } from './examples';

	type Type = 'info' | 'warn' | 'error' | 'success';
	const types: Type[] = ['info', 'warn', 'error', 'success'];

	let type: Type = 'error';

	function changeType() {
		let index = types.indexOf(type);
		if (index === 3) {
			type = types[0];
		} else {
			type = types[index + 1];
		}
	}
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

			<CodeBlock language="html" code={exampleSvelte} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Dynamic</Card.Header>
		<Card.Content slot="content">
			<Alert {type}>
				<Alert.Icon slot="icon">
					<Icon
						icon={type === 'error'
							? 'cancel'
							: type === 'success'
							? 'check_circle'
							: type === 'info'
							? 'info'
							: 'error'}
						class="text-current"
					/>
				</Alert.Icon>
				<Alert.Title slot="title"><span>Title</span></Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
				<Button
					slot="extra"
					size="sm"
					class="top-[-0.5rem] right-[-0.5rem] text-error-icon dark:text-dark-error-icon"
					type="danger"
					on:click={changeType}
				>
					View
					<Button.Trailing slot="trailing">
						<Button.Trailing.Icon slot="icon" icon="arrow_forward" />
					</Button.Trailing>
				</Button>
			</Alert>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<h1 class="mb-4 mt-8 text-xl font-semibold">Alert Props</h1>
	<Card bordered={false}>
		<Table class="rounded-md overflow-hidden h-full" columns={propColumns}>
			<Table.Header sortable={false} />
			<Table.Body>
				{#each props as prop}
					<Table.Body.Row
						id={prop.id}
						class="cursor-default hover:bg-light-surface dark:hover:bg-dark-surface"
					>
						<Table.Body.Row.Cell column={0}>{prop.prop}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={1}>{prop.type}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={2}>{prop.default}</Table.Body.Row.Cell>
					</Table.Body.Row>
				{/each}
			</Table.Body>
		</Table>
	</Card>
</Col>

<Col class="col-24">
	<h1 class="mb-4 mt-8 text-xl font-semibold">Alert Slots</h1>
	<Card bordered={false}>
		<Table class="rounded-md overflow-hidden h-full" columns={slotColumns}>
			<Table.Header sortable={false} />
			<Table.Body>
				{#each slots as slot}
					<Table.Body.Row
						id={slot.id}
						class="cursor-default hover:bg-light-surface dark:hover:bg-dark-surface"
					>
						<Table.Body.Row.Cell column={0}>{slot.slot}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={1}>{slot.component}</Table.Body.Row.Cell>
					</Table.Body.Row>
				{/each}
			</Table.Body>
		</Table>
	</Card>
</Col>
