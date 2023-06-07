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

export const exampleLC = `
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
				<Modal.Content.Body slot="body">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel
					facilisis volutpat. Donec enim diam vulputate ut pharetra sit. Non quam lacus suspendisse
					faucibus interdum posuere lorem ipsum dolor. Convallis posuere morbi leo urna molestie at
					elementum eu. Feugiat sed lectus vestibulum mattis. A pellentesque sit amet porttitor eget
					dolor morbi non. Ut placerat orci nulla pellentesque dignissim enim sit amet. Tincidunt
					praesent semper feugiat nibh sed pulvinar proin. Molestie ac feugiat sed lectus vestibulum
					mattis ullamcorper velit. Euismod nisi porta lorem mollis aliquam ut porttitor leo.
					Volutpat sed cras ornare arcu dui vivamus. Laoreet id donec ultrices tincidunt arcu non
					sodales. Nunc sed blandit libero volutpat sed cras ornare arcu. Non nisi est sit amet
					facilisis magna etiam. Fusce id velit ut tortor. Phasellus vestibulum lorem sed risus.
					Molestie at elementum eu facilisis sed odio morbi quis. Convallis tellus id interdum
					velit. Accumsan in nisl nisi scelerisque eu. Arcu dictum varius duis at. In hendrerit
					gravida rutrum quisque non. Turpis egestas sed tempus urna et. In nulla posuere
					sollicitudin aliquam ultrices sagittis orci. Nulla facilisi cras fermentum odio eu.
					Adipiscing bibendum est ultricies integer quis auctor. At imperdiet dui accumsan sit amet
					nulla facilisi morbi. Facilisi etiam dignissim diam quis enim. Aliquet enim tortor at
					auctor urna. Nunc faucibus a pellentesque sit amet porttitor eget. Elementum pulvinar
					etiam non quam lacus suspendisse. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.
					Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula. Tristique magna sit
					amet purus gravida quis blandit. Volutpat sed cras ornare arcu dui vivamus arcu. Felis
					imperdiet proin fermentum leo vel orci porta non. Iaculis urna id volutpat lacus. Vitae
					elementum curabitur vitae nunc sed velit dignissim. Commodo sed egestas egestas fringilla
					phasellus faucibus scelerisque eleifend. Maecenas accumsan lacus vel facilisis volutpat
					est. Dignissim cras tincidunt lobortis feugiat. Ac tincidunt vitae semper quis. Varius
					morbi enim nunc faucibus a pellentesque sit. Pharetra diam sit amet nisl. In tellus
					integer feugiat scelerisque varius morbi enim. Sit amet nisl purus in mollis. Eget felis
					eget nunc lobortis mattis aliquam faucibus. Posuere sollicitudin aliquam ultrices sagittis
					orci. Condimentum id venenatis a condimentum. Mauris augue neque gravida in fermentum et
					sollicitudin. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Eu sem
					integer vitae justo eget magna fermentum iaculis eu. Mattis rhoncus urna neque viverra.
					Vel quam elementum pulvinar etiam non quam lacus. Quis varius quam quisque id. Tortor
					dignissim convallis aenean et tortor at. Luctus accumsan tortor posuere ac ut consequat
					semper viverra nam. Condimentum id venenatis a condimentum vitae sapien pellentesque
					habitant morbi. Pellentesque diam volutpat commodo sed egestas egestas fringilla.
				</Modal.Content.Body>
				<Modal.Content.Footer slot="footer">Footer</Modal.Content.Footer>
			</Modal.Content>
		</Modal>
	{/if}
</Portal>`;
