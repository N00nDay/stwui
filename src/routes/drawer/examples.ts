import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'handleClose',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '2',
		prop: 'placement',
		type: "'left' | 'right' | 'top' | 'bottom'",
		default: 'right'
	},
	{
		id: '3',
		prop: 'disableEscClose',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '4',
		prop: 'disableOverlayClose',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'backdrop',
		component: '<Drawer.Backdrop slot="backdrop" />'
	},
	{
		id: '2',
		slot: 'header',
		component: '<Drawer.Header slot="header" />'
	},
	{
		id: '3',
		slot: 'content',
		component: '<Drawer.Content slot="content" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
	},
	{
		id: '5',
		slot: 'footer',
		component: '<Drawer.Footer slot="footer" />'
	}
];

export const headerSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const footerSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Button, Portal } from 'stwui';

   let open = false;

   function openDrawer() {
		open = true;
	}

   function closeDrawer() {
		open = false;
	}
</script>

<Button type="primary" on:click={openDrawer}>Open</Button>

<Portal>
	{#if open}
		<Drawer handleClose={closeDrawer}>
			<Drawer.Header slot="header">Drawer Header</Drawer.Header>
			<Drawer.Content slot="content">Drawer Content</Drawer.Content>
			<Drawer.Footer slot="footer">Drawer Footer</Drawer.Footer>
		</Drawer>
	{/if}
</Portal>`;

export const placementExample = `
<script lang="ts">
	import { Button, Portal } from 'stwui';

   let drawerLeftOpen = false;
	let drawerTopOpen = false;
	let drawerBottomOpen = false;

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

<Button type="primary" on:click={openDrawerLeft}>Open Left</Button>

<Button type="primary" on:click={openDrawerTop}>Open Top</Button>

<Button type="primary" on:click={openDrawerBottom}>Open Bottom</Button>

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
</Portal>`;

export const multiOneExample = `
<script lang="ts">
	import { Button, Portal } from 'stwui';

   let open = false;
	let drawerInsideOpen = false;

	function openDrawer() {
		drawerMultiOne = true;
	}

	function closeDrawer() {
		drawerMultiOne = false;
	}

	function openInsideDrawer() {
		drawerInsideOpen = true;
	}

	function closeInsideDrawer() {
		drawerInsideOpen = false;
	}
</script>

<Button type="primary" on:click={openDrawer}>Open</Button>

<Portal>
	{#if open}
		<Drawer handleClose={closeDrawer}>
			<Drawer.Header slot="header">Drawer Header</Drawer.Header>
			<Drawer.Content slot="content"
				>Drawer Content
				<Button type="primary" on:click={openInsideDrawer}>Open Drawer</Button>
			</Drawer.Content>
			<Drawer.Footer slot="footer">Drawer Footer</Drawer.Footer>

			<Portal>
				{#if drawerInsideOpen}
					<Drawer handleClose={closeInsideDrawer}>Content</Drawer>
				{/if}
			</Portal>
		</Drawer>
	{/if}
</Portal>`;
