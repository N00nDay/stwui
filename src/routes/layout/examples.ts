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

export const defaultExample = `
<script lang="ts">
	import { Layout } from 'stwui';
</script>

<Layout class="h-full">
	<Layout.Header class="static z-0"
		>Header
		<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
	</Layout.Header>
	<Layout.Content>
		<Layout.Content.Body class="flex items-center justify-center min-h-[200px]"
			>Body</Layout.Content.Body
		>
	</Layout.Content>
	<Layout.Footer class="static z-0">
		Footer
		<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
	</Layout.Footer>
</Layout>`;

export const sidebarExample = `
<script lang="ts">
	import { Layout } from 'stwui';
</script>

<Layout class="h-full">
	<Layout.Header class="static z-0"
		>Header
		<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
	</Layout.Header>
	<Layout.Content>
		<Layout.Content.Sidebar class="flex items-center justify-center min-h-[200px]"
			>Sidebar</Layout.Content.Sidebar
		>
		<Layout.Content.Body class="flex items-center justify-center min-h-[200px]"
			>Body</Layout.Content.Body
		>
	</Layout.Content>
	<Layout.Footer class="static z-0">
		Footer
		<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
	</Layout.Footer>
</Layout>`;

export const sidebarRightExample = `
<script lang="ts">
	import { Layout } from 'stwui';
</script>

<Layout class="h-full">
	<Layout.Header class="static z-0"
		>Header
		<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
	</Layout.Header>
	<Layout.Content>
		<Layout.Content.Body class="flex items-center justify-center min-h-[200px]"
			>Body</Layout.Content.Body
		>
		<Layout.Content.Sidebar class="flex items-center justify-center min-h-[200px]"
			>Sidebar</Layout.Content.Sidebar
		>
	</Layout.Content>
	<Layout.Footer class="static z-0">
		Footer
		<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
	</Layout.Footer>
</Layout>`;

export const sidebarOutsideExample = `
<script lang="ts">
	import { Layout } from 'stwui';
</script>

<Layout class="h-full">
	<Layout.Content>
		<Layout.Content.Sidebar class="flex items-center justify-center min-h-[328px]"
			>Sidebar</Layout.Content.Sidebar
		>
		<Layout class="flex flex-col items-center justify-center min-h-[200px]">
			<Layout.Header class="static z-0"
				>Header
				<Layout.Header.Extra slot="extra">Header Extra</Layout.Header.Extra>
			</Layout.Header>

			<Layout.Content>
				<Layout.Content.Body class="flex items-center justify-center min-h-[200px]"
					>Body</Layout.Content.Body
				>
			</Layout.Content>

			<Layout.Footer class="static z-0 max-h-[64px]">
				Footer
				<Layout.Footer.Extra slot="extra">Footer Extra</Layout.Footer.Extra>
			</Layout.Footer>
		</Layout>
	</Layout.Content>
</Layout>`;
