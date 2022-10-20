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
		prop: 'type',
		type: "'text' | 'email' | 'password'",
		default: 'text'
	},
	{
		id: '3',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '4',
		prop: 'placholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '6',
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '7',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '8',
		prop: 'readonly',
		type: 'true | undefined',
		default: ''
	},
	{
		id: '9',
		prop: 'tabindex',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '10',
		prop: 'showPasswordToggle',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '11',
		prop: 'allowClear',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Input.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<Input.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'trailing',
		component: '<Input.Trailing slot="trailing" />'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const example = `
<script lang="ts">
	import { Input } from 'stwui';

	const email = "svg-path";
	const phone = "svg-path";
	const lock = "svg-path";
</script>

<Input name="input-1" placeholder="Basic" allowClear />

<Input name="input-2" allowClear>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading" data={email} />
	<Input.Trailing slot="trailing" data={phone} />
</Input>

<Input
	name="input-3"
	error="There has been an error"
	handleLeadingClick={() => console.log('clicking leading')}
>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading" data={email} />
	<Input.Trailing slot="trailing" data={phone} />
</Input>

<Input type="password" name="input-4" showPasswordToggle>
	<Input.Label slot="label">Password</Input.Label>
	<Input.Leading slot="leading" data={lock} />
</Input>`;
