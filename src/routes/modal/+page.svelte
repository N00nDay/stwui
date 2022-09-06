<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Modal } from '../../lib/components/modal';
	import { Button } from '../../lib/components/button';
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
		<CardHeader>Modal</CardHeader>
		<CardContent class="p-4">
			<Button type="primary" on:click={openModal1}>Open Modal</Button>
			<br />
			<br />
			<Button type="primary" on:click={openModal2}>Open Modal</Button>
		</CardContent>
	</Card>
</Col>

<Portal>
	{#if modal1Open}
		<Modal handleClose={closeModal1}>
			<Card>
				<CardHeader>Modal 1</CardHeader>
				<CardContent>I am the content</CardContent>
			</Card>
		</Modal>
	{/if}
</Portal>

<Portal>
	{#if modal2Open}
		<Modal handleClose={closeModal2}
			><Card bordered={false}>
				<CardHeader>Modal 2</CardHeader>
				<CardContent>I am the content</CardContent>
			</Card></Modal
		>
	{/if}
</Portal>
