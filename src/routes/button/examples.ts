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

export const leadingTrailingIconSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Button.Leading.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
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
</script>

<Button>
	<Button.Leading slot="leading">
		<Button.Leading.Icon icon="paid" />
	</Button.Leading>
	Default Button
</Button>

<Button>
   Default Button
	<Button.Trailing slot="trailing">
		<Button.Trailing.Icon icon="paid" />
	</Button.Trailing>
</Button>`;

export const exampleShape = `
<script lang="ts">
	import { Button } from 'stwui';
</script>

<Button shape="circle" on:click={toggleLoading} {loading}>
	<Button.Icon slot="icon" icon="paid" />
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
      <Icon slot="on" icon="menu" />
      <Icon slot="off" icon="close" />
   </Swap>
</Button>

<Button type="primary">
   <Button.Leading slot="leading">
      <Swap {loading}>
         <Icon slot="on" icon="menu" />
         <Icon slot="off" icon="close" />
      </Swap>
   </Button.Leading>
   I am primary
</Button>`;
