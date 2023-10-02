<script lang="ts">
	import type { TableColumn } from '../../../lib/types/table-column';
	import { Card, Table, Col } from '../../../lib';
	import type { IClass } from '../../types/class-table';

	export let component: string;
	export let classList: IClass[];

	const columns: TableColumn[] = [
		{
			column: 'class',
			label: 'Class',
			placement: 'left'
		}
	];
</script>

<Col class="col-24">
	<h1 class="mb-4 mt-8 text-xl font-semibold text-content">
		{component} Class Identifiers
	</h1>
	<Card bordered={false}>
		<Table class="rounded-md overflow-hidden h-full" {columns}>
			<Table.Header slot="header" sortable={false} orderBy="id" />
			<Table.Body slot="body">
				{#each classList as cl}
					<Table.Body.Row id={cl.id} class="cursor-default hover:bg-surface">
						<Table.Body.Row.Cell column={0}>{cl.class}</Table.Body.Row.Cell>
					</Table.Body.Row>
				{/each}
			</Table.Body>
		</Table>
	</Card>
</Col>
