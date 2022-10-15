<script lang="ts">
	import { Card, Col, Pagination, Divider } from '../../lib';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent, CodeBlock } from '../../docs';
</script>

<Col class="col-24 mb-4">
	<h1 class="text-light-content dark:text-dark-content mb-0">Pagination</h1>
	<Divider />
</Col>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Pagination start={1} end={25} total={97} />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Alert" {props} />
</Col>
