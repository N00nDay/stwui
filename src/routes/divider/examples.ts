import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'position',
		type: "'left' | 'center' | 'right'",
		default: 'center'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Divider.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Divider.Icon slot="icon" />'
	},
	{
		id: '3',
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

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const positionExample = `
<script lang="ts">
	import { Divider } from 'stwui';
</script>

<Divider>
	<Divider.Label slot="label">Divider</Divider.Label>
</Divider>
<Divider position="left">
	<Divider.Label slot="label">Divider</Divider.Label>
</Divider>
<Divider position="right">
	<Divider.Label slot="label">Divider</Divider.Label>
</Divider>`;

export const passAnythingExample = `
<script lang="ts">
	import { Divider, Button } from 'stwui';

	const plus_circle = "svg-path";
</script>

<Divider>
	<Divider.Label slot="label"><h3>Divider</h3></Divider.Label>
</Divider>
<Divider>
	<Divider.Icon slot="icon" data={plus_circle} />
</Divider>
<Divider>
	<Button type="primary">I am a Button</Button>
</Divider>`;
