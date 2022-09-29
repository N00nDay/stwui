<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { useContext } from '$lib/utils/useContext';
	import { RADIO_GROUP_RADIO_CONTEXT_ID } from './Radio.svelte';
	import { RADIO_GROUP_CONTEXT_ID } from './RadioGroup.svelte';

	useContext({
		context_id: RADIO_GROUP_CONTEXT_ID,
		parent: 'RadioGroup',
		component: 'RadioGroup.Radio.Label'
	});

	useContext({
		context_id: RADIO_GROUP_RADIO_CONTEXT_ID,
		parent: 'RadioGroup.Radio',
		component: 'RadioGroup.Radio.Label'
	});

	const { id }: { id: string } = getContext(RADIO_GROUP_RADIO_CONTEXT_ID);

	const defaultClass = 'font-medium cursor-pointer text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<label for={id ? id : undefined} class={finalClass} style={$$props.style}><slot /></label>
