import type { Slot, Prop } from '../../docs';

// export const props: Prop[] = [
// {
// 	id: '1',
// 	prop: 'type',
// 	type: "'info' | 'warn' | 'success' | 'error'",
// 	default: 'info'
// }
// ];

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

export const example = `
<script lang="ts">
   import { Accordion } from 'stwui';

   let open1 = '';

   function handleClick(item: string) {
      if (open1 === item) {
         open1 = '';
      } else {
         open1 = item;
      }
   }
</script>

<Accordion>
	<Accordion.Item open={open1 === 'open1'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('open1')}>
			Item 1
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
         accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
	<Accordion.Item open={open1 === 'open2'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('open2')}>
			Item 2
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
         accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
	<Accordion.Item open={open1 === 'open3'}>
		<Accordion.Item.Title slot="title" on:click={() => handleClick('open3')}>
			Item 3
		</Accordion.Item.Title>
		<Accordion.Item.Content slot="content">
			accordion_body
		</Accordion.Item.Content>
	</Accordion.Item>
</Accordion>`;
