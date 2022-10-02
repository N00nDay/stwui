<script lang="ts">
	import { Alert, Button, Card, Col, Icon } from '../../lib';

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
					class="top-[-0.5rem] right-[-0.5rem] text-error-icon dark:text-dark-error-icon w-[181px]"
					type="danger"
					on:click={changeType}
				>
					Change Type
					<Button.Trailing slot="trailing">
						<Button.Trailing.Icon slot="icon" icon="arrow_forward" />
					</Button.Trailing>
				</Button>
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
		</Card.Content>
	</Card>
</Col>
