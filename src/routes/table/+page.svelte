<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { encodeSearchParams } from '../../lib/utils';
	import { Button, Card, Col, Pagination, Table } from '../../lib';
	import type { TableColumn } from '../../lib/types/table-column';
	import {
		example,
		props,
		slots,
		headerProps,
		bodyProps,
		bodySlots,
		rowProps,
		rowSlots,
		cellProps,
		cellSlots,
		footerSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { plus } from '../../lib/icons';

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

	function onPreviousClick() {
		let newPage = parseInt(currentPage) - 1 + '';
		goto(
			`${baseUrl}` +
				encodeSearchParams({
					orderBy: orderBy,
					order: order,
					page: newPage
				})
		);
	}

	function onNextClick() {
		let newPage = parseInt(currentPage) + 1 + '';
		goto(
			`${baseUrl}` +
				encodeSearchParams({
					orderBy: orderBy,
					order: order,
					page: newPage
				})
		);
	}

	function onPageClick(page: number) {
		let newPage = page + '';
		goto(
			`${baseUrl}` +
				encodeSearchParams({
					orderBy: orderBy,
					order: order,
					page: newPage
				})
		);
	}

	function onColumnHeaderClick(column: string) {
		goto(
			`${baseUrl}` +
				encodeSearchParams({
					orderBy: column,
					order: column === orderBy && order === 'asc' ? 'desc' : 'asc',
					page: currentPage
				})
		);
	}
</script>

<Col class="col-24 h-full">
	<Card bordered={false} elevation="none" class="bg-transparent">
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
		</Card>
		<br />

		<CodeBlock language="svelte" code={example} />
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Table" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Table" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="Table.Header" props={headerProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Table.Body" props={bodyProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Table.Body" slots={bodySlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Table.Body.Row" props={rowProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Table.Body.Row" slots={rowSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Table.Body.Row.Cell" props={cellProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Table.Body.Row.Cell" slots={cellSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Table.Footer" slots={footerSlots} />
</Col>
