import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'trailing',
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
		prop: 'placholder',
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
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '9',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '10',
		prop: 'autofocus',
		type: 'boolean',
		default: ''
	},
	{
		id: '11',
		prop: 'readonly',
		type: 'boolean',
		default: ''
	},
	{
		id: '12',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '13',
		prop: 'handleLeadingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '14',
		prop: 'handleTrailingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '15',
		prop: 'leadingAriaLabel',
		type: 'string',
		default: 'currency leading'
	},
	{
		id: '16',
		prop: 'trailingAriaLabel',
		type: 'string',
		default: 'currency trailing'
	}
];

export const example = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency-1" placeholder="Basic" />
<br />
<Currency name="currency-2" label="Label" leading="email" trailing="phone" />
<br />
<Currency
   name="currency-3"
   label="Label"
   leading="email"
   trailing="phone"
   error="There has been an error"
/>`;
