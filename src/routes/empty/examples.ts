import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Empty.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'title',
		component: '<Empty.Title slot="title" />'
	},
	{
		id: '3',
		slot: 'description',
		component: '<Empty.Description slot="description" />'
	},
	{
		id: '4',
		slot: 'action',
		component: '<Empty.Action slot="action" />'
	},
	{
		id: '5',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const titleSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const descriptionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const actionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const usage = `
import { Empty } from 'stwui';
// OR
import Empty from 'stwui/empty'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { Empty, Button } from 'stwui';

	const lock = "svg-path";
	const plus_circle = "svg-path";
</script>

<Empty>
	<Empty.Icon slot="icon" data={lock} />
	<Empty.Title slot="title">No Projects</Empty.Title>
	<Empty.Description slot="description">
		Get started by creating a new project.
	</Empty.Description>
	<Empty.Action slot="action">
		<Button type="primary" on:click={() => console.log('clicked new project')}>
			<Button.Leading slot="leading" data={plus_circle} />
			New Project
		</Button>
	</Empty.Action>
</Empty>`;
