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
		type: 'string (<a class="link" target="_blank" href="https://day.js.org/docs/en/display/format">dayjs format</a>)',
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
		type: '(d: <a class="link" target="_blank" href="https://day.js.org/docs/en/display/format">Dayjs</a>) => void) | undefined',
		default: ''
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
	import { DatePicker, Icon } from 'stwui';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);

	const calendar = "svg-path";
	const phone = "svg-path";
</script>

<DatePicker name="date-1" placeholder="Basic" />

<DatePicker name="date-2" label="Date" max={date2Max} min={date2Min}>
	<DatePicker.Label slot="label">Date</DatePicker.Label>
	<DatePicker.Trailing slot="trailing">
		<Icon data={calendar} />
	</DatePicker.Trailing>
</DatePicker>

<DatePicker name="date-3" min={date2Min} error="Your doing it wrong">
	<DatePicker.Label slot="label">Date</DatePicker.Label>
	<DatePicker.Leading slot="leading">
		<Icon data={phone} />
	</DatePicker.Leading>
</DatePicker>`;
