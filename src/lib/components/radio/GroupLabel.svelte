<script lang="ts">
	import { RADIO_GROUP_CONTEXT_ID } from './RadioGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: RADIO_GROUP_CONTEXT_ID,
		parent: 'RadioGroup',
		component: 'RadioGroup.Label'
	});

	const { name }: { name: string } = getContext(RADIO_GROUP_CONTEXT_ID);

	const defaultClass =
		'transition-all duration-150 text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<legend for={name} class={finalClass} style={$$props.style}><slot /></legend>
