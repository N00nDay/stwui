import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'on',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'content-left',
		component: '<Toggle.ContentLeft slot="content-left" />'
	},
	{
		id: '2',
		slot: 'left-icon',
		component: '<Toggle.LeftIcon slot="left-icon" />'
	},
	{
		id: '3',
		slot: 'right-icon',
		component: '<Toggle.RightIcon slot="right-icon" />'
	},
	{
		id: '4',
		slot: 'content-right',
		component: '<Toggle.ContentRight slot="content-right" />'
	}
];

export const contentLeftSlots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Toggle.ContentLeft.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'left-icon',
		component: '<Toggle.ContentLeft.Description slot="description" />'
	}
];

export const contentRightSlots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Toggle.ContentRight.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'left-icon',
		component: '<Toggle.ContentRight.Description slot="description" />'
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

export const example = `
<script lang="ts">
	import { Toggle } from 'stwui';
</script>

<Toggle name="toggle-1" />

<Toggle name="toggle-2">
   <Toggle.ContentLeft slot="content-left">
      <Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
   </Toggle.ContentLeft>
</Toggle>

<Toggle name="toggle-3">
   <Toggle.ContentRight slot="content-right">
      <Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
   </Toggle.ContentRight>
</Toggle>

<Toggle name="toggle-4">
   <Toggle.ContentLeft slot="content-left">
      <Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
   </Toggle.ContentLeft>
   <Toggle.ContentRight slot="content-right">
      <Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
   </Toggle.ContentRight>
</Toggle>

<Toggle name="toggle-5">
   <Toggle.ContentRight slot="content-right">
      <Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
      <Toggle.ContentRight.Description slot="description">
         (10% off)
      </Toggle.ContentRight.Description>
   </Toggle.ContentRight>
</Toggle>`;

export const iconsExample = `
<script lang="ts">
	import { Toggle } from 'stwui';

	const brightness_4 = "svg-path";
	const brightness_5 = "svg-path";
</script>

<Toggle name="toggle">
	<Toggle.LeftIcon slot="left-icon" data={brightness_5} class="text-white" />
	<Toggle.RightIcon slot="right-icon" data={brightness_4} />
</Toggle>`;
