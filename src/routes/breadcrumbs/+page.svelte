<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Breadcrumbs, Card } from '../../lib';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Breadcrumbs</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Breadcrumbs
				crumbs={[
					{ icon: 'home', href: '/' },
					{ label: 'Projects', href: '/projecs' },
					{ label: 'Project Nero', href: '/projects/project-nero' }
				]}
			/>
			<br />
			<br />
			<Breadcrumbs
				type="solid"
				crumbs={[
					{ icon: 'home', href: '/' },
					{ label: 'Projects', href: '/projecs' },
					{ label: 'Project Nero', href: '/projects/project-nero' }
				]}
			/>
		</Card.Content>
	</Card>
</Col>
