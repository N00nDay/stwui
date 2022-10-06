import type { Slot, Prop } from '../..//docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'success' | 'error'",
		default: 'info'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Alert.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'title',
		component: '<Alert.Title slot="title" />'
	},
	{
		id: '3',
		slot: 'description',
		component: '<Alert.Description slot="description" />'
	},
	{
		id: '4',
		slot: 'extra',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: 'MaterialIcons (string)',
		default: ''
	}
];

export const exampleSvelte = `
<Alert>
   <Alert.Title slot="title">Title</Alert.Title>
</Alert>`;
