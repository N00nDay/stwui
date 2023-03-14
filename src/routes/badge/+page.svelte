<script lang="ts">
	import { Badge, Card, Col } from '../../lib';
	import {
		exampleDefault,
		exampleCustom,
		exampleLarge,
		exampleIndicator,
		exampleShape,
		exampleClose,
		props,
		slots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge>Default</Badge>
			<Badge type="info">Default</Badge>
			<Badge type="success">Default</Badge>
			<Badge type="warn">Default</Badge>
			<Badge type="error">Default</Badge>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleDefault} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Custom</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge class="bg-green-800 text-green-200 bg-opacity-100">Custom</Badge>
			<Badge class="bg-blue-800 text-blue-200 bg-opacity-100">Custom</Badge>
			<Badge class="bg-red-800 text-red-200 bg-opacity-1000">Custom</Badge>
			<Badge class="bg-amber-800 text-amber-200 bg-opacity-100">Custom</Badge>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleCustom} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Large</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge size="large">Large</Badge>
			<Badge type="info" size="large">Large</Badge>
			<Badge type="success" size="large">Large</Badge>
			<Badge type="warn" size="large">Large</Badge>
			<Badge type="error" size="large">Large</Badge>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleLarge} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Indicator</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge>
				<Badge.Indicator slot="indicator" />
				Indicator
			</Badge>
			<Badge type="info">
				<Badge.Indicator slot="indicator" />
				Indicator
			</Badge>
			<Badge type="success">
				<Badge.Indicator slot="indicator" />
				Indicator
			</Badge>
			<Badge type="warn"
				><Badge.Indicator slot="indicator" />
				Indicator
			</Badge>
			<Badge type="error"
				><Badge.Indicator slot="indicator" />
				Indicator
			</Badge>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleIndicator} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Shape</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge shape="rounded">Shape</Badge>
			<Badge type="info" shape="rounded">Shape</Badge>
			<Badge type="success" shape="rounded">Shape</Badge>
			<Badge type="warn" shape="rounded">Shape</Badge>
			<Badge type="error" shape="rounded">Shape</Badge>
			<br />
			<Badge shape="square">Shape</Badge>
			<Badge type="info" shape="square">Shape</Badge>
			<Badge type="success" shape="square">Shape</Badge>
			<Badge type="warn" shape="square">Shape</Badge>
			<Badge type="error" shape="square">Shape</Badge>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleShape} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Close</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Badge>
				Close
				<Badge.Close slot="close" on:click={() => console.log('clicked badge close')} />
			</Badge>
			<Badge type="info">
				Close
				<Badge.Close slot="close" on:click={() => console.log('clicked badge close')} />
			</Badge>
			<Badge type="success">
				Close
				<Badge.Close slot="close" on:click={() => console.log('clicked badge close')} />
			</Badge>
			<Badge type="warn">
				Close
				<Badge.Close slot="close" on:click={() => console.log('clicked badge close')} />
			</Badge>
			<Badge type="error">
				Close
				<Badge.Close slot="close" on:click={() => console.log('clicked badge close')} />
			</Badge>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleClose} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Badge" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Badge" {slots} />
</Col>
