import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'trailing',
		type: '<a href="/types#MaterialIcon">MaterialIcon</a> | undefined',
		default: 'calendar_month'
	},
	{
		id: '2',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'label',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '4',
		prop: 'srOnly',
		type: 'boolean',
		default: 'false'
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
		type: 'string (<a target="_blank" href="https://day.js.org/docs/en/display/format">dayjs format</a>)',
		default: 'MMMM D, YYYY'
	},
	{
		id: '10',
		prop: 'locale',
		type: '<a href="/types#Locale">Locale</a>',
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
		type: '(d: <a target="_blank" href="https://day.js.org/docs/en/display/format">Dayjs</a>) => void) | undefined',
		default: ''
	}
];

export const example = `
<script lang="ts">
	import { DatePicker } from 'stwui';

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);
</script>

<DatePicker name="date-1" />
<br />
<DatePicker name="date-2" label="Date" max={date2Max} min={date2Min} />
<br />
<DatePicker name="date-3" label="Date" min={date2Min} error="Your doing it wrong" />`;
