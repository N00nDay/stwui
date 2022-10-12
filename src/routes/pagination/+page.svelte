<script lang="ts">
	import { Card, Col, Pagination } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import { example, props } from './examples';
	import { PropsTable, BetaComponent } from '../../docs';
</script>

<Col class="col-24">
	<BetaComponent />
</Col>

<Col class="col-24">
	<Card bordered={false}>
		<Card.Header slot="header">Pagination</Card.Header>
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
