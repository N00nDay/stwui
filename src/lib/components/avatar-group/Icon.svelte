<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { AVATAR_GROUP_CONTEXT_ID } from './AvatarGroup.svelte';
	import { AVATAR_GROUP_AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { AVATAR_GROUP_AVATAR_PLACEHOLDER_CONTEXT_ID } from './Placeholder.svelte';
	import { getContext } from 'svelte/internal';
	import { useContext } from '../../utils/useContext';
	import type MaterialIcons from '../../types/material-icons';

	export let icon: MaterialIcons = 'person';

	useContext({
		context_id: AVATAR_GROUP_CONTEXT_ID,
		parent: 'AvatarGroup',
		component: 'AvatarGroup.Avatar.Placeholder.Icon'
	});

	useContext({
		context_id: AVATAR_GROUP_AVATAR_CONTEXT_ID,
		parent: 'AvatarGroup.Avatar',
		component: 'AvatarGroup.Avatar.Placeholder.Icon'
	});

	useContext({
		context_id: AVATAR_GROUP_AVATAR_PLACEHOLDER_CONTEXT_ID,
		parent: 'AvatarGroup.Avatar.Placeholder',
		component: 'AvatarGroup.Avatar.Placeholder.Icon'
	});

	const { size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' } = getContext(AVATAR_GROUP_CONTEXT_ID);

	let defaultClass = 'material-icons absolute text-light-icon dark:text-dark-icon';
	if (size === 'xs') {
		defaultClass += ' text-2xl bottom-[-0.5rem]';
	} else if (size === 'sm') {
		defaultClass += ' text-4xl bottom-[-0.5rem]';
	} else if (size === 'md') {
		defaultClass += ' text-5xl bottom-[-0.5rem]';
	} else if (size === 'lg') {
		defaultClass += ' text-6xl bottom-[-0.75rem]';
	} else if (size === 'xl') {
		defaultClass += ' text-7xl bottom-[-0.75rem]';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}>
	{icon}
</span>
