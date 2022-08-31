<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Empty } from '../../lib/components/empty';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Empty</CardHeader>
		<CardContent class="p-4">
			<Empty
				icon="edit_document"
				title="No projects"
				description="Get started by creating a new project."
				button={{
					label: 'New Project',
					icon: 'add',
					onClick: () => console.log('clicked new project!')
				}}
			/>
		</CardContent>
	</Card>
</Col>
