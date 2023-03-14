<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'success' | 'warn' | 'error' | 'default' = 'default';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const defaultClass =
		'inline-flex items-center pr-3 text-sm font-medium border border-border rounded-full';

	const defaultTypeClass = ' bg-default text-default-content';
	const infoTypeClass = ' bg-info text-info-content';
	const successTypeClass = ' bg-success text-success-content';
	const warnTypeClass = ' bg-warn text-warn-content';
	const errorTypeClass = ' bg-error text-error-content';
	const closeSlotClass = 'pr-1.5';

	$: finalClass = twMerge(
		defaultClass,

		type === 'default' ? defaultTypeClass : false,
		type === 'info' ? infoTypeClass : false,
		type === 'success' ? successTypeClass : false,
		type === 'warn' ? warnTypeClass : false,
		type === 'error' ? errorTypeClass : false,
		$$slots.close ? closeSlotClass : false,

		$$props.class
	);

	setContext('chip-size', size);
	setContext('chip-type', type);
</script>

<span
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="avatar" />
	<slot name="label" />
	<slot name="close" />
	<slot />
</span>
