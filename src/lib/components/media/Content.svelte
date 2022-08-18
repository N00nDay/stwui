<script lang="ts" context="module">
	export const MEDIA_CONTENT_CONTEXT_ID = 'media-content-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { MEDIA_CONTEXT_ID } from './Media.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: MEDIA_CONTEXT_ID,
		parent: 'Media',
		component: 'MediaContent'
	});
	setContext(MEDIA_CONTENT_CONTEXT_ID, {
		content: true
	});
</script>

<div
	class={$$props.class ? $$props.class : ''}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
