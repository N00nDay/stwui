<script lang="ts">
	import { setContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'solid' | 'ghost' = 'ghost';

	const defaultClass = 'breadcrumbs flex items-center space-x-4';
	const solidClass =
		'border border-light-border-base dark:border-dark-border bg-light-surface dark:bg-dark-surface rounded-md px-6';
	$: finalClass = twMerge(
		defaultClass,

		type === 'solid' ? solidClass : false,

		$$props.class
	);

	setContext('breadcrumbs-type', type);
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
