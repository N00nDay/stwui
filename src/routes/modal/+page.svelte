<script lang="ts">
	import { Button, Card, Col, Modal, Portal, Divider } from '../../lib';
	import { example, props, slots, backdropProps, contentSlots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let open = false;

	function openModal() {
		open = true;
	}

	function closeModal() {
		open = false;
	}
</script>

<Col class="col-24 mb-4">
	<h1 class="text-light-content dark:text-dark-content mb-0">Modal</h1>
	<Divider />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Content slot="content" class="p-4">
			<Button type="primary" on:click={openModal}>Open Modal</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Portal>
	{#if open}
		<Modal handleClose={closeModal}>
			<Modal.Content slot="content">
				<Card>
					<Card.Header slot="header">Modal</Card.Header>
					<Card.Content slot="content">I am the content</Card.Content>
				</Card>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>

<Col class="col-24">
	<PropsTable component="Modal" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Modal" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Modal.Backdrop" props={backdropProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Modal.Content" slots={contentSlots} />
</Col>
