<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Badge } from '../../lib/components/badge';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Badge</CardHeader>
		<CardContent class="p-4">
			<Badge content="Badge" />
			<Badge content="Badge" type="success" />
			<Badge content="Badge" type="warn" />
			<Badge content="Badge" type="error" />
			<br />
			<Badge content="Badge" size="large" />
			<Badge content="Badge" type="success" size="large" />
			<Badge content="Badge" type="warn" size="large" />
			<Badge content="Badge" type="error" size="large" />
			<br />
			<Badge content="Badge" withDot />
			<Badge content="Badge" type="success" withDot />
			<Badge content="Badge" type="warn" withDot />
			<Badge content="Badge" type="error" withDot />
			<br />
			<Badge content="Badge" shape="rounded" />
			<Badge content="Badge" type="success" shape="rounded" />
			<Badge content="Badge" type="warn" shape="rounded" />
			<Badge content="Badge" type="error" shape="rounded" />
			<br />
			<Badge content="Badge" onClose={() => console.log('clicked badge close')} />
			<Badge content="Badge" type="success" onClose={() => console.log('clicked badge close')} />
			<Badge content="Badge" type="warn" onClose={() => console.log('clicked badge close')} />
			<Badge content="Badge" type="error" onClose={() => console.log('clicked badge close')} />
		</CardContent>
	</Card>
</Col>
