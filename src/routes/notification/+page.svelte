<script lang="ts">
	import { Button, Card, Col, Icon, Notification } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Notification</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Notification>
				<Notification.Leading slot="leading">
					<Icon icon="account_tree" class="text-pink-500" />
				</Notification.Leading>
				<Notification.Content slot="content">
					<Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
					<Notification.Content.Description slot="description">
						Anyone with a link can now view this file.
					</Notification.Content.Description>
				</Notification.Content>
				<Notification.Extra slot="extra">
					<Button on:click={() => console.log('notification closed!')} shape="circle">
						<Button.Icon slot="icon" icon="close" />
					</Button>
				</Notification.Extra>
			</Notification>
			<br />
			<Notification type="success">
				<Notification.Content slot="content">
					<Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
					<Notification.Content.Description slot="description">
						Anyone with a link can now view this file.
					</Notification.Content.Description>
				</Notification.Content>
				<Notification.Extra slot="extra">
					<Button on:click={() => console.log('notification closed!')} shape="circle">
						<Button.Icon slot="icon" icon="close" />
					</Button>
				</Notification.Extra>
			</Notification>
			<br />
			<Notification type="info">
				<Notification.Content slot="content">
					<Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
					<Notification.Content.Description slot="description">
						Anyone with a link can now view this file.
					</Notification.Content.Description>
				</Notification.Content>
				<Notification.Extra slot="extra">
					<Button on:click={() => console.log('notification closed!')} shape="circle">
						<Button.Icon slot="icon" icon="close" />
					</Button>
				</Notification.Extra>
			</Notification>
			<br />
			<Notification>
				<Notification.Content slot="content">
					<Notification.Content.Description slot="description">
						Anyone with a link can now view this file.
					</Notification.Content.Description>
				</Notification.Content>
				<Notification.Extra slot="extra">
					<Button
						type="primary"
						size="sm"
						on:click={() => console.log('notification extra clicked!')}
						trailing="arrow_forward">Details</Button
					>
				</Notification.Extra>
			</Notification>
		</Card.Content>
	</Card>
</Col>
