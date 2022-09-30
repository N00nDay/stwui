<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'Card.Footer'
	});
	const { divided }: { divided: boolean } = getContext(CARD_CONTEXT_ID);

	const defaultClass =
		'px-4 py-5 sm:px-6 h-16 first:rounded-t-md last:rounded-b-md border border-l-0 border-b-0 border-r-0';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:border-t={divided}
	class:light-border={divided}
	class:dark:dark-border={divided}
	class:last:border-t-none={divided}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
