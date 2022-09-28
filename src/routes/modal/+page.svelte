<script lang="ts">
	import { Button, Card, Col, Modal } from '../../lib';
	import { Portal } from '../../lib/components/portal';

	let modal1Open = false;
	let modal2Open = false;

	function openModal1() {
		modal1Open = true;
	}

	function closeModal1() {
		modal1Open = false;
	}

	function openModal2() {
		modal2Open = true;
	}

	function closeModal2() {
		modal2Open = false;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Modal</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button type="primary" on:click={openModal1}>Open Modal</Button>
			<br />
			<br />
			<Button type="primary" on:click={openModal2}>Open Modal</Button>
		</Card.Content>
	</Card>
</Col>

<Portal>
	{#if modal1Open}
		<Modal handleClose={closeModal1}>
			<Modal.Content slot="content">
				<Card>
					<Card.Header slot="header">Modal 1</Card.Header>
					<Card.Content slot="content">I am the content</Card.Content>
				</Card>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>

<Portal>
	{#if modal2Open}
		<Modal handleClose={closeModal2}>
			<Modal.Content slot="content">
				<Card bordered={false}>
					<Card.Header slot="header">Modal 2</Card.Header>
					<Card.Content slot="content">I am the content</Card.Content>
				</Card>
			</Modal.Content></Modal
		>
	{/if}
</Portal>
