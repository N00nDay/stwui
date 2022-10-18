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
		type: 'undefined | string',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'leading',
		component: '<Icon path="" slot="leading" let:size {size} />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Icon path="" slot="icon" let:size {size} />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	},
	{
		id: '4',
		slot: 'trailing',
		component: '<Icon path="" slot="trailing" let:size {size} />'
	}
];

export const exampleDefault = `
<script lang="ts">
	import { Button } from 'stwui';
</script>

<Button on:click={() => console.log("I've been clicked!")}>Default button</Button>
<Button type="primary">I am primary</Button>
<Button type="danger">I am scary</Button>
<Button type="ghost">Boo I am a ghost</Button>
<Button type="link">I am a link</Button>`;

export const exampleLoading = `
<script lang="ts">
	import { Button } from 'stwui';
</script>

<Button loading>Default button</Button>
<Button type="primary" loading>I am primary</Button>
<Button type="danger" loading>I am scary</Button>
<Button type="ghost" loading>Boo I am a ghost</Button>
<Button type="link" loading>I am a link</Button>`;

export const exampleDisabled = `
<script lang="ts">
	import { Button } from 'stwui';
</script>

<Button disabled>Default button</Button>
<Button type="primary" disabled>I am primary</Button>
<Button type="danger" disabled>I am scary</Button>
<Button type="ghost" disabled>Boo I am a ghost</Button>
<Button type="link" disabled>I am a link</Button>`;

export const exampleLeadingTrailing = `
<script lang="ts">
	import { Button, Icon } from 'stwui';

	const home = "svg-path";
</script>

<Button>
	<Icon data={home} slot="leading" let:size {size} />
	Default button
</Button>

<Button type="primary">
	<Icon data={home} slot="leading" let:size {size} />
	I am primary
</Button>

<Button type="danger">
	I am scary
	<Icon data={home} slot="trailing" let:size {size} />
</Button>

<Button type="ghost">
	Boo I am a ghost
	<Icon data={home} slot="trailing" let:size {size} />
</Button>

<Button type="link">
	I am a link
	<Icon data={home} slot="trailing" let:size {size} />
</Button>`;

export const exampleShape = `
<script lang="ts">
	import { Button, Icon } from 'stwui';

	const home = "svg-path";
</script>

<Button shape="circle">
	<Icon data={home} slot="icon" let:size {size} />
</Button>

<Button type="primary" shape="square">I am primary</Button>

<Button type="danger" shape="rounded">I am scary</Button>

<Button type="ghost">Boo I am a ghost</Button>

<Button type="link">I am a link</Button>`;

export const exampleSwap = `
<script lang="ts">
	import { Button, Swap } from 'stwui';

   let loading = false;

   function toggleLoading() {
      loading = !loading;
   }
</script>

<Button shape="circle" on:click={toggleLoading}>
	<Swap slot="icon" {loading} let:size>
		<Icon data={menu} slot="on" {size} />
		<Icon data={close} slot="off" {size} />
	</Swap>
</Button>

<Button type="primary">
	<Swap {loading} slot="leading" let:size>
		<Icon data={menu} slot="on" {size} />
		<Icon data={close} slot="off" {size} />
	</Swap>
	I am primary
</Button>`;
