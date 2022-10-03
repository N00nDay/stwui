<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { AVATAR_PLACEHOLDER_CONTEXT_ID } from './Placeholder.svelte';
	import { getContext } from 'svelte/internal';
	import { useContext } from '../../utils/useContext';
	import type MaterialIcons from '../../types/material-icons';

	export let icon: MaterialIcons = 'person';

	useContext({
		context_id: AVATAR_CONTEXT_ID,
		parent: 'Avatar',
		component: 'Avatar.Placeholder.Icon'
	});

	useContext({
		context_id: AVATAR_PLACEHOLDER_CONTEXT_ID,
		parent: 'Avatar.Placeholder',
		component: 'Avatar.Placeholder.Icon'
	});

	const { size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' } = getContext(AVATAR_CONTEXT_ID);

	let defaultClass =
		'material-icons absolute text-light-icon dark:text-dark-icon transition-all duration-150';
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
