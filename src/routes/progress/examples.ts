import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'value',
		type: 'number',
		default: ''
	},
	{
		id: '2',
		prop: 'type',
		type: "'info' | 'warn' | 'error' | 'success'",
		default: 'info'
	},
	{
		id: '3',
		prop: 'radial',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '4',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	},
	{
		id: '5',
		prop: 'displayValue',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'indeterminate',
		type: 'boolean',
		default: 'false'
	}
];

export const usage = `
import { Progress } from 'stwui';
// OR
import Progress from 'stwui/progress'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Progress } from 'stwui';
</script>

<Progress value={25} />

<Progress value={50} />

<Progress value={75} displayValue />

<Progress value={100} />

<Progress value={0} indeterminate />`;

export const radialExample = `
<script lang="ts">
	import { Progress } from 'stwui';
</script>

<Progress value={25} size="xs" />

<Progress value={50} size="sm" />

<Progress value={75} />

<Progress value={85} size="lg" />

<Progress value={100} size="xl" />

<Progress value={25} radial size="xs" />

<Progress value={50} radial size="sm" />

<Progress value={75} radial />

<Progress value={85} radial size="lg" />

<Progress value={100} radial size="xl" />`;

export const typeExample = `
<script lang="ts">
	import { Progress } from 'stwui';
</script>

<Progress value={75} type="error" />

<Progress value={75} type="success" />

<Progress value={75} type="warn" />

<Progress value={75} />

<Progress value={75} radial type="error" />

<Progress value={75} radial type="success" />

<Progress value={75} radial type="warn" />

<Progress value={75} radial />`;
