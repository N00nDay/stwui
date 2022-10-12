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
		prop: 'label',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'srOnly',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '4',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'placholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '6',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '7',
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '8',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '9',
		prop: 'autofocus',
		type: "'true' | undefined",
		default: ''
	},
	{
		id: '10',
		prop: 'readonly',
		type: 'true | undefined',
		default: ''
	}
];

export const example = `
<script lang="ts">
	import { TextArea } from 'stwui';
</script>

<TextArea name="input-1" placeholder="Basic" />
<br />
<TextArea name="input-2" label="Label" leading="email" trailing="phone" />
<br />
<TextArea
   name="input-3"
   label="Label"
   leading="email"
   trailing="phone"
   error="There has been an error"
/>`;
