import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'alt',
		type: 'string',
		default: 'avatar'
	},
	{
		id: '3',
		prop: 'shape',
		type: "'circle' | 'rounded' | 'square'",
		default: 'circle'
	},
	{
		id: '4',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	},
	{
		id: '5',
		prop: 'initials',
		type: 'string',
		default: ''
	},
	{
		id: '6',
		prop: 'placeholder',
		type: 'boolean',
		default: 'true'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'placeholder',
		component: '<Avatar.Placeholder slot="placeholder" />'
	},
	{
		id: '2',
		slot: 'indicator',
		component: '<Avatar.Indicator slot="indicator" />'
	}
];

export const placeholderSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: ''
	}
];

export const indicatorProps: Prop[] = [
	{
		id: '1',
		prop: 'placement',
		type: "'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'",
		default: 'top-right'
	}
];

export const sizeExample = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar src="image.png" size="xs" />
<Avatar src="image.png" size="sm" />
<Avatar src="image.png" />
<Avatar src="image.png" size="lg" />
<Avatar src="image.png" size="xl" />`;

export const brokenImageExample = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar src="broken_image.png" size="xs" />
<Avatar src="broken_image.png" size="sm" />
<Avatar src="broken_image.png" />
<Avatar src="broken_image.png" size="lg" />
<Avatar src="broken_image.png" size="xl" />`;

export const indicatorExample = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar size="xs" src="image.png">
	<Avatar.Indicator slot="indicator" placement="top-left" />
</Avatar>
<Avatar size="sm" src="image.png">
	<Avatar.Indicator slot="indicator" placement="top-right" />
</Avatar>
<Avatar src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-right" />
</Avatar>
<Avatar size="lg" src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-left" />
</Avatar>
<Avatar size="xl" src="image.png">
	<Avatar.Indicator slot="indicator" placement="top-left" />
</Avatar>`;

export const shapeExample = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar src="image.png" size="xs" shape="rounded" />
<Avatar src="image.png" size="sm" shape="rounded" />
<Avatar src="image.png" shape="rounded" />
<Avatar src="image.png" size="lg" shape="rounded" />
<Avatar src="image.png" size="xl" shape="rounded" />

<Avatar src="image.png" size="xs" shape="square" />
<Avatar src="image.png" size="sm" shape="square" />
<Avatar src="image.png" shape="square" />
<Avatar src="image.png" size="lg" shape="square" />
<Avatar src="image.png" size="xl" shape="square" />`;

export const initialsExample = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar size="xs" initials="CH" />
<Avatar size="sm" initials="CH" />
<Avatar initials="CH" />
<Avatar size="lg" initials="CH" />
<Avatar size="xl" initials="CH" />`;
