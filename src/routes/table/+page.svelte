<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import {
		Table,
		TableBody,
		TableFooter,
		TableHeader,
		TableRow,
		TableCell
	} from '../../lib/components/table';
	import Button from '../../lib/components/button';
	import { Pagination } from '../../lib/components/pagination';
	import type { ITableColumn } from '../../lib/components/table/Table.svelte';

	const columns: ITableColumn[] = [
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
			<Button slot="extras" type="primary" leading="add">New Item</Button>
		</Card.Header>
		<Card.Content slot="content" noPadding style="height: calc(100% - 64px);">
			<Table class="rounded-md overflow-hidden h-full" {columns}>
				<TableHeader />
				<TableBody>
					{#each data.results as item, i}
						<TableRow id={item.id}>
							<TableCell column={0}>{item.project_name}</TableCell>
							<TableCell column={1}>{item.status}</TableCell>
							<TableCell column={2}>{item.city}</TableCell>
							<TableCell column={3}>{item.state}</TableCell>
							<TableCell column={4}>{item.created_at}</TableCell>
						</TableRow>
					{/each}
				</TableBody>
				<TableFooter>
					<Pagination start={data.start} end={data.end} total={data.total} />
				</TableFooter>
			</Table>
		</Card.Content>
	</Card>
</Col>
