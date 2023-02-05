<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Writable } from 'svelte/store';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const name: string = getContext('textarea-name');
	const error: Writable<string | undefined> = getContext('textarea-error');

	let defaultClass = 'block text-sm font-medium';
	$: if ($error && $error.length > 0) {
		defaultClass = defaultClass + ' text-danger';
	} else {
		defaultClass = defaultClass + ' text-light-secondary-content dark:text-dark-secondary-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label
	for={name}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}><slot /></label
>
