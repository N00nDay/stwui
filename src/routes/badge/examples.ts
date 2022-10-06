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

export const exampleSvelte = `
<script lang="ts">
	import { Badge } from 'stwui';
</script>

<Badge type="info">Badge</Badge>`;
