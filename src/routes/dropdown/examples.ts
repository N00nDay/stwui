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
		type: "'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end' | 'bottom' | 'bottom-start' | 'bottom-end'",
		default: 'bottom-start'
	},
	{
		id: '3',
		prop: 'offset',
		type: 'number',
		default: '8'
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

export const examplePlacement = `
<script lang="ts">
	import { Dropdown, Button, Badge } from 'stwui';

   let visible1 = false;
	let visible2 = false;

	function closeDropdown1() {
		visible1 = false;
	}

	function toggleDropdown1() {
		visible1 = !visible1;
	}

	function closeDropdown2() {
		visible2 = false;
	}

	function toggleDropdown2() {
		visible2 = !visible2;
	}
</script>

<Dropdown bind:visible={visible1}>
	<Button slot="trigger" type="primary" on:click={toggleDropdown1}>Default Placement</Button>
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
</Dropdown>

<Dropdown bind:visible={visible2}>
	<Button slot="trigger" type="primary" on:click={toggleDropdown2}>Placement Top</Button>
	<Dropdown.Items slot="items" placement="top">
		<Dropdown.Items.Item on:click={closeDropdown2} label="Item 1">
			<Dropdown.Items.Item.Icon slot="icon" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown2} label="Item 2">
			<Dropdown.Items.Item.Icon slot="extra" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown2} label="Notifications">
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

export const exampleAlignment = `
<script lang="ts">
	import { Dropdown, Button, Badge } from 'stwui';

   let visible1 = false;
	let visible2 = false;
	let visible3 = false;

	function closeDropdown1() {
		visible1 = false;
	}

	function toggleDropdown1() {
		visible1 = !visible1;
	}

	function closeDropdown2() {
		visible2 = false;
	}

	function toggleDropdown2() {
		visible2 = !visible2;
	}

	function closeDropdown3() {
		visible3 = false;
	}

	function toggleDropdown3() {
		visible3 = !visible3;
	}
</script>

<Dropdown bind:visible={visible1}>
	<Button slot="trigger" type="primary" on:click={toggleDropdown1}>Default Alignment</Button>
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
</Dropdown>

<Dropdown bind:visible={visible2}>
	<Button slot="trigger" type="primary" on:click={toggleDropdown2}>Alignment Center</Button>
	<Dropdown.Items slot="items" alignment="center">
		<Dropdown.Items.Item on:click={closeDropdown2} label="Item 1">
			<Dropdown.Items.Item.Icon slot="icon" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown2} label="Item 2">
			<Dropdown.Items.Item.Icon slot="extra" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown2} label="Notifications">
			<Badge type="info" slot="extra">+99</Badge>
		</Dropdown.Items.Item>
		<Dropdown.Items.Divider />
		<Button type="danger" class="w-full justify-between">
			<Button.Leading slot="leading" data={home} />
			Home
			<Button.Trailing slot="trailing" data={home} />
		</Button>
	</Dropdown.Items>
</Dropdown>

<Dropdown bind:visible={visible3}>
	<Button slot="trigger" type="primary" on:click={toggleDropdown3}>Alignment End</Button>
	<Dropdown.Items slot="items" alignment="end">
		<Dropdown.Items.Item on:click={closeDropdown3} label="Item 1">
			<Dropdown.Items.Item.Icon slot="icon" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown3} label="Item 2">
			<Dropdown.Items.Item.Icon slot="extra" data={trash} />
		</Dropdown.Items.Item>
		<Dropdown.Items.Item on:click={closeDropdown3} label="Notifications">
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

export const exampleAvatar = `
<script lang="ts">
	import { Dropdown, Button, Badge } from 'stwui';

   let visible = false;

	function closeDropdown() {
		visible = false;
	}

	function toggleDropdown() {
		visible = !visible;
	}
</script>

<Dropdown bind:visible={visible}>
	<button
		aria-label="dropdown toggle"
		slot="trigger"
		on:click={toggleDropdown}
		type="button"
		class="bg-white flex text-sm rounded-full h-10 w-10 active:hover:animate-none active:hover:scale-95"
		id="user-menu-button"
	>
		<span class="sr-only">Open user menu</span>
		<img
			class="h-full w-full rounded-full"
			src="image-src"
			alt=""
		/>
	</button>
	<Dropdown.Items slot="items">
		<Dropdown.Items.Item on:click={closeDropdown} label="Item 1" />
		<Dropdown.Items.Item on:click={closeDropdown} label="Item 2" />
		<Dropdown.Items.Item on:click={closeDropdown} label="Item 3" />
	</Dropdown.Items>
</Dropdown>`;
