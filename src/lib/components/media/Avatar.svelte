<script lang="ts">
	import { MEDIA_CONTEXT_ID } from './Media.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	export let align: 'top' | 'center' | 'bottom' = 'top';

	useContext({
		context_id: MEDIA_CONTEXT_ID,
		parent: 'Media',
		component: 'MediaAvatar'
	});
</script>

<div
	class="first:mr-4 last:ml-4 flex-shrink-0{$$props.class ? ` ${$$props.class}` : ''}"
	class:self-center={align === 'center'}
	class:self-end={align === 'bottom'}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
