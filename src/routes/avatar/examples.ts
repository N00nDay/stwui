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
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
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

export const exampleSize = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar src="image.png" size="xs" />
<Avatar src="image.png" size="sm" />
<Avatar src="broken-image.png" />
<Avatar src="image.png" size="lg" />
<Avatar src="image.png" size="xl" />`;

export const exampleIndicator = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar size="xs" src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-right" />
</Avatar>
<Avatar size="sm" src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-right" />
</Avatar>
<Avatar src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-right" />
</Avatar>
<Avatar size="lg" src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-right" />
</Avatar>
<Avatar size="xl" src="image.png">
	<Avatar.Indicator slot="indicator" placement="bottom-right" />
</Avatar>`;

export const exampleInitials = `
<script lang="ts">
   import { Avatar } from 'stwui';
</script>

<Avatar size="xs" initials="CH" />
<Avatar size="sm" initials="CH" />
<Avatar initials="CH" />
<Avatar size="lg" initials="CH" />
<Avatar size="xl" initials="CH" />`;

export const exampleGroup = `
<script lang="ts">
   import { AvatarGroup } from 'stwui';

	const avatars = [
		'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	];
</script>

<AvatarGroup size="xs">
	{#each avatars as avatar}
		<AvatarGroup.Avatar src={avatar} />
	{/each}
</AvatarGroup>
<br />
<AvatarGroup size="sm">
	{#each avatars as avatar}
		<AvatarGroup.Avatar src={avatar} />
	{/each}
</AvatarGroup>
<br />
<AvatarGroup>
	{#each avatars as avatar}
		<AvatarGroup.Avatar src={avatar} />
	{/each}
</AvatarGroup>
<br />
<AvatarGroup size="lg">
	{#each avatars as avatar}
		<AvatarGroup.Avatar src={avatar} class="ring-primary dark:ring-primary" />
	{/each}
</AvatarGroup>
<br />
<AvatarGroup size="xl">
	{#each avatars as avatar}
		<AvatarGroup.Avatar src={avatar} />
	{/each}
</AvatarGroup>`;
