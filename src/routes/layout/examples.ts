import type { Slot, Prop } from '../../docs';

export const contentProps: Prop[] = [
	{
		id: '1',
		prop: 'collapsed',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '2',
		prop: 'collapsedWidth',
		type: 'string',
		default: '4.5rem'
	},
	{
		id: '3',
		prop: 'expandedWidth',
		type: 'string',
		default: '12rem'
	}
];

export const headerSlots: Slot[] = [
	{
		id: '1',
		slot: 'extra',
		component: '<Layout.Header.Extra slot="extra" />'
	}
];

export const example = `
<script lang="ts">
	import { Layout } from 'stwui';
</script>

<Layout class="h-full">
	<Layout.Header class="static z-0 shadow-none border border-gray-500">
		Header
		<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
	</Layout.Header>
	<Layout.Content>
		<Layout.Content.Sidebar
			class="flex items-center justify-center border-l border-b border-gray-500 min-h-[200px]"
		>
			Sidebar
		</Layout.Content.Sidebar>
		<Layout.Content.Body
			class="flex items-center justify-center border-b border-r border-l border-gray-500 min-h-[200px]"
		>
			Body
		</Layout.Content.Body>
	</Layout.Content>
</Layout>`;
