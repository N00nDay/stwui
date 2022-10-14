<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Content'
	});

	const defaultClass =
		'text-light-content dark:text-dark-content first:rounded-t-md last:rounded-b-md px-2 py-3 sm:px-6';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
