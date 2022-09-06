<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Breadcrumbs } from '../../lib/components/breadcrumbs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Breadcrumbs</CardHeader>
		<CardContent class="p-4">
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
		</CardContent>
	</Card>
</Col>
