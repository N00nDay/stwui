<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import Alert from '../../lib/components/alert';
	import Button from '../../lib/components/button';
	import Icon from '../../lib/components/icon';
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
					<Icon name="cancel" class="text-current" />
				</Alert.Icon>
				<Alert.Title slot="title"
					><span>Title</span>
					<Button
						class="top-[-0.65rem] right-[-0.65rem] text-error-icon dark:text-dark-error-icon"
						trailing="arrow_forward"
						type="danger"
						on:click={() => console.log('I clicked extra')}
					>
						Details
					</Button>
				</Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
			</Alert>
			<br />
			<Alert type="error">
				<Alert.Icon slot="icon">
					<Icon name="cancel" class="text-current" />
				</Alert.Icon>
				<Alert.Title slot="title"
					><span>Title</span>
					<Button
						shape="circle"
						class="top-[-0.65rem] right-[-0.65rem] text-error-icon dark:text-dark-error-icon"
						icon="cancel"
						on:click={() => console.log('I clicked extra')}
					/>
				</Alert.Title>
				<Alert.Description slot="description">I am a description</Alert.Description>
			</Alert>
		</Card.Content>
	</Card>
</Col>
