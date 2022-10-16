<script lang="ts">
	import { Card, Col, Progress } from '../../lib';
	import { example, props, radialExample, typeExample } from './examples';
	import { PropsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Progress value={25} />
			<br />
			<Progress value={50} />
			<br />
			<Progress value={75} displayValue />
			<br />
			<Progress value={100} />
			<br />
			<Progress value={0} indeterminate />

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Radial and Size</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Progress value={25} size="xs" />
			<br />
			<Progress value={50} size="sm" />
			<br />
			<Progress value={75} />
			<br />
			<Progress value={85} size="lg" />
			<br />
			<Progress value={100} size="xl" />
			<br />
			<Progress value={25} radial size="xs" />
			<Progress value={50} radial size="sm" />
			<Progress value={75} radial />
			<Progress value={85} radial size="lg" />
			<Progress value={100} radial size="xl" />

			<br />

			<CodeBlock language="svelte" code={radialExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Progress with Type</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Progress value={75} type="error" />
			<br />
			<Progress value={75} type="success" />
			<br />
			<Progress value={75} type="warn" />
			<br />
			<Progress value={75} />
			<br />
			<Progress value={75} radial type="error" />
			<Progress value={75} radial type="success" />
			<Progress value={75} radial type="warn" />
			<Progress value={75} radial />

			<br />

			<CodeBlock language="svelte" code={typeExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Progress" {props} />
</Col>
