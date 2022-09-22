<script lang="ts">
	import { Card, Col } from '../../lib';
	import { Notification } from '../../lib/components/notification';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Notification</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Notification
				title="Successfully Saved!"
				description="Anyone with a link can now view this file."
				icon="check_circle"
				iconColor="text-pink-500"
				onClose={() => console.log('notification closed!')}
			/>
			<br />
			<Notification
				type="success"
				title="Successfully Saved!"
				description="Anyone with a link can now view this file."
				onClose={() => console.log('notification closed!')}
			/>
			<br />
			<Notification
				type="info"
				title="Successfully Saved!"
				description="Anyone with a link can now view this file."
				onClose={() => console.log('notification closed!')}
			/>
			<br />
			<Notification
				description="Form submitted"
				extra={{
					label: 'Details',
					trailing: 'arrow_forward',
					onClick: () => {
						console.log('Extra clicked!');
					}
				}}
			/>
		</Card.Content>
	</Card>
</Col>
