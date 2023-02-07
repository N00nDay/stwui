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
	import { Button } from 'stwui';

	const home = "svg-path";
</script>

<Button>
	<Button.Leading data={home} slot="leading" />
	Default button
</Button>

<Button type="primary">
	<Button.Leading data={home} slot="leading" />
	I am primary
</Button>

<Button type="danger">
	I am scary
	<Button.Trailing data={home} slot="trailing" />
</Button>

<Button type="ghost">
	Boo I am a ghost
	<Button.Trailing data={home} slot="trailing" />
</Button>

<Button type="link">
	I am a link
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
	<Swap slot="icon" {loading}>
		<Button.Icon data={menu} slot="on" />
		<Button.Icon data={close} slot="off" />
	</Swap>
</Button>

<Button type="primary">
	<Swap {loading} slot="leading">
		<Button.Icon data={menu} slot="on" />
		<Button.Icon data={close} slot="off" />
	</Swap>
	I am primary
</Button>`;
