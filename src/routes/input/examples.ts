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
		prop: 'trailing',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a> | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '4',
		prop: 'type',
		type: "'text' | 'email' | 'password'",
		default: 'text'
	},
	{
		id: '5',
		prop: 'label',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '6',
		prop: 'srOnly',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '7',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'placholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '9',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '10',
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '11',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '12',
		prop: 'autofocus',
		type: 'true | undefined',
		default: ''
	},
	{
		id: '13',
		prop: 'readonly',
		type: 'true | undefined',
		default: ''
	},
	{
		id: '14',
		prop: 'tabindex',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '15',
		prop: 'handleLeadingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '16',
		prop: 'handleTrailingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '17',
		prop: 'showPasswordToggle',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '18',
		prop: 'allowClear',
		type: 'boolean',
		default: 'false'
	}
];

export const example = `
<script lang="ts">
	import { Input } from 'stwui';
</script>

<Input name="input-1" placeholder="Basic" allowClear />
<br />
<Input name="input-2" label="Label" leading="email" trailing="phone" allowClear />
<br />
<Input
   name="input-3"
   label="Label"
   leading="email"
   trailing="phone"
   error="There has been an error"
/>
<br />
<Input type="password" name="input-4" label="Password" leading="lock" showPasswordToggle />`;
