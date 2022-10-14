<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'Card.Content'
	});

	const defaultClass = 'first:rounded-t-md last:rounded-b-md px-4 py-5 sm:px-6';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
