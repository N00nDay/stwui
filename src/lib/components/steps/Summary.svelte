<script lang="ts">
	import { STEPS_CONTEXT_ID } from './Steps.svelte';
	// import { getContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: STEPS_CONTEXT_ID,
		parent: 'Steps',
		component: 'Steps.Summary'
	});

	// const { currentStep }: { currentStep: number } = getContext(STEPS_CONTEXT_ID);

	const defaultClass = 'text-sm font-medium';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<p class={finalClass} style={$$props.style}><slot /></p>
