<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { POST_HEADER_AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { POST_HEADER_AVATAR_PLACEHOLDER_CONTEXT_ID } from './Placeholder.svelte';
	import { useContext } from '../../utils/useContext';
	import type { MaterialIcon } from '../../types';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let icon: MaterialIcon = 'person';

	useContext({
		context_id: POST_HEADER_AVATAR_CONTEXT_ID,
		parent: 'Post.Header.Avatar',
		component: 'Post.Header.Avatar.Placeholder.Icon'
	});

	useContext({
		context_id: POST_HEADER_AVATAR_PLACEHOLDER_CONTEXT_ID,
		parent: 'Post.Header.Avatar.Placeholder',
		component: 'Post.Header.Avatar.Placeholder.Icon'
	});

	const defaultClass =
		'material-icons absolute text-light-icon dark:text-dark-icon text-5xl bottom-[-0.5rem]';
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
