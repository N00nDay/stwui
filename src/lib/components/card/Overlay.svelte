<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let verticalAlign: 'top' | 'center' | 'bottom' = 'bottom';
	export let horizontalAlign: 'left' | 'center' | 'right' = 'left';

	const defaultClass =
		'bg-background bg-opacity-70 px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-md absolute inset-0 flex flex-col stwui-card-cover-overlay';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:items-center={horizontalAlign === 'center'}
	class:justify-center={verticalAlign === 'center'}
	class:items-start={horizontalAlign === 'left'}
	class:items-end={horizontalAlign === 'right'}
	class:justify-start={verticalAlign === 'top'}
	class:justify-end={verticalAlign === 'bottom'}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
