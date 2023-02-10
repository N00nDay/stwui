<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { TableColumn } from '../../types/table-column';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let columns: TableColumn[];

	let header = writable(false);
	let footer = writable(false);

	const defaultClass = 'bg-light-surface dark:bg-dark-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('table-columns', columns);
	setContext('table-header', header);
	setContext('table-footer', footer);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="header" />
	<slot name="body" />
	<slot name="footer" />
</div>
