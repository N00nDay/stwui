<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'group text-content select-none p-0.5 w-full relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden stwui-autocomplete-empty-option';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li
	aria-label="autocomplete empty option"
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	role="option"
	aria-selected="false"
>
	<span class="font-normal block truncate">
		{#if $$slots.default}<slot />{:else}No Options Available{/if}
	</span>
</li>
