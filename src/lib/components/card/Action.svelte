<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import HoverBackground from '../HoverBackground.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'group relative w-full h-full cursor-pointer first:rounded-bl-md last:rounded-br-md overflow-hidden';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div
		class="group relative flex flex-col items-center justify-center h-full w-full group-active:hover:animate-none group-active:hover:scale-90"
	>
		{#if $$slots.icon}
			<span class="h-6 w-6 text-light-icon dark:text-dark-icon group-hover:text-primary"
				><slot name="icon" /></span
			>
		{/if}
		<slot name="label" />
	</div>
	<HoverBackground />
</div>
