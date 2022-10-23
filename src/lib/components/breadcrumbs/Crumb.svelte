<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Divider from './Divider.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let href: string;

	const defaultClass =
		'flex items-center text-light-secondary-content dark:text-dark-secondary-content hover:text-primary';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li class="crumb">
	<div
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		{#if $$slots.divider}
			<slot name="divider" />
		{:else}
			<Divider />
		{/if}
		<a {href} class="flex items-center">
			<slot name="icon" />
			<slot name="label" />
			<slot />
		</a>
	</div>
</li>
