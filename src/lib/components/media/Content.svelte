<script lang="ts" context="module">
	export const MEDIA_CONTENT_CONTEXT_ID = 'media-content-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { MEDIA_CONTEXT_ID } from './Media.svelte';
	import { useContext } from '../../utils/useContext';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: MEDIA_CONTEXT_ID,
		parent: 'Media',
		component: 'Media.Content'
	});
	setContext(MEDIA_CONTENT_CONTEXT_ID, {
		content: true
	});
</script>

<div
	class={$$props.class}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="title" />
	<slot name="description" />
	<slot />
</div>
