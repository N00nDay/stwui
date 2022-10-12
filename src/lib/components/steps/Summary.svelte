<script lang="ts">
	import { STEPS_CONTEXT_ID } from './Steps.svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: STEPS_CONTEXT_ID,
		parent: 'Steps',
		component: 'Steps.Summary'
	});

	const defaultClass = 'text-sm font-medium';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<p class={finalClass} style={$$props.style}><slot /></p>
