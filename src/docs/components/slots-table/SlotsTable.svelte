<script lang="ts">
	import type { TableColumn } from '../../../lib/types/table-column';
	import { Card, Table, Col } from '../../../lib';
	import type { Slot } from '../../types/slots-table';
	import CopyButton from './CopyButton.svelte';

	export let component: string;
	export let slots: Slot[];

	const columns: TableColumn[] = [
		{
			column: 'slot',
			label: 'Slot',
			placement: 'left'
		},
		{
			column: 'component',
			label: 'Component',
			placement: 'left'
		}
	];
</script>

<Col class="col-24">
	<h1 class="mb-4 mt-8 text-xl font-semibold text-content">
		{component} Slots
	</h1>
	<Card bordered={false}>
		<Table class="rounded-md overflow-hidden h-full" {columns}>
			<Table.Header slot="header" sortable={false} orderBy="id" />
			<Table.Body slot="body">
				{#each slots as slot}
					<Table.Body.Row id={slot.id} class="cursor-default hover:bg-surface">
						<Table.Body.Row.Cell column={0}>{slot.slot}</Table.Body.Row.Cell>
						<Table.Body.Row.Cell class="slot-component-col" column={1}
							>{slot.component}{#if slot.component.length > 0}
								<CopyButton stringToCopy={slot.component} />
							{/if}</Table.Body.Row.Cell
						>
					</Table.Body.Row>
				{/each}
			</Table.Body>
		</Table>
	</Card>
</Col>
