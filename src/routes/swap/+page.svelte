<script lang="ts">
	import { Card, Icon, Swap, Col } from '../../lib';
	import { example1, example2, props, slots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let swapped = false;

	function toggleSwap() {
		swapped = !swapped;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Swap on:click={toggleSwap} {swapped}>
				<Icon slot="on" class="h-8 w-8" icon="menu" />
				<Icon slot="off" class="h-8 w-8" icon="close" />
			</Swap>

			<br />

			<CodeBlock language="svelte" code={example1} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Flip</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Swap type="flip" on:click={toggleSwap} {swapped}>
				<Icon slot="on" class="h-8 w-8" icon="paid" />
				<Icon slot="off" class="h-8 w-8" icon="account_circle" />
			</Swap>

			<br />

			<CodeBlock language="svelte" code={example2} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Swap" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Swap" {slots} />
</Col>
