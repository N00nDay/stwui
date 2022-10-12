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
		prop: 'label',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'srOnly',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '7',
		prop: 'placholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '9',
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '10',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '11',
		prop: 'autofocus',
		type: 'boolean',
		default: ''
	},
	{
		id: '12',
		prop: 'readonly',
		type: 'boolean',
		default: ''
	},
	{
		id: '13',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '14',
		prop: 'handleLeadingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '15',
		prop: 'handleTrailingClick',
		type: '(() => void) | undefined',
		default: ''
	},
	{
		id: '16',
		prop: 'step',
		type: 'numbers',
		default: '1'
	}
];

export const example = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<Input name="input-number-1" placeholder="Basic" />
<br />
<Input name="input-number-2" label="Number" trailing="phone" />`;
