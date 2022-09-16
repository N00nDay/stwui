<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Chip } from '../../lib/components/chip';

	const details = {
		avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		name: 'Castor Troy'
	};
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Chip</CardHeader>
		<CardContent class="p-4">
			<Chip {details} size="xs" />
			<Chip {details} size="sm" type="success" />
			<Chip {details} type="warn" />
			<Chip {details} size="lg" type="error" />
			<Chip {details} size="xl" />
		</CardContent>
	</Card>
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Chip</CardHeader>
		<CardContent class="p-4">
			<Chip type="info" {details} onClose={() => console.log('chip closed!')} />
			<Chip {details} onClose={() => console.log('chip closed!')} />
		</CardContent>
	</Card>
</Col>
