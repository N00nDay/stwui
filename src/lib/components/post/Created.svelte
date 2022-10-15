<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '$lib/utils/useContext';
	import { POST_HEADER_CONTEXT_ID } from './Header.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: POST_HEADER_CONTEXT_ID,
		parent: 'Post.Header',
		component: 'Post.Header.Created'
	});

	const defaultClass = 'text-xs text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<p
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</p>
