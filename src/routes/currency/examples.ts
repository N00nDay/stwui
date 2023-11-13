import type { IClass, Prop, Slot } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: 'nanoid()'
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
		prop: 'readonly',
		type: 'boolean',
		default: ''
	},
	{
		id: '8',
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

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-currency-wrapper'
	},
	{
		id: '2',
		class: 'stwui-currency-input'
	},
	{
		id: '3',
		class: 'stwui-currency-leading-wrapper'
	},
	{
		id: '4',
		class: 'stwui-currency-clear-wrapper'
	},
	{
		id: '5',
		class: 'stwui-currency-trailing-wrapper'
	},
	{
		id: '6',
		class: 'stwui-currency-error-icon'
	},
	{
		id: '7',
		class: 'stwui-currency-error'
	},
	{
		id: '8',
		class: 'stwui-currency-label'
	}
];

export const usage = `
import { Currency } from 'stwui';
// OR
import Currency from 'stwui/currency'; // for tree shaking
`;

export const basicExample = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency" placeholder="Basic" />`;

export const withLabelExample = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency">
	<Currency.Label slot="label">Label</Currency.Label>
</Currency>`;

export const withLeadingExample = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency">
	<Currency.Label slot="label">Label</Currency.Label>
	<Currency.Leading slot="leading" data={currency_usd} />
</Currency>`;

export const withtrailingExample = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency-3" class="w-full max-w-[400px]">
	<Currency.Label slot="label">Label</Currency.Label>
	<Currency.Trailing slot="trailing" data={currency_usd} />
</Currency>`;

export const withErrorExample = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency" {error} bind:value allowClear>
	<Currency.Label slot="label">Label</Currency.Label>
	<Currency.Leading slot="leading" data={email} />
</Currency>`;

export const disabledExample = `
<script lang="ts">
	import { Currency } from 'stwui';
</script>

<Currency name="currency" disabled>
	<Currency.Label slot="label">Label</Currency.Label>
</Currency>`;
