import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'visible',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'trigger',
		component: ''
	},
	{
		id: '2',
		slot: 'items',
		component: '<Dropdown.Items slot="items" />'
	}
];

export const itemsProps: Prop[] = [
	{
		id: '1',
		prop: 'placement',
		type: "'left' | 'right'",
		default: 'left'
	}
];

export const itemsSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Dropdown.Items.Item />'
	}
];

export const itemProps: Prop[] = [
	{
		id: '1',
		prop: 'label',
		type: 'string',
		default: ''
	}
];

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Dropdown.Items.Item.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'extra',
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
	import { Dropdown, Button, Badge } from 'stwui';

   let visible = false;

	function closeDropdown() {
		console.log('do something');
		visible = false;
	}

	function toggleDropdown() {
		visible = !visible;
	}
</script>

<Dropdown bind:visible={visible1}>
	<Button slot="trigger" type="primary" on:click={toggleDropdown1}>Toggle Dropdown</Button>
	<Dropdown.Items slot="items">
		<Dropdown.Items.Item on:click={closeDropdown1} label="Item 1">
			<Dropdown.Items.Item.Icon slot="icon" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown1} label="Item 2">
			<Dropdown.Items.Item.Icon slot="extra" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown1} label="Notifications">
			<Badge type="info" slot="extra">+99</Badge>
		</Dropdown.Items.Item>
		<Dropdown.Items.Divider />
		<Button type="danger" class="w-full justify-between">
			<Button.Leading slot="leading" data={home} />
			Home
			<Button.Trailing slot="trailing" data={home} />
		</Button>
	</Dropdown.Items>
</Dropdown>`;
