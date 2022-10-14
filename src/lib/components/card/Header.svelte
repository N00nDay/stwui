<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'Card.Header'
	});
	const { divided }: { divided: boolean } = getContext(CARD_CONTEXT_ID);

	let defaultClass = 'first:rounded-t-md last:rounded-b-md px-4 py-5 sm:px-6 h-16';
	if ($$props.extras) {
		defaultClass += ' flex flex-row items-center justify-between';
	}
	if (divided) {
		defaultClass += ' border-b light-border dark:dark-border last:border-b-none';
	}

	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
	<slot name="extra" />
</div>
