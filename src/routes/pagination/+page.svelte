<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Pagination } from '../../lib/components/pagination';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<CardHeader>Pagination</CardHeader>
		<CardContent class="p-4">
			<Pagination start={1} end={25} total={97} />
		</CardContent>
	</Card>
</Col>
