<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import type { Writable } from 'svelte/store';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const name: string = getContext('currency-name');
	const error: Writable<string | undefined> = getContext('currency-error');

	const defaultClass = 'block text-sm font-medium text-secondary-content';
	const errorClass = 'text-danger';

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
