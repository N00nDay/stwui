<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from '../../lib/components/drawer';
	import { Button } from '../../lib/components/button';
	import { Portal } from '../../lib/components/portal';

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

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Drawer</CardHeader>
		<CardContent class="p-4">
			<Button type="primary" on:click={openDrawerRight}>Open Right</Button>
			<br />
			<br />
			<Button type="primary" on:click={openDrawerLeft}>Open Left</Button>
			<br />
			<br />
			<Button type="primary" on:click={openDrawerTop}>Open Top</Button>
			<br />
			<br />
			<Button type="primary" on:click={openDrawerBottom}>Open Bottom</Button>
		</CardContent>
	</Card>
</Col>

<Portal>
	{#if drawerRightOpen}
		<Drawer handleClose={closeDrawerRight}>
			<DrawerHeader>Drawer Header</DrawerHeader>
			<DrawerContent>Drawer Content</DrawerContent>
			<DrawerFooter>Drawer Footer</DrawerFooter>
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
