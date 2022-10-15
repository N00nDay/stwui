<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let id: string;

	const defaultClass =
		'table-row h-12 max-h-[3rem] cursor-pointer hover:bg-light-icon-background-hover dark:hover:bg-dark-icon-background-hover bg-light-surface dark:bg-dark-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#key id}
	<tr
		{id}
		class={finalClass}
		style="height: 48px; max-height: 48px;{$$props.style}"
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class', 'style'])}
	>
		<slot />
	</tr>
{/key}
