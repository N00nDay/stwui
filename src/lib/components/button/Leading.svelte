<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BUTTON_CONTEXT_ID } from './Button.svelte';
	import { useContext } from '../../utils/useContext';

	useContext({
		context_id: BUTTON_CONTEXT_ID,
		parent: 'Button',
		component: 'Button.Leading'
	});

	const defaultClass = 'mr-2 flex justify-center items-center relative';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="icon" />
	<slot />
</div>
