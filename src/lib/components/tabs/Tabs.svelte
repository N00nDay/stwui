<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let currentTab = '';
	export let variant: 'default' | 'full-width' | 'bar' = 'default';
	export let containerClass: string | undefined = undefined;

	let selected: Writable<string> = writable(currentTab);
	$: $selected = currentTab;

	const barContainerClass =
		'border-border overflow-hidden rounded-md shadow-md border stwui-tabs-bar-wrapper';
	const defaultContainerClass = 'border-border overflow-hidden border-b stwui-tabs-wrapper';

	$: finalContainerClass = twMerge(
		variant === 'bar' ? barContainerClass : defaultContainerClass,

		containerClass
	);

	const barClass = '-mb-px flex justify-evenly isolate divide-x divide-border stwui-tabs-bar';
	const fullWidthClass = '-mb-px flex justify-evently';
	const defaultClass = '-mb-px flex space-x-8 stwui-tabs';

	$: finalClass = twMerge(
		variant === 'bar' ? barClass : false,
		variant === 'full-width' ? fullWidthClass : false,
		variant === 'default' ? defaultClass : false,

		$$props.class
	);

	setContext('tabs-variant', variant);
	setContext('tabs-currentTab', selected);
</script>

{#if variant === 'bar'}
	<div class={finalContainerClass}>
		<nav
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}
		>
			<slot />
		</nav>
	</div>
{:else}
	<div class={finalContainerClass}>
		<nav
			class={finalClass}
			use:useActions={use}
			use:forwardEvents
			{...exclude($$props, ['use', 'class'])}
		>
			<slot />
		</nav>
	</div>
{/if}
