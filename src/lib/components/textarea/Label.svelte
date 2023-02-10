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

	const defaultClass =
		'block text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content';
	const errorClass = 'text-danger dark:text-danger';

	$: finalClass = twMerge(
		defaultClass,

		$error && $error.length > 0 ? errorClass : false,

		$$props.class
	);
</script>

<label
	for={name}
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}><slot /></label
>
