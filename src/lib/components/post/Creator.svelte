<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
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

	const defaultClass = 'text-md font-semibold text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<h4
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</h4>
