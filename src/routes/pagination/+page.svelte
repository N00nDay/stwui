<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import { Pagination } from '../../lib/components/pagination';
</script>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Pagination</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Pagination start={1} end={25} total={97} />
		</Card.Content>
	</Card>
</Col>
