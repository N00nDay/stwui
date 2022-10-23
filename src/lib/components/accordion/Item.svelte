<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { writable } from 'svelte/store';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let open = false;
	const itemOpen = writable(open);
	$: itemOpen.set(open);

	setContext('accordion-open', itemOpen);

	const defaultClass =
		'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border first-of-type:rounded-t-md last-of-type:rounded-b-md overflow-hidden outline-none focus:outline-none';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="title" />
	{#if open}
		<slot name="content" />
	{/if}
</div>
