<script lang="ts">
	import { Button, Card, Col, Drawer, Portal, Divider } from '../../lib';
	import {
		example,
		placementExample,
		props,
		slots,
		headerSlots,
		contentSlots,
		footerSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';

	let drawerRightOpen = false;
	let drawerLeftOpen = false;
	let drawerTopOpen = false;
	let drawerBottomOpen = false;

	function openDrawerRight() {
		drawerRightOpen = true;
	}

	function closeDrawerRight() {
		drawerRightOpen = false;
	}

	function openDrawerLeft() {
		drawerLeftOpen = true;
	}

	function closeDrawerLeft() {
		drawerLeftOpen = false;
	}

	function openDrawerTop() {
		drawerTopOpen = true;
	}

	function closeDrawerTop() {
		drawerTopOpen = false;
	}

	function openDrawerBottom() {
		drawerBottomOpen = true;
	}

	function closeDrawerBottom() {
		drawerBottomOpen = false;
	}
</script>

<Col class="col-24 mb-4">
	<h1 class="text-light-content dark:text-dark-content mb-0">Drawer</h1>
	<Divider />
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button type="primary" on:click={openDrawerRight}>Open Right</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">With Placement</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button type="primary" on:click={openDrawerLeft}>Open Left</Button>
			<br />
			<br />
			<Button type="primary" on:click={openDrawerTop}>Open Top</Button>
			<br />
			<br />
			<Button type="primary" on:click={openDrawerBottom}>Open Bottom</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={placementExample} />
		</Card.Content>
	</Card>
</Col>

<Portal>
	{#if drawerRightOpen}
		<Drawer handleClose={closeDrawerRight}>
			<Drawer.Header slot="header">Drawer Header</Drawer.Header>
			<Drawer.Content slot="content">Drawer Content</Drawer.Content>
			<Drawer.Footer slot="footer">Drawer Footer</Drawer.Footer>
		</Drawer>
	{/if}
</Portal>

<Portal>
	{#if drawerLeftOpen}
		<Drawer handleClose={closeDrawerLeft} placement="left" />
	{/if}
</Portal>

<Portal>
	{#if drawerTopOpen}
		<Drawer handleClose={closeDrawerTop} placement="top" />
	{/if}
</Portal>

<Portal>
	{#if drawerBottomOpen}
		<Drawer handleClose={closeDrawerBottom} placement="bottom" />
	{/if}
</Portal>

<Col class="col-24">
	<PropsTable component="Drawer" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Drawer" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Drawer.Header" slots={headerSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Drawer.Content" slots={contentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Drawer.Footer" slots={footerSlots} />
</Col>
