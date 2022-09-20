<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import Badge from '../../lib/components/badge';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Badge</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge class="bg-green-800 text-green-200">Badge</Badge>
			<Badge class="bg-blue-800 text-blue-200">Badge</Badge>
			<Badge class="bg-red-800 text-red-200">Badge</Badge>
			<Badge class="bg-amber-800 text-amber-200">Badge</Badge>
			<br />
			<Badge type="info">Badge</Badge>
			<Badge type="success">Badge</Badge>
			<Badge type="warn">Badge</Badge>
			<Badge type="error">Badge</Badge>
			<br />
			<Badge type="info" size="large">Badge</Badge>
			<Badge type="success" size="large">Badge</Badge>
			<Badge type="warn" size="large">Badge</Badge>
			<Badge type="error" size="large">Badge</Badge>
			<br />
			<Badge type="info" withDot>Badge</Badge>
			<Badge type="success" withDot>Badge</Badge>
			<Badge type="warn" withDot>Badge</Badge>
			<Badge type="error" withDot>Badge</Badge>
			<br />
			<Badge type="info" shape="rounded">Badge</Badge>
			<Badge type="success" shape="rounded">Badge</Badge>
			<Badge type="warn" shape="rounded">Badge</Badge>
			<Badge type="error" shape="rounded">Badge</Badge>
			<br />
			<Badge type="info" onClose={() => console.log('clicked badge close')}>Badge</Badge>
			<Badge type="success" onClose={() => console.log('clicked badge close')}>Badge</Badge>
			<Badge type="warn" onClose={() => console.log('clicked badge close')}>Badge</Badge>
			<Badge type="error" onClose={() => console.log('clicked badge close')}>Badge</Badge>
		</Card.Content>
	</Card>
</Col>
