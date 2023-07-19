<script lang="ts">
	import type { TableColumn } from '../../../lib/types/table-column';
	import { Card, Table, Col } from '../../../lib';
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
			placement: 'left',
			class: '!whitespace-normal	!overflow-auto	!text-clip'
		},
		{
			column: 'default',
			label: 'Default',
			placement: 'left'
		}
	];
</script>

<Col class="col-24">
	<h1 class="mb-4 mt-8 text-xl font-semibold text-content">
		{component} Props
	</h1>
	<Card bordered={false}>
		<Table class="rounded-md overflow-hidden h-full" {columns}>
			<Table.Header slot="header" sortable={false} orderBy="id" />
			<Table.Body slot="body">
				{#each props as prop}
					<Table.Body.Row id={prop.id} class="cursor-default hover:bg-surface">
						<Table.Body.Row.Cell column={0}>{prop.prop}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell class="prop-type-col" column={1}>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html prop.type}
						</Table.Body.Row.Cell>
						<Table.Body.Row.Cell column={2}>{prop.default}</Table.Body.Row.Cell>
					</Table.Body.Row>
				{/each}
			</Table.Body>
		</Table>
	</Card>
</Col>
