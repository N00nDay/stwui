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
		component: '<ButtonGroup.Button.Leading slot="leading" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<ButtonGroup.Button.Icon slot="icon" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	},
	{
		id: '4',
		slot: 'trailing',
		component: '<ButtonGroup.Button.Trailing slot="trailing" />'
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
	import { ButtonGroup, Icon } from 'stwui';

	const home = "svg-path";
	const send = "svg-path";
	const lock = "svg-path";
</script>

<ButtonGroup>
	<ButtonGroup.Button>
		<ButtonGroup.Button.Icon slot="icon" data={home} />
	</ButtonGroup.Button>
	<ButtonGroup.Button>
		<ButtonGroup.Button.Icon slot="icon" data={send} />
	</ButtonGroup.Button>
	<ButtonGroup.Button>
		<ButtonGroup.Button.Icon slot="icon" data={lock} />
	</ButtonGroup.Button>
</ButtonGroup>`;

export const exampleLeading = `
<script lang="ts">
	import { ButtonGroup, Icon } from 'stwui';

	const home = "svg-path";
	const send = "svg-path";
	const lock = "svg-path";
</script>

<ButtonGroup>
	<ButtonGroup.Button>
		<ButtonGroup.Button.Leading slot="leading" data={home} />
		Paid
	</ButtonGroup.Button>
	<ButtonGroup.Button>
		<ButtonGroup.Button.Leading slot="leading" data={send} />
		Add
	</ButtonGroup.Button>
	<ButtonGroup.Button>
		<ButtonGroup.Button.Leading slot="leading" data={lock} />
		Workspaces
	</ButtonGroup.Button>
</ButtonGroup>`;

export const exampleLoading = `
<script lang="ts">
	import { ButtonGroup, Icon } from 'stwui';

	const home = "svg-path";
	const send = "svg-path";
	const lock = "svg-path";

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
		<ButtonGroup.Button.Icon slot="icon" data={home} />
	</ButtonGroup.Button>
	<ButtonGroup.Button
		on:click={() => changeActive(1)}
		active={activeItem === 1}
		loading={activeItem === 1 && loading}
	>
		<ButtonGroup.Button.Icon slot="icon" data={send} />
	</ButtonGroup.Button>
	<ButtonGroup.Button
		on:click={() => changeActive(2)}
		active={activeItem === 2}
		loading={activeItem === 2 && loading}
	>
		<ButtonGroup.Button.Icon slot="icon" data={lock} />
	</ButtonGroup.Button>
</ButtonGroup>`;
