<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte/internal';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'success' | 'warn' | 'error' | undefined = undefined;
	export let size: 'default' | 'large' = 'default';
	export let shape: 'default' | 'rounded' | 'square' = 'default';

	const defaultClass =
		'inline-flex items-center py-0.5 font-medium text-default-content bg-default';
	const infoClass = 'bg-info text-info-content';
	const successClass = 'bg-success text-success-content';
	const warnClass = 'bg-warn text-warn-content';
	const errorClass = 'bg-error text-error-content';

	const defaultSize = 'px-2 text-xs';
	const largeSize = 'px-3 text-sm';

	const defaultShape = 'rounded-full';
	const roundedShape = 'rounded';

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' ? infoClass : false,
		type === 'success' ? successClass : false,
		type === 'warn' ? warnClass : false,
		type === 'error' ? errorClass : false,

		size === 'default' ? defaultSize : false,
		size === 'large' ? largeSize : false,

		shape === 'default' ? defaultShape : false,
		shape === 'rounded' ? roundedShape : false,

		$$props.class
	);

	setContext('badge-type', type);
</script>

<span
	class={finalClass}
	class:pr-0.5={$$slots.close}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="indicator" />
	<slot />
	<slot name="close" />
</span>
