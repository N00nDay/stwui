<script lang="ts">
	import type { TableColumn } from '../../../lib/types/table-column';
	import { Card, Table } from '../../../lib';
	import type { Prop } from '../../types/props-table';

	export let component: string;
	export let props: Prop[];

	const columns: TableColumn[] = [
		{
			column: 'prop',
			label: 'Prop',
			placement: 'left'
		},
		{
			column: 'type',
			label: 'Type',
			placement: 'left'
		},
		{
			column: 'default',
			label: 'Default',
			placement: 'left'
		}
	];
</script>

<h1 class="mb-4 mt-8 text-xl font-semibold">{component} Props</h1>
<Card bordered={false}>
	<Table class="rounded-md overflow-hidden h-full" {columns}>
		<Table.Header sortable={false} />
		<Table.Body>
			{#each props as prop}
				<Table.Body.Row
					id={prop.id}
					class="cursor-default hover:bg-light-surface dark:hover:bg-dark-surface"
				>
					<Table.Body.Row.Cell column={0}>{prop.prop}</Table.Body.Row.Cell>
					<Table.Body.Row.Cell column={1}>{prop.type}</Table.Body.Row.Cell>
					<Table.Body.Row.Cell column={2}>{prop.default}</Table.Body.Row.Cell>
				</Table.Body.Row>
			{/each}
		</Table.Body>
	</Table>
</Card>
