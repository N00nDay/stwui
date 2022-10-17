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
	import { InputNumber, Icon } from 'stwui';

	const phone = "svg-path";
</script>

<InputNumber name="input-number-1" placeholder="Basic" />

<InputNumber name="input-number-2">
	<InputNumber.Label slot="label">Number</InputNumber.Label>
	<InputNumber.Trailing slot="trailing">
		<Icon path={phone} />
	</InputNumber.Trailing>
</InputNumber>`;
