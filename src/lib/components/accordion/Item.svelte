<script lang="ts">
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let open = false;

	const itemOpen = writable(open);
	$: itemOpen.set(open);

	const defaultClass =
		'bg-light-surface dark:bg-dark-surface first-of-type:rounded-t-md last-of-type:rounded-b-md overflow-hidden outline-none focus:outline-none';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('accordion-open', itemOpen);
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
