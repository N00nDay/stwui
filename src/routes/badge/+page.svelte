<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Badge } from '../../lib/components/badge';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Badge</CardHeader>
		<CardContent class="p-4">
			<Badge>Badge</Badge>
			<Badge type="success">Badge</Badge>
			<Badge type="warn">Badge</Badge>
			<Badge type="error">Badge</Badge>
			<br />
			<Badge size="large">Badge</Badge>
			<Badge type="success" size="large">Badge</Badge>
			<Badge type="warn" size="large">Badge</Badge>
			<Badge type="error" size="large">Badge</Badge>
			<br />
			<Badge withDot>Badge</Badge>
			<Badge type="success" withDot>Badge</Badge>
			<Badge type="warn" withDot>Badge</Badge>
			<Badge type="error" withDot>Badge</Badge>
			<br />
			<Badge shape="rounded">Badge</Badge>
			<Badge type="success" shape="rounded">Badge</Badge>
			<Badge type="warn" shape="rounded">Badge</Badge>
			<Badge type="error" shape="rounded">Badge</Badge>
			<br />
			<Badge onClose={() => console.log('clicked badge close')}>Badge</Badge>
			<Badge type="success" onClose={() => console.log('clicked badge close')}>Badge</Badge>
			<Badge type="warn" onClose={() => console.log('clicked badge close')}>Badge</Badge>
			<Badge type="error" onClose={() => console.log('clicked badge close')}>Badge</Badge>
		</CardContent>
	</Card>
</Col>
