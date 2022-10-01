<script lang="ts">
	import { Button, Card, Col, Pagination, Table } from '../../lib';
	import type { TableColumn } from '../../lib/types/table-column';

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

<Col class="col-24 h-full">
	<Card bordered={false} class="h-full">
		<Card.Header slot="header" class="font-bold text-lg flex justify-between items-center py-3"
			>Card Header
			<Button slot="extra" type="primary">
				<Button.Leading slot="leading">
					<Button.Leading.Icon slot="icon" icon="add" />
				</Button.Leading>
				New Item</Button
			>
		</Card.Header>
		<Card.Content slot="content" class="p-0 sm:p-0" style="height: calc(100% - 64px);">
			<Table class="rounded-md overflow-hidden h-full" {columns}>
				<Table.Header />
				<Table.Body>
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
				<Table.Footer>
					<Pagination
						start={data.start}
						end={data.end}
						total={data.total}
						scrollElement="table-body"
					/>
				</Table.Footer>
			</Table>
		</Card.Content>
	</Card>
</Col>
