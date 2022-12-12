<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let divided = true;
	export let bordered = false;
	export let edgeToEdge = false;

	setContext('list-bordered', bordered || edgeToEdge);

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

<ul
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</ul>
