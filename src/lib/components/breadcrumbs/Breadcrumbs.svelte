<script lang="ts" context="module">
	export const BREADCRUMBS_CONTEXT_ID = 'breadcrumbs-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'solid' | 'ghost' = 'ghost';

	setContext(BREADCRUMBS_CONTEXT_ID, {
		breadcrumbs: true,
		type
	});

	let defaultClass = 'breadcrumbs flex items-center space-x-4';
	if (type === 'solid') {
		defaultClass +=
			' border light-border dark:dark-border bg-light-surface dark:bg-dark-surface dark:shadow-black shadow rounded-md px-6';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<nav class="flex">
	<ol
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<slot />
	</ol>
</nav>

<style global>
	.breadcrumbs .crumb:first-of-type .divider {
		display: none;
	}
</style>
