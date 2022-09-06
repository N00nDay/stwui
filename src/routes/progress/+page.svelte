<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Progress } from '../../lib/components/progress';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Progress</CardHeader>
		<CardContent class="p-4">
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
		</CardContent>
	</Card>
</Col>
