<script lang="ts">
	import { MEDIA_CONTEXT_ID } from './Media.svelte';
	import { MEDIA_CONTENT_CONTEXT_ID } from './Content.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

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

	const defaultClass = 'mt-1 text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<p
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</p>
