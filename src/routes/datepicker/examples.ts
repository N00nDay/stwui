import type { Prop, Slot } from '../../docs';

export const props: Prop[] = [
	{
		id: '2',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '5',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'placeholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '6',
		prop: 'value',
		type: 'Date | null',
		default: 'null'
	},
	{
		id: '7',
		prop: 'min',
		type: 'Date | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'max',
		type: 'Date | undefined',
		default: ''
	},
	{
		id: '9',
		prop: 'format',
		type: 'string (<a class="link" target="_blank" rel="noreferrer" href="https://day.js.org/docs/en/display/format">dayjs format</a>)',
		default: 'MMMM D, YYYY'
	},
	{
		id: '10',
		prop: 'locale',
		type: '<a class="link" href="/types#Locale">Locale</a>',
		default: '{}'
	},
	{
		id: '11',
		prop: 'visible',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '12',
		prop: 'closeOnSelect',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '13',
		prop: 'handleSelect',
		type: '(d: <a class="link" target="_blank" rel="noreferrer" href="https://day.js.org/docs/en/display/format">Dayjs</a>) => void) | undefined',
		default: ''
	},
	{
		id: '14',
		prop: 'disabled',
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

export const basicExample = `
<script lang="ts">
	import { DatePicker } from 'stwui';
</script>

<DatePicker name="date" placeholder="Basic" />`;

export const withLabelExample = `
<script lang="ts">
	import { DatePicker } from 'stwui';
</script>

<DatePicker name="date" allowClear>
	<DatePicker.Label slot="label">Date</DatePicker.Label>
</DatePicker>`;

export const withLeadingExample = `
<script lang="ts">
	import { DatePicker } from 'stwui';

	const calendar = "svg-path";
</script>

<DatePicker
	name="date-3"
	allowClear
>
	<DatePicker.Label slot="label">Date</DatePicker.Label>
	<DatePicker.Leading slot="leading" data={calendar} />
</DatePicker>`;

export const withtrailingExample = `
<script lang="ts">
	import { DatePicker } from 'stwui';

	const calendar = "svg-path";
</script>

<DatePicker
	name="date-4"
	label="Date"
>
	<DatePicker.Label slot="label">Date</DatePicker.Label>
	<DatePicker.Trailing slot="trailing" data={calendar} />
</DatePicker>`;

export const withErrorExample = `
<script lang="ts">
	import { DatePicker } from 'stwui';
</script>

<DatePicker
	name="date"
	label="Date"
>
	<DatePicker.Label slot="label">Date</DatePicker.Label>
	<DatePicker.Trailing slot="trailing" data={calendar} />
</DatePicker>`;

export const disabledExample = `
<script lang="ts">
	import { DatePicker } from 'stwui';
</script>

<DatePicker
	name="date"
	label="Date"
	disabled
>
	<DatePicker.Label slot="label">Date</DatePicker.Label>
	<DatePicker.Trailing slot="trailing" data={calendar} />
</DatePicker>`;
