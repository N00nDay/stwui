<script lang="ts">
	import { TOGGLE_CONTEXT_ID } from './Toggle.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: TOGGLE_CONTEXT_ID,
		parent: 'Toggle',
		component: 'Toggle.ContentRight'
	});

	const { name, toggleOn }: { name: string; toggleOn: () => void } = getContext(TOGGLE_CONTEXT_ID);

	const defaultClass = 'ml-3';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style} id="{name}-label-right" on:click={toggleOn}>
	<slot name="label" />
	<slot name="description" />
</span>
