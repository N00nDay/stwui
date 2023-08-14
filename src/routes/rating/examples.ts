import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'half',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '2',
		prop: 'outOf',
		type: 'number',
		default: '5'
	},
	{
		id: '3',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '4',
		prop: 'value',
		type: 'number',
		default: '0'
	},
	{
		id: '5',
		prop: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: 'md'
	},
	{
		id: '6',
		prop: 'showValue',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '7',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '8',
		prop: 'type',
		type: "'info' | 'success' | 'warn' | 'error' | undefined",
		default: ''
	}
];

export const usage = `
import { Rating } from 'stwui';
// OR
import Rating from 'stwui/rating'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Rating } from 'stwui';
</script>

<Rating name="rating-1" />

<Rating name="rating-2" value={3} showValue />`;

export const halfExample = `
<script lang="ts">
	import { Rating } from 'stwui';
</script>

<Rating name="rating-3" half />
<br />
<Rating name="rating-4" value={3} half class="text-orange-400" />`;

export const sizeExample = `
<script lang="ts">
	import { Rating } from 'stwui';
</script>

<Rating name="rating-5" size="sm" />
<br />
<Rating name="rating-6" value={3} class="text-orange-400" />
<br />
<Rating name="rating-7" value={3} size="lg" class="text-purple-400" />`;

export const showValueExample = `
<script lang="ts">
	import { Rating } from 'stwui';
</script>

<Rating name="rating-5" size="sm" showValue />
<br />
<Rating name="rating-6" value={3} class="text-orange-400" showValue />
<br />
<Rating name="rating-7" value={3} size="lg" class="text-purple-400" showValue />
<br />
<Rating name="rating-8" size="sm" half showValue />
<br />
<Rating name="rating-9" value={3} half class="text-orange-400" showValue />
<br />
<Rating name="rating-10" value={3.5} half size="lg" class="text-purple-400" showValue />`;
