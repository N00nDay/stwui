<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { AVATAR_PLACEHOLDER_CONTEXT_ID } from './Placeholder.svelte';
	import { getContext } from 'svelte/internal';
	import { useContext } from '../../utils/useContext';
	import type { MaterialIcon } from '../../types';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let icon: MaterialIcon = 'person';

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

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{icon}
</span>
