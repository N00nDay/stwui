<script lang="ts" context="module">
	export const POST_CONTEXT_ID = 'post-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	setContext(POST_CONTEXT_ID, {
		post: true
	});

	const defaultClass =
		'bg-light-surface text-light-content dark:bg-dark-surface dark:text-dark-content rounded-md border border-light-border dark:border-dark-border shadow-md dark:shadow-black';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
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
