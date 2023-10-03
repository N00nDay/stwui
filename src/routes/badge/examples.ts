import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'success' | 'error' | undefined",
		default: ''
	},
	{
		id: '2',
		prop: 'size',
		type: "'default' | 'large'",
		default: 'default'
	},
	{
		id: '3',
		prop: 'shape',
		type: "'default' | 'rounded' | 'square'",
		default: 'default'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'indicator',
		component: '<Badge.Indicator slot="indicator" />'
	},
	{
		id: '2',
		slot: 'default',
		component: ''
	},
	{
		id: '3',
		slot: 'close',
		component: '<Badge.Close slot="close" />'
	}
];

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-badge'
	},
	{
		id: '2',
		class: 'stwui-badge-close'
	},
	{
		id: '3',
		class: 'stwui-badge-indicator'
	}
];

export const usage = `
import { Badge } from 'stwui';
// OR
import Badge from 'stwui/badge'; // for tree shaking
`;

export const typeExample = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge>default</Badge>
<Badge type="info">info</Badge>
<Badge type="success">success</Badge>
<Badge type="warn">warn</Badge>
<Badge type="error">error</Badge>`;

export const customeExample = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge class="bg-green-800 text-green-200">bg-green-800</Badge>
<Badge class="bg-blue-800 text-blue-200">bg-blue-800</Badge>
<Badge class="bg-red-800 text-red-200">bg-red-800</Badge>
<Badge class="bg-amber-800 text-amber-200">bg-amber-800</Badge>`;

export const sizeExample = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info" size="large">Large</Badge>
<Badge type="success" size="large">Large</Badge>
<Badge type="warn" size="large">Large</Badge>
<Badge type="error" size="large">Large</Badge>`;

export const indicatorExample = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info">
	<Badge.Indicator slot="indicator" />
	Indicator
</Badge>
<Badge type="success">
	<Badge.Indicator slot="indicator" />
	Indicator
</Badge>
<Badge type="warn"><Badge.Indicator slot="indicator" />
	Indicator
</Badge>
<Badge type="error"><Badge.Indicator slot="indicator" />
	Indicator
</Badge>`;

export const shapeExample = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info" shape="rounded">Shape</Badge>
<Badge type="success" shape="rounded">Shape</Badge>
<Badge type="warn" shape="rounded">Shape</Badge>
<Badge type="error" shape="rounded">Shape</Badge>

<Badge type="info" shape="square">Shape</Badge>
<Badge type="success" shape="square">Shape</Badge>
<Badge type="warn" shape="square">Shape</Badge>
<Badge type="error" shape="square">Shape</Badge>`;

export const closeExample = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info">
	Close
	<Badge.Close
		slot="close"
		on:click={() => console.log('clicked badge close')}
	/>
</Badge>
<Badge type="success">
	Close
	<Badge.Close
		slot="close"
		on:click={() => console.log('clicked badge close')}
	/>
</Badge>
<Badge type="warn">
	Close
	<Badge.Close
		slot="close"
		on:click={() => console.log('clicked badge close')}
	/>
</Badge>
<Badge type="error">
	Close
	<Badge.Close
		slot="close"
		on:click={() => console.log('clicked badge close')}
	/>
</Badge>`;
