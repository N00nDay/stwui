<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import { useContext } from '../../utils/useContext';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Content'
	});

	const defaultClass =
		'text-light-content dark:text-dark-content first:rounded-t-md last:rounded-b-md px-2 py-3 sm:px-6';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
