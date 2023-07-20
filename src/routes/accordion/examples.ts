import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Accordion.Item />'
	}
];

export const itemProps: Prop[] = [
	{
		id: '1',
		prop: 'open',
		type: 'boolean',
		default: 'false'
	}
];

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<Accordion.Item.Title slot="title" />'
	},
	{
		id: '2',
		slot: 'content',
		component: '<Accordion.Item.Content slot="content" />'
	}
];

export const titleSlots: Slot[] = [
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

export const usage = `
import { Accordion } from 'stwui';
// OR
import Accordion from 'stwui/accordion'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { Accordion } from 'stwui';

   let open = '';

   function handleClick(item: string) {
      if (open === item) {
         open= '';
      } else {
         open = item;
      }
   }
</script>

<Accordion>
	<Accordion.Item open={open === 'item1'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('item1')}>
			Item 1
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
         accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
	<Accordion.Item open={open === 'item2'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('item2')}>
			Item 2
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
         accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
	<Accordion.Item open={open === 'item3'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('item3')}>
			Item 3
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
			accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
</Accordion>`;
