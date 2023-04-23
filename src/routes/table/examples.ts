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
		prop: 'order',
		type: "'asc' | 'desc'",
		default: 'asc'
	},
	{
		id: '2',
		prop: 'orderBy',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'onColumnHeaderClick',
		type: '((page: number) => void) | undefined',
		default: ''
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
   import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { encodeSearchParams } from 'stwui/utils';
   import { Table } from 'stwui';
   import type { TableColumn } from 'stwui/types';

   const plus = "svg-path";

   let baseUrl: string;
	let orderBy: string;
	let order: 'asc' | 'desc';
	let currentPage: string;

	$: {
		baseUrl = $page.url.pathname;
		orderBy = $page.url.searchParams.get('orderBy') || 'created_at';
		order = $page.url.searchParams.get('order') === 'desc' ? 'desc' : 'asc';
		currentPage = $page.url.searchParams.get('page') || '1';
	}

   const columns: TableColumn[] = [
		{
			column: 'project_name',
			label: 'Project Name',
			placement: 'left',
			class: 'w-[40%] md:w-[30%] lg:w-[20%]'
		},
		{
			column: 'status',
			label: 'Status',
			placement: 'left',
			class: 'w-[40%] md:w-[30%] lg:w-[20%]'
		},
		{
			column: 'city',
			label: 'City',
			placement: 'left',
			class: 'hidden md:table-cell w-0 md:w-[30%] lg:w-[20%]'
		},
		{
			column: 'state',
			label: 'State',
			placement: 'left',
			class: 'hidden lg:table-cell lg:w-[20%]'
		},
		{
			column: 'created_at',
			label: 'Created',
			placement: 'right',
			class: 'w-[20%] md:w-[10%] lg:w-[20%]'
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

   function onPreviousClick() {
		let newPage = parseInt(currentPage) - 1 + '';
		goto(\`\${baseUrl}\` +
			encodeSearchParams({
				orderBy: orderBy,
				order: order,
				page: newPage
			})
		);
	}

	function onNextClick() {
		let newPage = parseInt(currentPage) + 1 + '';
		goto(\`\${baseUrl}\` +
			encodeSearchParams({
				orderBy: orderBy,
				order: order,
				page: newPage
			})
		);
	}

	function onPageClick(page: number) {
		let newPage = page + '';
		goto(\`\${baseUrl}\` +
			encodeSearchParams({
				orderBy: orderBy,
				order: order,
				page: newPage
			})
		);
	}

	function onColumnHeaderClick(column: string) {
		goto(\`\${baseUrl}\` +
			encodeSearchParams({
				orderBy: column,
				order: column === orderBy && order === 'asc' ? 'desc' : 'asc',
				page: currentPage
			})
		);
	}
</script>

<Card bordered={false} class="h-[calc(100vh-14rem)]">
   <Card.Header slot="header" class="font-bold text-lg flex justify-between items-center py-3">
      Card Header
      <Button slot="extra" type="primary">
         <Button.Leading slot="leading" data={plus} />
         New Item
      </Button>
   </Card.Header>
   <Card.Content slot="content" class="p-0 sm:p-0" style="height: calc(100% - 64px);">
      <Table class="rounded-md overflow-hidden h-full" {columns}>
         <Table.Header slot="header" {order} {orderBy} {onColumnHeaderClick} />
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
            currentPage={parseInt(currentPage)}
            {onPreviousClick}
            {onNextClick}
            {onPageClick}
         />
         </Table.Footer>
      </Table>
   </Card.Content>
</Card>`;
