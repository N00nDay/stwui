import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'success' | 'error'",
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

export const exampleDefault = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info">Default</Badge>
<Badge type="success">Default</Badge>
<Badge type="warn">Default</Badge>
<Badge type="error">Default</Badge>`;

export const exampleCustom = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge class="bg-green-800 text-green-200 bg-opacity-100">Custom</Badge>
<Badge class="bg-blue-800 text-blue-200 bg-opacity-100">Custom</Badge>
<Badge class="bg-red-800 text-red-200 bg-opacity-100">Custom</Badge>
<Badge class="bg-amber-800 text-amber-200 bg-opacity-100">Custom</Badge>`;

export const exampleLarge = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info" size="large">Large</Badge>
<Badge type="success" size="large">Large</Badge>
<Badge type="warn" size="large">Large</Badge>
<Badge type="error" size="large">Large</Badge>`;

export const exampleIndicator = `
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

export const exampleShape = `
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

export const exampleClose = `
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
