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
		prop: 'readonly',
		type: 'boolean',
		default: ''
	},
	{
		id: '8',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '9',
		prop: 'step',
		type: 'number',
		default: '1'
	},
	{
		id: '10',
		prop: 'showSpin',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<InputNumber.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<InputNumber.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'trailing',
		component: '<InputNumber.Trailing slot="trailing" />'
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

export const basicExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input" placeholder="Basic" />`;

export const withLabelExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input">
	<InputNumber.Label slot="label">Label</InputNumber.Label>
</InputNumber>`;

export const withLeadingExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';

	const email = "svg-path";
</script>

<InputNumber name="input" allowClear>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
</InputNumber>`;

export const withtrailingExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';

	const phone = "svg-path";
</script>

<InputNumber name="input" allowClear>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Trailing slot="trailing" data={phone} />
</InputNumber>`;

export const withErrorExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';

	const email = "svg-path";
	const phone = "svg-path";
</script>

<InputNumber
	name="input"
	bind:value
	{error}
	handleLeadingClick={() => console.log('clicking leading')}
>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
	<InputNumber.Trailing slot="trailing" data={phone} />
</InputNumber>`;

export const disabledExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input" disabled>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
</InputNumber>`;

export const showSpinExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input" allowClear showSpin>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
</InputNumber>`;

export const minExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input" min="1" showSpin>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
</InputNumber>`;

export const maxExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input" max="10" showSpin>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
</InputNumber>`;

export const minMaxExample = `
<script lang="ts">
	import { InputNumber } from 'stwui';
</script>

<InputNumber name="input-3" min="0" max="10" showSpin>
	<InputNumber.Label slot="label">Label</InputNumber.Label>
	<InputNumber.Leading slot="leading" data={email} />
</InputNumber>`;
