import type { Prop, Slot } from '../../docs';

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
		type: 'boolean',
		default: ''
	},
	{
		id: '8',
		prop: 'readonly',
		type: 'boolean',
		default: ''
	},
	{
		id: '9',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Currency.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<Currency.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'trailing',
		component: '<Currency.Trailing slot="trailing" />'
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
	import { Currency, Icon } from 'stwui';

	const currency_usd = "svg-path";
	const phone = "svg-path";
	const email = "svg-path";
</script>

<Currency name="currency-1" placeholder="Basic" />
<br />
<Currency name="currency-2">
	<Currency.Label slot="label">Label</Currency.Label>
	<Currency.Leading slot="leading">
		<Icon path={currency_usd} />
	</Currency.Leading>
	<Currency.Trailing slot="trailing">
		<Icon path={phone} />
	</Currency.Trailing>
</Currency>
<br />
<Currency name="currency-3" error="There has been an error">
	<Currency.Label slot="label">Label</Currency.Label>
	<Currency.Leading slot="leading">
		<Icon path={email} />
	</Currency.Leading>
</Currency>`;
