<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let id = 'table-body';

	const header: Writable<boolean> = getContext('table-header');

	let headerHeight = $header ? 61 : 0;

	$: heightToRemove = headerHeight + 64;

	const defaultClass =
		'table min-w-full border-separate bg-surface border-spacing-0 table-fixed border-b border-border';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	{id}
	class="overflow-y-auto overflow-x-hidden"
	style="height: calc(100% - {heightToRemove}px);"
>
	<table
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<tbody>
			<slot />
		</tbody>
	</table>
</div>
