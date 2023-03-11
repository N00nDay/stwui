<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let placement: 'start' | 'center' | 'end' = 'start';

	const defaultClass = 'ml-3 flex justify-end flex-shink';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:items-start={placement === 'start'}
	class:items-center={placement === 'center'}
	class:items-end={placement === 'end'}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div
		class="relative rounded-full bg-light-icon-background dark:bg-dark-icon-background flex items-center justify-center h-8 w-8"
	>
		<slot name="pending" />
		<slot name="complete" />
		<slot name="uploading" />
		<slot name="failed" />
		<slot name="rejected" />
		<slot />
	</div>
</div>
