<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '$lib/utils/useContext';
	import { POST_HEADER_CONTEXT_ID } from './Header.svelte';

	useContext({
		context_id: POST_HEADER_CONTEXT_ID,
		parent: 'Post.Header',
		component: 'Post.Header.Created'
	});

	const defaultClass = 'text-md font-semibold text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<h3 class={finalClass}>
	<slot />
</h3>
