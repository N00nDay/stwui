import type { TableColumn } from '../../lib/types/table-column';

export const propColumns: TableColumn[] = [
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

export interface Prop extends Record<string, string> {
	id: string;
	prop: string;
	type: string;
	default: string;
}

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'success' | 'error'",
		default: 'info'
	}
];

export const slotColumns: TableColumn[] = [
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

export interface Slot extends Record<string, string> {
	id: string;
	slot: string;
	component: string;
}

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Alert.Icon />'
	},
	{
		id: '2',
		slot: 'title',
		component: '<Alert.Title />'
	},
	{
		id: '3',
		slot: 'description',
		component: '<Alert.Description />'
	},
	{
		id: '4',
		slot: 'extra',
		component: ''
	}
];

export const exampleSvelte = `
<Alert>
   <Alert.Title slot="title">Title</Alert.Title>
</Alert>`;
