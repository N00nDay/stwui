<script lang="ts">
	import { Card, Row, Col, Divider } from '../../lib';
	import { example1, example2, example3, example4, rowProps, rowSlots, colSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	const defaultClass = 'flex items-center justify-center h-12 text-primary-content';

	const lightBlock = defaultClass + ' bg-blue-500';
	const darkBlock = defaultClass + ' bg-primary';

	const lightBlockWithSpacing = defaultClass + ' bg-blue-500 py-4 my-2';
	const darkBlockWithSpacing = defaultClass + ' bg-primary py-4 my-2';
</script>

<Col class="col-24">
	<Card>
		<Card.Header>Basic Grid</Card.Header>
		<Card.Content>
			<Row>
				<Col class="col-24">
					<div class={lightBlockWithSpacing}>col-24</div>
				</Col>
			</Row>
			<Row>
				<Col class="col-12">
					<div class={lightBlockWithSpacing}>col-12</div>
				</Col>
				<Col class="col-12">
					<div class={darkBlockWithSpacing}>col-12</div>
				</Col>
			</Row>

			<Row>
				<Col class="col-8">
					<div class={lightBlockWithSpacing}>col-8</div>
				</Col>
				<Col class="col-8">
					<div class={darkBlockWithSpacing}>col-8</div>
				</Col>
				<Col class="col-8">
					<div class={lightBlockWithSpacing}>col-8</div>
				</Col>
			</Row>

			<Row>
				<Col class="col-6">
					<div class={lightBlockWithSpacing}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlockWithSpacing}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlockWithSpacing}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlockWithSpacing}>col-6</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example1} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card>
		<Card.Header>With Gutter</Card.Header>
		<Card.Content>
			<Divider position="left">
				<Divider.Label slot="label">Horizontal</Divider.Label>
			</Divider>

			<Row gutter={['0', '4']}>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>

				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">Vertical</Divider.Label>
			</Divider>

			<Row gutter={['4', '0']}>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>

				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">Horizontal & Vertical</Divider.Label>
			</Divider>

			<Row gutter="4">
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>

				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={lightBlock}>col-6</div>
				</Col>
				<Col class="col-6">
					<div class={darkBlock}>col-6</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card>
		<Card.Header>Justify</Card.Header>
		<Card.Content>
			<Divider position="left">
				<Divider.Label slot="label">Start</Divider.Label>
			</Divider>

			<Row justify="start" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">Center</Divider.Label>
			</Divider>

			<Row justify="center" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">End</Divider.Label>
			</Divider>

			<Row justify="end" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">Between</Divider.Label>
			</Divider>

			<Row justify="between" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">Around</Divider.Label>
			</Divider>

			<Row justify="around" class="bg-backgroundp-2">
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example3} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<Card>
		<Card.Header>Align</Card.Header>
		<Card.Content>
			<Divider position="left">
				<Divider.Label slot="label">Start</Divider.Label>
			</Divider>

			<Row align="start" justify="center" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock} style="height: 5rem;">col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock} style="height: 5rem;">col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">Center</Divider.Label>
			</Divider>

			<Row align="center" justify="between" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock} style="height: 4rem;">col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock} style="height: 4rem;">col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<Divider position="left">
				<Divider.Label slot="label">End</Divider.Label>
			</Divider>

			<Row align="end" justify="center" class="bg-background p-2">
				<Col class="col-4">
					<div class={lightBlock} style="height: 4rem;">col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
				<Col class="col-4">
					<div class={lightBlock} style="height: 4rem;">col-4</div>
				</Col>
				<Col class="col-4">
					<div class={darkBlock}>col-4</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example4} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<SlotsTable component="Row" slots={rowSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Row" props={rowProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Col" slots={colSlots} />
</Col>
