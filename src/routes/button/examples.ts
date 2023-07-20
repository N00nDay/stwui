import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '2',
		prop: 'htmlType',
		type: "'button' | 'submit' | 'reset'",
		default: 'button'
	},
	{
		id: '3',
		prop: 'loading',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '4',
		prop: 'defaultLoading',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '5',
		prop: 'type',
		type: "'default'| 'primary' | 'danger' | 'ghost' | 'link' | 'text' | 'dark' | undefined",
		default: ''
	},
	{
		id: '6',
		prop: 'shape',
		type: "'square' | 'circle' | 'rounded' | 'pill'",
		default: 'rounded'
	},
	{
		id: '7',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab'",
		default: 'md'
	},
	{
		id: '8',
		prop: 'disableHover',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '9',
		prop: 'ariaLabel',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '10',
		prop: 'href',
		type: 'string | undefined',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'leading',
		component: '<Button.Leading slot="leading" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Button.Icon slot="icon" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	},
	{
		id: '4',
		slot: 'trailing',
		component: '<Button.Trailing slot="trailing" />'
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

export const usage = `
import { Button } from 'stwui';
// OR
import Button from 'stwui/button'; // for tree shaking
`;

export const typeExample = `
<script lang="ts">
	import { Button } from 'stwui';
</script>

<Button on:click={() => console.log("I've been clicked!")}>No Type</Button>
<Button type="primary">primary</Button>
<Button type="danger">danger</Button>
<Button type="ghost">ghost</Button>
<Button type="link" href="https://google.com">link</Button>`;

export const exampleLoading = `
<script lang="ts">
	import { Button } from 'stwui';

	let loading = false;

   function toggleLoading() {
      loading = !loading;
   }
</script>

<Button {loading} on:click={toggleLoading}>No Type</Button>
<Button type="primary" {loading} on:click={toggleLoading}>primary</Button>
<Button type="danger" {loading} on:click={toggleLoading}>danger</Button>
<Button type="ghost" {loading} on:click={toggleLoading}>ghost</Button>
<Button type="link" {loading} on:click={toggleLoading}>link</Button>`;

export const exampleDisabled = `
<script lang="ts">
	import { Button } from 'stwui';
</script>

<Button disabled>No Type</Button>
<Button type="primary" disabled>primary</Button>
<Button type="danger" disabled>danger</Button>
<Button type="ghost" disabled>ghost</Button>
<Button type="link" disabled>link</Button>`;

export const exampleLeadingTrailing = `
<script lang="ts">
	import { Button } from 'stwui';

	const home = "svg-path";
</script>

<Button>
	<Button.Leading data={home} slot="leading" />
	No Type
</Button>
<Button type="primary">
	<Button.Leading data={home} slot="leading" />
	primary
</Button>
<Button type="danger">
	<Button.Leading data={home} slot="leading" />
	danger
</Button>
<Button type="ghost">
	<Button.Leading data={home} slot="leading" />
	ghost
</Button>
<Button type="link">
	<Button.Leading data={home} slot="leading" />
	link
</Button>

<Button>
	No Type
	<Button.Trailing data={home} slot="trailing" />
</Button>
<Button type="primary">
	primary
	<Button.Trailing data={home} slot="trailing" />
</Button>
<Button type="danger">
	danger
	<Button.Trailing data={home} slot="trailing" />
</Button>
<Button type="ghost">
	ghost
	<Button.Trailing data={home} slot="trailing" />
</Button>
<Button type="link">
	link
	<Button.Trailing data={home} slot="trailing" />
</Button>`;

export const exampleShape = `
<script lang="ts">
	import { Button } from 'stwui';

	const home = "svg-path";
</script>

<Button shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button shape="circle" type="primary">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button shape="circle" type="danger">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button shape="circle" type="ghost">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button shape="circle" type="link">
	<Button.Icon data={home} slot="icon" />
</Button>

<Button shape="pill">No Type</Button>
<Button shape="pill" type="primary">primary</Button>
<Button shape="pill" type="danger">danger</Button>
<Button shape="pill" type="ghost">ghost</Button>
<Button shape="pill" type="link">link</Button>

<Button shape="rounded">No Type</Button>
<Button shape="rounded" type="primary">primary</Button>
<Button shape="rounded" type="danger">danger</Button>
<Button shape="rounded" type="ghost">ghost</Button>
<Button shape="rounded" type="link">link</Button>

<Button shape="square">No Type</Button>
<Button shape="square" type="primary">primary</Button>
<Button shape="square" type="danger">danger</Button>
<Button shape="square" type="ghost">ghost</Button>
<Button shape="square" type="link">link</Button>`;

export const exampleSwap = `
<script lang="ts">
	import { Button, Swap } from 'stwui';

   let loading = false;

   function toggleLoading() {
      loading = !loading;
   }
</script>

<Button shape="circle" on:click={toggleLoading}>
	<Swap slot="icon" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button shape="circle" type="primary" on:click={toggleLoading}>
	<Swap slot="icon" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button shape="circle" type="danger" on:click={toggleLoading}>
	<Swap slot="icon" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button shape="circle" type="ghost" on:click={toggleLoading}>
	<Swap slot="icon" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button shape="circle" type="link" on:click={toggleLoading}>
	<Swap slot="icon" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>

<Button on:click={toggleLoading}>
	<Swap slot="leading" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
	No Type
</Button>
<Button type="primary" on:click={toggleLoading}>
	<Swap slot="leading" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
	primary
</Button>
<Button type="danger" on:click={toggleLoading}>
	<Swap slot="leading" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
	danger
</Button>
<Button type="ghost" on:click={toggleLoading}>
	<Swap slot="leading" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
	ghost
</Button>
<Button type="link" on:click={toggleLoading}>
	<Swap slot="leading" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
	link
</Button>

<Button on:click={toggleLoading}>
	No Type
	<Swap slot="trailing" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button type="primary" on:click={toggleLoading}>
	primary
	<Swap slot="trailing" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button type="danger" on:click={toggleLoading}>
	danger
	<Swap slot="trailing" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button type="ghost" on:click={toggleLoading}>
	ghost
	<Swap slot="trailing" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>
<Button type="link" on:click={toggleLoading}>
	link
	<Swap slot="trailing" {loading}>
		<Button.Icon data={menu} slot="on" stroke="currentColor" />
		<Button.Icon data={close} slot="off" stroke="currentColor" />
	</Swap>
</Button>`;

export const exampleSize = `
<script lang="ts">
	import { Button } from 'stwui';

	const home = "svg-path";
</script>

<Button type="primary" size="xs">xs</Button>
<Button type="primary" size="sm">sm</Button>
<Button type="primary" size="md">md</Button>
<Button type="primary" size="lg">lg</Button>
<Button type="primary" size="xl">xl</Button>

<Button type="primary" size="xs" shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button type="primary" size="sm" shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button type="primary" size="md" shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button type="primary" size="lg" shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button type="primary" size="xl" shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>
<Button type="primary" size="fab" shape="circle">
	<Button.Icon data={home} slot="icon" />
</Button>

<Button type="default" size="xs">
	<Button.Leading data={home} slot="leading" />
	xs
</Button>
<Button type="default" size="sm">
	<Button.Leading data={home} slot="leading" />
	sm
</Button>
<Button type="default" size="md">
	<Button.Leading data={home} slot="leading" />
	md
</Button>
<Button type="default" size="lg">
	<Button.Leading data={home} slot="leading" />
	lg
</Button>
<Button type="default" size="xl">
	<Button.Leading data={home} slot="leading" />
	xl
</Button>`;
