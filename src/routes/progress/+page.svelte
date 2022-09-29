<script lang="ts">
	import { Card, Col, Progress } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Progress</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Progress value={25} />
			<br />
			<Progress value={50} />
			<br />
			<Progress value={75} displayValue />
			<br />
			<Progress value={100} />
			<br />
			<Progress value={0} indeterminate />
			<br />
			<Progress value={25} radial size="xs" />
			<Progress value={50} radial size="sm" />
			<Progress value={75} radial />
			<Progress value={85} radial size="lg" />
			<Progress value={100} radial size="xl" />
			<br />
			<Progress value={75} radial type="error" />
			<Progress value={75} radial type="success" />
			<Progress value={75} radial type="warn" />
			<Progress value={75} radial />
		</Card.Content>
	</Card>
</Col>
