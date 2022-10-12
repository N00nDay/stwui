import type { Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'start',
		type: 'number',
		default: ''
	},
	{
		id: '2',
		prop: 'end',
		type: 'number',
		default: ''
	},
	{
		id: '3',
		prop: 'total',
		type: 'number',
		default: ''
	},
	{
		id: '4',
		prop: 'scrollElement',
		type: 'string | undefined',
		default: ''
	}
];

export const example = `
<script lang="ts">
	import { Pagination } from 'stwui';
</script>

<Pagination start={1} end={25} total={97} />`;
