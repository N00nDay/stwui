<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { CHECKBOX_GROUP_CONTEXT_ID } from './CheckboxGroup.svelte';
	import { CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID } from './Checkbox.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

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

	const { inline }: { inline: boolean } = getContext(CHECKBOX_GROUP_CONTEXT_ID);
	const { name }: { name: string } = getContext(CHECKBOX_GROUP_CHECKBOX_CONTEXT_ID);

	const defaultClass = 'text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if inline}
	<span
		id="{name}-description"
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		| <slot /></span
	>
{:else}
	<p
		id="{name}-description"
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<slot />
	</p>
{/if}
