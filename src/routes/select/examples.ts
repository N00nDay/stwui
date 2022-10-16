import type { Prop } from '../../docs';

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
		prop: 'placeholder',
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
		prop: 'autofocus',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'visible',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '7',
		prop: 'options',
		type: 'string[]',
		default: '[]'
	}
];

export const example = `
<script lang="ts">
	import { Select, Icon } from 'stwui';
	const email = "svg-path";
</script>

<Select name="select-1" placeholder="Basic" options={['Option 1', 'Option 2', 'Option 3']} />

<Select name="select-2" options={['Option 1', 'Option 2', 'Option 3']}>
	<Select.Label slot="label">Label</Select.Label>
	<Icon slot="leading" path={email} />
</Select>

<Select
	name="select-3"
	error="There has been an error"
	options={['Option 1', 'Option 2', 'Option 3']}
>
	<Select.Label slot="label">Label</Select.Label>
	<Icon slot="leading" path={email} />
</Select>`;
