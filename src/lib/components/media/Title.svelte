<script lang="ts">
	import { MEDIA_CONTEXT_ID } from './Media.svelte';
	import { MEDIA_CONTENT_CONTEXT_ID } from './Content.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: MEDIA_CONTEXT_ID,
		parent: 'Media',
		component: 'MediaContentDescription'
	});
	useContext({
		context_id: MEDIA_CONTENT_CONTEXT_ID,
		parent: 'Media.Content',
		component: 'Media.Content.Description'
	});

	const defaultClass = 'font-bold text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<h4 class={finalClass} style={$$props.style}>
	<slot />
</h4>
