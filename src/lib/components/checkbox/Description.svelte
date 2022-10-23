<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const inline: boolean = getContext('checkbox-inline');
	const name: string = getContext('checkbox-name');

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
