<script lang="ts" context="module">
	export const POST_CONTEXT_ID = 'post-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { setContext } from 'svelte';

	export let use: ActionArray = [];

	setContext(POST_CONTEXT_ID, {
		post: true
	});

	const forwardEvents = forwardEventsBuilder(current_component);

	const defaultClass =
		'bg-light-surface text-light-content dark:bg-dark-surface dark:text-dark-content rounded-md border border-light-border dark:border-dark-border shadow-md dark:shadow-black';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="header" />
	<slot name="content" />
	<slot />
	<slot name="images" />
	<slot name="status" />
	<slot name="actions" />
</div>
