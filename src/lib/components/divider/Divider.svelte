<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let position: 'left' | 'center' | 'right' = 'center';

	const defaultClass = 'relative my-4';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="absolute inset-0 flex items-center" aria-hidden="true">
		<div class="w-full border-t light-border-base dark:dark-border-base" />
	</div>
	{#if $$slots.label || $$slots.icon || $$slots.default}
		<div
			class="relative flex"
			class:justify-start={position === 'left'}
			class:justify-center={position === 'center'}
			class:justify-end={position === 'right'}
		>
			<slot name="label" />
			<slot name="icon" />
			<slot />
		</div>
	{/if}
</div>
