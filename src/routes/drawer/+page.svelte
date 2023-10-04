<script lang="ts">
	import { Button, Drawer, Portal } from '../../lib';
	import {
		example,
		placementExample,
		headerAndFooterExample,
		multiOneExample,
		props,
		slots,
		headerSlots,
		contentSlots,
		footerSlots,
		usage,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';

	let drawerDefaultOpen = false;
	let drawerRightOpen = false;
	let drawerLeftOpen = false;
	let drawerTopOpen = false;
	let drawerBottomOpen = false;
	let drawerMultiOne = false;
	let drawerInsideOpen = false;
	let drawerHeaderAndFooterOpen = false;

	function openMultiOneDrawer() {
		drawerMultiOne = true;
	}

	function closeMultiOneDrawer() {
		drawerMultiOne = false;
	}

	function openInsideDrawer() {
		drawerInsideOpen = true;
	}

	function closeInsideDrawer() {
		drawerInsideOpen = false;
	}

	function openDrawerDefault() {
		drawerDefaultOpen = true;
	}

	function closeDrawerDefault() {
		drawerDefaultOpen = false;
	}

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

	function openDrawerHeaderAndFooter() {
		drawerHeaderAndFooterOpen = true;
	}

	function closeDrawerHeaderAndFooter() {
		drawerHeaderAndFooterOpen = false;
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Default Drawer">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" on:click={openDrawerDefault}>Open Default</Button>
	</div>

	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With placement">
	<div slot="preview" class="w-full block m-auto gap-4 text-center">
		<Button type="primary" on:click={openDrawerRight}>Open Right</Button>
		<Button type="primary" on:click={openDrawerLeft}>Open Left</Button>
		<Button type="primary" on:click={openDrawerTop}>Open Top</Button>
		<Button type="primary" on:click={openDrawerBottom}>Open Bottom</Button>
	</div>

	<CodeBlock slot="code" language="svelte" code={placementExample} />
</ExampleContainer>

<ExampleContainer title="With Header and Footer">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" on:click={openDrawerHeaderAndFooter}>Open Header and Footer</Button>
	</div>

	<CodeBlock slot="code" language="svelte" code={headerAndFooterExample} />
</ExampleContainer>

<ExampleContainer title="With Header and Footer">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" on:click={openMultiOneDrawer}>Open Multi-Drawer</Button>
	</div>

	<CodeBlock slot="code" language="svelte" code={multiOneExample} />
</ExampleContainer>

<Portal>
	{#if drawerDefaultOpen}
		<Drawer handleClose={closeDrawerDefault}
			><Drawer.Content slot="content">I am a Drawer</Drawer.Content></Drawer
		>
	{/if}
</Portal>

<Portal>
	{#if drawerRightOpen}
		<Drawer handleClose={closeDrawerRight} />
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

<Portal>
	{#if drawerHeaderAndFooterOpen}
		<Drawer handleClose={closeDrawerHeaderAndFooter} placement="right">
			<Drawer.Header slot="header">Drawer Header</Drawer.Header>
			<Drawer.Content slot="content">Drawer Content</Drawer.Content>
			<Drawer.Footer slot="footer">Drawer Footer</Drawer.Footer>
		</Drawer>
	{/if}
</Portal>

<Portal>
	{#if drawerMultiOne}
		<Drawer handleClose={closeMultiOneDrawer}>
			<Drawer.Header slot="header">Drawer Header</Drawer.Header>
			<Drawer.Content slot="content" class="flex flex-col items-center justify-center">
				<Button type="primary" on:click={openInsideDrawer}>Open Drawer</Button>
			</Drawer.Content>
			<Drawer.Footer slot="footer">Drawer Footer</Drawer.Footer>

			<Portal>
				{#if drawerInsideOpen}
					<Drawer handleClose={closeInsideDrawer}>
						<Drawer.Content slot="content">I am an Inner Drawer</Drawer.Content>
					</Drawer>
				{/if}
			</Portal>
		</Drawer>
	{/if}
</Portal>

<PropsTable component="Drawer" {props} />

<SlotsTable component="Drawer" {slots} />

<SlotsTable component="Drawer.Header" slots={headerSlots} />

<SlotsTable component="Drawer.Content" slots={contentSlots} />

<SlotsTable component="Drawer.Footer" slots={footerSlots} />

<ClassTable component="Drawer" {classList} />
