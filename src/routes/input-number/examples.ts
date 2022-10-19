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
	},
	{
		id: '10',
		prop: 'step',
		type: 'numbers',
		default: '1'
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

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	},
	{
		id: '2',
		slot: 'icon',
		component: '<InputNumber.Leading.Icon slot="icon" />'
	}
];

export const trailingSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	},
	{
		id: '2',
		slot: 'icon',
		component: '<InputNumber.Leading.Icon slot="icon" />'
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
	import { InputNumber } from 'stwui';

	const phone = "svg-path";
</script>

<InputNumber name="input-number-1" placeholder="Basic" />

<InputNumber name="input-number-2">
	<InputNumber.Label slot="label">Number</InputNumber.Label>
	<InputNumber.Trailing slot="trailing">
		<InputNumber.Trailing.Icon slot="icon" data={phone} />
	</InputNumber.Trailing>
</InputNumber>`;
