<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '$lib/utils/useContext';
	import { POST_HEADER_CONTEXT_ID } from './Header.svelte';

	useContext({
		context_id: POST_HEADER_CONTEXT_ID,
		parent: 'Post.Header',
		component: 'Post.Header.Created'
	});

	const defaultClass = 'text-xs text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<p class={finalClass} style={$$props.style}>
	<slot />
</p>
