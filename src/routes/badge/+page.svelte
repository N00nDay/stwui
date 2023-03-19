<script lang="ts">
	import { Badge, Card, Col } from '../../lib';
	import {
		typeExample,
		customeExample,
		sizeExample,
		indicatorExample,
		shapeExample,
		closeExample,
		props,
		slots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<Col class="col-24 example-container">
	<ExampleContainer title="With Type">
		<div slot="preview" class="w-full block m-auto gap-2 text-center">
			<Badge>default</Badge>
			<Badge type="info">info</Badge>
			<Badge type="success">success</Badge>
			<Badge type="warn">warn</Badge>
			<Badge type="error">error</Badge>
		</div>

		<CodeBlock slot="code" language="svelte" code={typeExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Custom Colors">
		<div slot="preview" class="w-full block m-auto gap-2 text-center">
			<Badge class="bg-green-800 text-green-200">bg-green-800</Badge>
			<Badge class="bg-blue-800 text-blue-200">bg-blue-800</Badge>
			<Badge class="bg-red-800 text-red-200">bg-red-800</Badge>
			<Badge class="bg-amber-800 text-amber-200">bg-amber-800</Badge>
		</div>

		<CodeBlock slot="code" language="svelte" code={customeExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Size">
		<div slot="preview" class="w-full block m-auto gap-2 text-center">
			<Badge size="large">Large</Badge>
			<Badge size="large" type="info">Large</Badge>
			<Badge size="large" type="success">Large</Badge>
			<Badge size="large" type="warn">Large</Badge>
			<Badge size="large" type="error">Large</Badge>
		</div>

		<CodeBlock slot="code" language="svelte" code={sizeExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Indicator">
		<div slot="preview" class="w-full block m-auto gap-2 text-center">
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
		</div>

		<CodeBlock slot="code" language="svelte" code={indicatorExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Shape">
		<div slot="preview" class="w-full block m-auto gap-2 text-center">
			<Badge shape="rounded">rounded</Badge>
			<Badge type="info" shape="rounded">rounded</Badge>
			<Badge type="success" shape="rounded">rounded</Badge>
			<Badge type="warn" shape="rounded">rounded</Badge>
			<Badge type="error" shape="rounded">rounded</Badge>
			<br />
			<Badge shape="square">square</Badge>
			<Badge type="info" shape="square">square</Badge>
			<Badge type="success" shape="square">square</Badge>
			<Badge type="warn" shape="square">square</Badge>
			<Badge type="error" shape="square">square</Badge>
		</div>

		<CodeBlock slot="code" language="svelte" code={shapeExample} />
	</ExampleContainer>
</Col>

<Col class="col-24 example-container">
	<ExampleContainer title="With Close">
		<div slot="preview" class="w-full block m-auto gap-2 text-center">
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
		</div>

		<CodeBlock slot="code" language="svelte" code={closeExample} />
	</ExampleContainer>
</Col>

<Col class="col-24">
	<PropsTable component="Badge" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Badge" {slots} />
</Col>
