import type { TableColumn } from '../../lib/types/table-column';

export const columns: TableColumn[] = [
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

export const exampleSvelte = `
<Alert>
   <Alert.Title slot="title">Title</Alert.Title>
</Alert>`;
