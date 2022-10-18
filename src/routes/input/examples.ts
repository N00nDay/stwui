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
		prop: 'autofocus',
		type: 'true | undefined',
		default: ''
	},
	{
		id: '9',
		prop: 'readonly',
		type: 'true | undefined',
		default: ''
	},
	{
		id: '10',
		prop: 'tabindex',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '11',
		prop: 'showPasswordToggle',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '12',
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

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const trailingSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Input, Icon } from 'stwui';

	const email = "svg-path";
	const phone = "svg-path";
	const lock = "svg-path";
</script>

<Input name="input-1" placeholder="Basic" allowClear />

<Input name="input-2" allowClear>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading">
		<Icon data={email} />
	</Input.Leading>
	<Input.Trailing slot="trailing">
		<Icon data={phone} />
	</Input.Trailing>
</Input>

<Input
	name="input-3"
	error="There has been an error"
	handleLeadingClick={() => console.log('clicking leading')}
>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading">
		<Icon data={email} />
	</Input.Leading>
	<Input.Trailing slot="trailing">
		<Icon data={phone} />
	</Input.Trailing>
</Input>

<Input type="password" name="input-4" showPasswordToggle>
	<Input.Label slot="label">Password</Input.Label>
	<Input.Leading slot="leading">
		<Icon data={lock} />
	</Input.Leading>
</Input>`;
