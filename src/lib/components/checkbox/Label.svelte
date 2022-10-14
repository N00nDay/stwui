<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { CHECKBOX_GROUP_CONTEXT_ID } from './CheckboxGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID } from './Checkbox.svelte';

	useContext({
		context_id: CHECKBOX_GROUP_CONTEXT_ID,
		parent: 'CheckboxGroup',
		component: 'CheckboxGroup.Checkbox.Label'
	});

	useContext({
		context_id: CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID,
		parent: 'CheckboxGroup.Checkbox',
		component: 'CheckboxGroup.Checkbox.Label'
	});

	const { name }: { name: string } = getContext(CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID);

	const defaultClass = 'font-medium text-light-content dark:text-dark-content cursor-pointer';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label for={name} class={finalClass} style={$$props.style}><slot /></label>
