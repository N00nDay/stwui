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

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Dropdown } from 'stwui';

   let visible = false;

	function closeDropdown() {
		console.log('do something');
		visible = false;
	}

	function toggleDropdown() {
		visible = !visible;
	}
</script>

<Dropdown {visible}>
   <Button slot="trigger" type="primary" on:click={toggleDropdown}>Toggle Dropdown</Button>
   <Dropdown.Items slot="items">
      <Dropdown.Items.Item on:click={closeDropdown}>Item 1</Dropdown.Items.Item>
      <Dropdown.Items.Item on:click={closeDropdown}>Item 2</Dropdown.Items.Item>
      <Dropdown.Items.Item on:click={closeDropdown}>Item 3</Dropdown.Items.Item>
   </Dropdown.Items>
</Dropdown>`;
