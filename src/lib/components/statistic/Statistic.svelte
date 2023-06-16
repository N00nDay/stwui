<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let bordered = true;

	const defaultClass = 'overflow-hidden rounded-md px-4 py-5 shadow-md sm:p-5 bg-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:border={bordered}
	class:border-border={bordered}
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
