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

export const contentProps: Prop[] = [
	{
		id: '1',
		prop: 'divided',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '2',
		prop: 'bordered',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '3',
		prop: 'hoverable',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '4',
		prop: 'elevation',
		type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'header',
		component: '<Modal.Content.Header slot="header" />'
	},
	{
		id: '2',
		slot: 'cover',
		component: '<Modal.Content.Cover slot="cover" />'
	},
	{
		id: '3',
		slot: 'body',
		component: '<Modal.Content.Body slot="body" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
	},
	{
		id: '5',
		slot: 'footer',
		component: '<Modal.Content.Footer slot="footer" />'
	},
	{
		id: '6',
		slot: 'actions',
		component: '<Modal.Content.Actions slot="actions" />'
	}
];

export const headerSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	},
	{
		id: '2',
		slot: 'extra',
		component: ''
	}
];

export const coverSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	},
	{
		id: '2',
		slot: 'default',
		component: '<Card.Cover.Overlay />'
	}
];

export const bodySlots: Slot[] = [
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

export const actionsSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Card.Actions.Action />'
	}
];

export const actionSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Card.Actions.Action.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'label',
		component: '<Card.Actions.Action.Label slot="label" />'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
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
				<Modal.Content.Header slot="header">Modal</Modal.Content.Header>
				<Modal.Content.Body slot="body">I am the content</Modal.Content.Body>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>`;
