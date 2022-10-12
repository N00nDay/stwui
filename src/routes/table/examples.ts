import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'columns',
		type: '<a class="link" href="/types#TableColumn">TableColumn[]</a>',
		default: '[]'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'header',
		component: '<Table.Header slot="header" />'
	},
	{
		id: '2',
		slot: 'body',
		component: '<Table.Body slot="body" />'
	},
	{
		id: '3',
		slot: 'footer',
		component: '<Table.Footer slot="footer" />'
	}
];

export const headerProps: Prop[] = [
	{
		id: '1',
		prop: 'sortable',
		type: 'boolean',
		default: 'false'
	}
];

export const bodyProps: Prop[] = [
	{
		id: '1',
		prop: 'id',
		type: 'string',
		default: 'table-body'
	}
];

export const bodySlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const rowProps: Prop[] = [
	{
		id: '1',
		prop: 'id',
		type: 'string',
		default: ''
	}
];

export const rowSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const cellProps: Prop[] = [
	{
		id: '1',
		prop: 'column',
		type: 'number',
		default: ''
	}
];

export const cellSlots: Slot[] = [
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
   import { Table } from 'stwui';
   import type { TableColumn } from 'stwui/types';

   const columns: TableColumn[] = [
      {
         column: 'project_name',
         label: 'Project Name',
         placement: 'left'
      },
      {
         column: 'status',
         label: 'Status',
         placement: 'left'
      },
      {
         column: 'city',
         label: 'City',
         placement: 'left'
      },
      {
         column: 'state',
         label: 'State',
         placement: 'left'
      },
      {
         column: 'created_at',
         label: 'Created',
         placement: 'right'
      }
   ];

   interface Item extends Record<string, string> {
      id: string;
      project_name: string;
      status: string;
      city: string;
      state: string;
      created_at: string;
   }

   export let data: { results: Item[]; start: number; end: number; total: number } = {
      results: [],
      start: 0,
      end: 0,
      total: 0
   };
</script>

<Card bordered={false} class="h-[calc(100vh-14rem)]">
   <Card.Header slot="header" class="font-bold text-lg flex justify-between items-center py-3">
      Card Header
      <Button slot="extra" type="primary">
         <Button.Leading slot="leading">
            <Button.Leading.Icon slot="icon" icon="add" />
         </Button.Leading>
         New Item
      </Button>
   </Card.Header>
   <Card.Content slot="content" class="p-0 sm:p-0" style="height: calc(100% - 64px);">
      <Table class="rounded-md overflow-hidden h-full" {columns}>
         <Table.Header slot="header" />
         <Table.Body slot="body">
            {#each data.results as item}
               <Table.Body.Row id={item.id}>
                  <Table.Body.Row.Cell column={0}>{item.project_name}</Table.Body.Row.Cell>
                  <Table.Body.Row.Cell column={1}>{item.status}</Table.Body.Row.Cell>
                  <Table.Body.Row.Cell column={2}>{item.city}</Table.Body.Row.Cell>
                  <Table.Body.Row.Cell column={3}>{item.state}</Table.Body.Row.Cell>
                  <Table.Body.Row.Cell column={4}>{item.created_at}</Table.Body.Row.Cell>
               </Table.Body.Row>
            {/each}
         </Table.Body>
         <Table.Footer slot="footer">
            <Pagination
               start={data.start}
               end={data.end}
               total={data.total}
               scrollElement="table-body"
            />
         </Table.Footer>
      </Table>
   </Card.Content>
</Card>`;
