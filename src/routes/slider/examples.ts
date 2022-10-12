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

export const example = `
<script lang="ts">
	import { Slider } from 'stwui';
</script>

<Slider value={20} />

<Slider value={40} type="warn" />

<Slider value={60} type="error" />

<Slider value={80} type="success" />`;

export const stepExample = `
<script lang="ts">
	import { Slider } from 'stwui';
</script>

<Slider value={20} class="mb-4" step={25} showStep />

<Slider value={40} type="warn" step={10} showStep />`;
