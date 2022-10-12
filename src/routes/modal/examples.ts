import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'handleClose',
		type: '() => void',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'backdrop',
		component: '<Modal.Backdrop slot="backdrop" />'
	},
	{
		id: '2',
		slot: 'content',
		component: '<Modal.Content slot="content" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	}
];

export const backdropProps: Prop[] = [
	{
		id: '1',
		prop: 'handleClose',
		type: '() => void',
		default: ''
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Modal, Portal, Card } from 'stwui';

   let open = false;

	function openModal() {
		open = true;
	}

	function closeModal() {
		open = false;
	}
</script>

<Button type="primary" on:click={openModal}>Open Modal</Button>

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
</Portal>`;
