import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'leading',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a> | undefined',
		default: ''
	},
	{
		id: '2',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'label',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '4',
		prop: 'srOnly',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '5',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '6',
		prop: 'placeholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '7',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'autofocus',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '9',
		prop: 'handleLeadingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '10',
		prop: 'visible',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '11',
		prop: 'options',
		type: 'string[]',
		default: '[]'
	}
];

export const example = `
<script lang="ts">
	import { Select } from 'stwui';
</script>

<Select name="select-1" placeholder="Basic" options={['Option 1', 'Option 2', 'Option 3']} />
<br />
<Select
   name="select-2"
   label="Label"
   leading="email"
   trailing="phone"
   options={['Option 1', 'Option 2', 'Option 3']}
/>
<br />
<Select
   name="select-3"
   label="Label"
   leading="email"
   trailing="phone"
   error="There has been an error"
   options={['Option 1', 'Option 2', 'Option 3']}
/>`;
