<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'overflow-hidden rounded-md px-4 py-5 shadow-md dark:shadow-black sm:p-5 bg-light-surface dark:bg-dark-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if $$slots.title || $$slots.icon}
		<div class="relative flex flex-row items-center justify-between">
			<slot name="title" />
			<slot name="icon" />
		</div>
	{/if}
	<slot name="value" />
	<slot />
	<slot name="goal" />
	<slot name="comparison" />
</div>
