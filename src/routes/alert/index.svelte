<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Alert } from '../../lib/components/alert';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Alert</CardHeader>
		<CardContent class="p-4">
			<Alert title="Title" />
			<br />
			<Alert title="Title" type="warn" />
			<br />
			<Alert
				title="Title"
				description="I am a description"
				type="error"
				extra={{
					label: 'Details',
					trailing: 'arrow_forward',
					onClick: () => {
						console.log('Extra clicked!');
					}
				}}
			/>
			<br />
			<Alert
				title="Title"
				description="I am a description"
				type="success"
				onClose={() => console.log('Close clicked!')}
			/>
		</CardContent>
	</Card>
</Col>
