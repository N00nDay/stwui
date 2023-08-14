import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'value',
		type: 'number',
		default: '0'
	},
	{
		id: '2',
		prop: 'min',
		type: 'number',
		default: '0'
	},
	{
		id: '3',
		prop: 'max',
		type: 'number',
		default: '100'
	},
	{
		id: '4',
		prop: 'step',
		type: 'number',
		default: '1'
	},
	{
		id: '5',
		prop: 'showStep',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'type',
		type: "'info' | 'warn' | 'error' | 'success'",
		default: 'info'
	}
];

export const usage = `
import { Slider } from 'stwui';
// OR
import Slider from 'stwui/slider'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Slider } from 'stwui';
</script>

<Slider value={50} />`;

export const exampleType = `
<script lang="ts">
	import { Slider } from 'stwui';
</script>

<Slider value={20} type="info" />

<Slider value={40} type="warn" />

<Slider value={60} type="error" />

<Slider value={80} type="success" />`;

export const exampleStep = `
<script lang="ts">
	import { Slider } from 'stwui';
</script>

<Slider value={20} type="info" step={25} />
		
<Slider value={40} type="warn" step={10} />`;

export const exampleShowStep = `
<script lang="ts">
	import { Slider } from 'stwui';
</script>

<Slider value={20} type="info" step={25} showStep />
		
<Slider value={40} type="warn" step={10} showStep />`;
