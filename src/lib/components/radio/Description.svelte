<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { useContext } from '$lib/utils/useContext';
	import { RADIO_GROUP_RADIO_CONTEXT_ID } from './Radio.svelte';
	import { RADIO_GROUP_CONTEXT_ID } from './RadioGroup.svelte';

	useContext({
		context_id: RADIO_GROUP_CONTEXT_ID,
		parent: 'RadioGroup',
		component: 'RadioGroup.Radio.Description'
	});

	useContext({
		context_id: RADIO_GROUP_RADIO_CONTEXT_ID,
		parent: 'RadioGroup.Radio',
		component: 'RadioGroup.Radio.Description'
	});

	const { id }: { id: string } = getContext(RADIO_GROUP_RADIO_CONTEXT_ID);

	const defaultClass = 'text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span id={id ? `${id}-description` : undefined} class={finalClass} style={$$props.style}
	><slot /></span
>
