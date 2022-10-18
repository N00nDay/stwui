<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { AVATAR_GROUP_CONTEXT_ID } from './AvatarGroup.svelte';
	import { AVATAR_GROUP_AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { AVATAR_GROUP_AVATAR_PLACEHOLDER_CONTEXT_ID } from './Placeholder.svelte';
	import { getContext } from 'svelte/internal';
	import { useContext } from '../../utils/useContext';
	import Icon from '../icon';
	import { account } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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

	let defaultClass = 'absolute text-light-icon dark:text-dark-icon';
	if (size === 'xs') {
		defaultClass += ' text-2xl bottom-[-0.5rem]  h-7 w-7';
	} else if (size === 'sm') {
		defaultClass += ' text-4xl bottom-[-0.5rem] h-10 w-10';
	} else if (size === 'md') {
		defaultClass += ' text-5xl bottom-[-0.5rem] h-12 w-12';
	} else if (size === 'lg') {
		defaultClass += ' text-6xl bottom-[-0.75rem] h-14 w-14';
	} else if (size === 'xl') {
		defaultClass += ' text-7xl bottom-[-0.75rem] h-[4.5rem] w-[4.5rem]';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if $$slots.default}
		<slot />
	{:else}
		<Icon data={account} class="h-full w-full" />
	{/if}
</span>
