import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const buttonProps: Prop[] = [
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
		prop: 'ariaLabel',
		type: 'undefined | string',
		default: ''
	},
	{
		id: '9',
		prop: 'htmlType',
		type: 'string',
		default: 'button'
	}
];

export const buttonSlots: Slot[] = [
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

export const example = `
<script lang="ts">
	import { ButtonGroup } from 'stwui';
</script>

<ButtonGroup>
   <ButtonGroup.Button on:click={() => console.log('button clicked!')}>
      One
   </ButtonGroup.Button>
   <ButtonGroup.Button on:click={() => console.log('button clicked!')}>
      Two
   </ButtonGroup.Button>
   <ButtonGroup.Button on:click={() => console.log('button clicked!')}>
      Three
   </ButtonGroup.Button>
</ButtonGroup>`;

export const exampleActive = `
<script lang="ts">
	import { ButtonGroup } from 'stwui';

   let active = 1;
</script>

<ButtonGroup>
   <ButtonGroup.Button on:click={() => active = 0} active={active === 0}>
      One
   </ButtonGroup.Button>
   <ButtonGroup.Button on:click={() => active = 1} active={active === 1}>
      Two
   </ButtonGroup.Button>
   <ButtonGroup.Button on:click={() => active = 2} active={active === 2}>
      Three
   </ButtonGroup.Button>
</ButtonGroup>`;

export const exampleDisabled = `
<script lang="ts">
	import { ButtonGroup } from 'stwui';
</script>

<ButtonGroup>
   <ButtonGroup.Button disabled>
      One
   </ButtonGroup.Button>
   <ButtonGroup.Button>
      Two
   </ButtonGroup.Button>
   <ButtonGroup.Button>
      Three
   </ButtonGroup.Button>
</ButtonGroup>`;

export const exampleIcon = `
<script lang="ts">
	import { ButtonGroup } from 'stwui';
</script>

<ButtonGroup>
   <ButtonGroup.Button>
      <ButtonGroup.Button.Icon slot="icon" icon="paid" />
   </ButtonGroup.Button>
   <ButtonGroup.Button>
      <ButtonGroup.Button.Icon slot="icon" icon="add_circle" />
   </ButtonGroup.Button>
   <ButtonGroup.Button>
      <ButtonGroup.Button.Icon slot="icon" icon="workspaces" />
   </ButtonGroup.Button>
</ButtonGroup>`;

export const exampleLeading = `
<script lang="ts">
	import { ButtonGroup } from 'stwui';
</script>

<ButtonGroup>
   <ButtonGroup.Button>
      <ButtonGroup.Button.Leading slot="leading">
         <ButtonGroup.Button.Leading.Icon slot="icon" icon="paid" />
      </ButtonGroup.Button.Leading>
      Paid
   </ButtonGroup.Button>
   <ButtonGroup.Button>
      <ButtonGroup.Button.Leading slot="leading">
         <ButtonGroup.Button.Leading.Icon slot="icon" icon="add_circle" />
      </ButtonGroup.Button.Leading>
      Add
   </ButtonGroup.Button>
   <ButtonGroup.Button>
      <ButtonGroup.Button.Leading slot="leading">
         <ButtonGroup.Button.Leading.Icon slot="icon" icon="workspaces" />
      </ButtonGroup.Button.Leading>
      Workspaces
   </ButtonGroup.Button>
</ButtonGroup>`;

export const exampleLoading = `
<script lang="ts">
	import { ButtonGroup } from 'stwui';

   let activeItem: number;
	let loading = false;

	function changeActive(index: number) {
		activeItem = index;
		loading = true;

		setTimeout(() => {
			loading = false;
		}, 2000);
	}
</script>

<ButtonGroup>
   <ButtonGroup.Button
      on:click={() => changeActive(0)}
      active={activeItem === 0}
      loading={activeItem === 0 && loading}
   >
      <ButtonGroup.Button.Icon slot="icon" icon="paid" />
   </ButtonGroup.Button>
   <ButtonGroup.Button
      on:click={() => changeActive(1)}
      active={activeItem === 1}
      loading={activeItem === 1 && loading}
   >
      <ButtonGroup.Button.Icon slot="icon" icon="add_circle" />
   </ButtonGroup.Button>
   <ButtonGroup.Button
      on:click={() => changeActive(2)}
      active={activeItem === 2}
      loading={activeItem === 2 && loading}
   >
      <ButtonGroup.Button.Icon slot="icon" icon="workspaces" />
   </ButtonGroup.Button>
</ButtonGroup>`;
