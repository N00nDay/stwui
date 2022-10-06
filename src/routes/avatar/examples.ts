import type { Slot, Prop } from '../..//docs';

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
		component: '<Avatar.Placeholder.Icon slot="icon" />'
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
		type: 'MaterialIcon (string)',
		default: ''
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

export const groupProps: Prop[] = [
	{
		id: '1',
		prop: 'shape',
		type: "'circle' | 'rounded' | 'square'",
		default: 'circle'
	},
	{
		id: '2',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	}
];

export const groupSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<AvatarGroup.Avatar />'
	}
];

export const groupAvatarProps: Prop[] = [
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
		prop: 'initials',
		type: 'string',
		default: ''
	}
];

export const avatarExample = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar src="image.png" />`;

export const avatarGroupExample = `
<script lang="ts">
   import { AvatarGroup } from 'stwui';
</script>

<AvatarGroup>
   <AvatarGroup.Avatar src="image.png" />
   <AvatarGroup.Avatar src="image.png" />
   <AvatarGroup.Avatar src="image.png" />
</AvatarGroup>`;
