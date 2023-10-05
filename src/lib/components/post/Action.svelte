<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import HoverBackground from '../HoverBackground.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'group relative w-full h-full cursor-pointer first:rounded-bl-md last:rounded-br-md overflow-hidden stwui-post-action';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div
		class="group text-sm text-content group-hover:text-primary relative flex flex-col items-center justify-center h-full w-full active:hover:animate-none active:hover:scale-90"
	>
		{#if $$slots.icon}
			<span class="h-4 w-4" class:mb-1.5={$$slots.label}>
				<slot name="icon" />
			</span>
		{/if}
		{#if $$slots.label}
			<span class="text-xs">
				<slot name="label" />
			</span>
		{/if}
		<slot />
	</div>
	<HoverBackground />
</div>
