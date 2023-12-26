import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: 'nanoid()'
	},
	{
		id: '2',
		prop: 'on',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '3',
		prop: 'error',
		type: 'string | undefined',
		default: ''
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
		slot: 'description',
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
		slot: 'description',
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

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-toggle-wrapper'
	},
	{
		id: '2',
		class: 'stwui-toggle'
	},
	{
		id: '3',
		class: 'stwui-toggle-dongle'
	},
	{
		id: '4',
		class: 'stwui-toggle-left-icon-wrapper'
	},
	{
		id: '5',
		class: 'stwui-toggle-right-icon-wrapper'
	},
	{
		id: '6',
		class: 'stwui-toggle-error'
	},
	{
		id: '7',
		class: 'stwui-toggle-label'
	},
	{
		id: '8',
		class: 'stwui-toggle-content-left'
	},
	{
		id: '9',
		class: 'stwui-toggle-content-right'
	},
	{
		id: '10',
		class: 'stwui-toggle-description'
	}
];

export const usage = `
<script>
	import { Toggle } from 'stwui';
	// OR
	import Toggle from 'stwui/toggle'; // for tree shaking

	let toggled = false;
</script>

<Toggle bind:on={toggled}> />`;

export const example1 = `
<script lang="ts">
	import { Toggle } from 'stwui';

	let toggled = false;
</script>

<Toggle bind:on={toggled} />`;

export const example2 = `
<script lang="ts">
	import { Toggle } from 'stwui';

	let toggled = false;
</script>

<Toggle bind:on={toggled}>
	<Toggle.ContentLeft slot="content-left">
		<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
	</Toggle.ContentLeft>
</Toggle>`;

export const example3 = `
<script lang="ts">
	import { Toggle } from 'stwui';

	let toggled = false;
</script>

<Toggle bind:on={toggled}>
	<Toggle.ContentLeft slot="content-left">
		<Toggle.ContentLeft.Label slot="label">Left Label</Toggle.ContentLeft.Label>
	</Toggle.ContentLeft>
	<Toggle.ContentRight slot="content-right">
		<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
	</Toggle.ContentRight>
</Toggle>`;

export const example4 = `
<script lang="ts">
	import { Toggle } from 'stwui';

	let toggled = false;
</script>

<Toggle bind:on={toggled}>
	<Toggle.ContentRight slot="content-right">
		<Toggle.ContentRight.Label slot="label">Right Label</Toggle.ContentRight.Label>
		<Toggle.ContentRight.Description slot="description"
			>(10% off)</Toggle.ContentRight.Description
		>
	</Toggle.ContentRight>
</Toggle>`;

export const example5 = `
<script lang="ts">
	import { Toggle } from 'stwui';

	let toggled = false;
	let error: string | undefined = 'Here is an error!';

	$: if (toggled) {
		error = undefined;
	} else {
		error = 'Here is an error!';
	}
</script>

<Toggle {error} bind:on={toggled} />`;

export const example6 = `
<script lang="ts">
	import { Toggle } from 'stwui';

	let toggled = false;
</script>

<Toggle bind:on={toggled}>
	<Toggle.LeftIcon slot="left-icon" data={brightness_5} class="text-white" />
	<Toggle.RightIcon slot="right-icon" data={brightness_4} />
</Toggle>`;
