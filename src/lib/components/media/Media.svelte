<script lang="ts" context="module">
	export const MEDIA_CONTEXT_ID = 'media-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	setContext(MEDIA_CONTEXT_ID, {
		media: true
	});
</script>

<div
	class="flex{$$props.class ? ` ${$$props.class}` : ''}"
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
