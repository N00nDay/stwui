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
	},
	{
		id: '3',
		prop: 'placeholder',
		type: 'boolean',
		default: 'true'
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

export const sizesExample = `
<script lang="ts">
   import { AvatarGroup } from 'stwui';
</script>

<AvatarGroup size="xs">
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>

<AvatarGroup size="sm">
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>

<AvatarGroup>
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>

<AvatarGroup size="lg">
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>

<AvatarGroup size="xl">
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>`;

export const shapesExample = `
<script lang="ts">
   import { AvatarGroup } from 'stwui';
</script>

<AvatarGroup shape="rounded">
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>

<AvatarGroup shape="square">
	<AvatarGroup.Avatar src={avatars[0]} />
	<AvatarGroup.Avatar src={avatars[1]} />
	<AvatarGroup.Avatar src={avatars[2]} />
	<AvatarGroup.Avatar src={avatars[3]} />
</AvatarGroup>`;

export const indicatorExample = `
<script lang="ts">
   import { AvatarGroup } from 'stwui';
</script>

<AvatarGroup size="lg">
	<AvatarGroup.Avatar src={avatars[0]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[1]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[2]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[3]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-left" />
	</AvatarGroup.Avatar>
</AvatarGroup>

<AvatarGroup size="lg">
	<AvatarGroup.Avatar src={avatars[0]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[1]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[2]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[3]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="top-right" />
	</AvatarGroup.Avatar>
</AvatarGroup>

<AvatarGroup size="lg">
	<AvatarGroup.Avatar src={avatars[0]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[1]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[2]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[3]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-left" />
	</AvatarGroup.Avatar>
</AvatarGroup>

<AvatarGroup size="lg">
	<AvatarGroup.Avatar src={avatars[0]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[1]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[2]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
	</AvatarGroup.Avatar>
	<AvatarGroup.Avatar src={avatars[3]}>
		<AvatarGroup.Avatar.Indicator slot="indicator" placement="bottom-right" />
	</AvatarGroup.Avatar>
</AvatarGroup>`;

export const initialsExample = `
<script lang="ts">
   import { AvatarGroup } from 'stwui';
</script>

<AvatarGroup>
	<AvatarGroup.Avatar initials="ND" />
	<AvatarGroup.Avatar initials="ND" />
	<AvatarGroup.Avatar initials="ND" />
	<AvatarGroup.Avatar initials="ND" />
</AvatarGroup>`;
