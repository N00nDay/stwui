<script lang="ts" context="module">
	export const LIST_CONTEXT_ID = 'list-context-name';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let divided = true;
	export let bordered = false;
	export let edgeToEdge = false;

	setContext(LIST_CONTEXT_ID, {
		list: true,
		bordered: bordered || edgeToEdge
	});

	let defaultClass = '';
	const defaultDividedClass = 'divide-y divide-light-border dark:divide-dark-border';
	const defaultBorderedClass = 'border border-light-border dark:border-dark-border';
	if (divided) {
		defaultClass += defaultDividedClass;
	}
	if (bordered && defaultClass.length > 0) {
		defaultClass += ` ${defaultBorderedClass}`;
	} else if (bordered) {
		defaultClass += defaultBorderedClass;
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<ul class={finalClass} style={$$props.style}>
	<slot />
</ul>
