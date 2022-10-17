import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'placholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '4',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '6',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '7',
		prop: 'autofocus',
		type: "'true' | undefined",
		default: ''
	},
	{
		id: '8',
		prop: 'readonly',
		type: 'true | undefined',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<TextArea.Label slot="label" />'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { TextArea } from 'stwui';
</script>

<TextArea name="text-area-1" placeholder="Basic" />

<TextArea name="text-area-2">
	<TextArea.Label slot="label">Label</TextArea.Label>
</TextArea>

<TextArea name="text-area-3" error="There has been an error">
	<TextArea.Label slot="label">Label</TextArea.Label>
</TextArea>`;
