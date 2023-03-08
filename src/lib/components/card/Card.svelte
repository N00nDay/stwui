<script lang="ts">
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let divided = true;
	export let bordered = true;
	export let hoverable = false;
	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const defaultClass =
		'bg-light-surface text-light-content dark:bg-dark-surface dark:text-dark-content rounded-md';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('card-divided', divided);
</script>

<div
	class={finalClass}
	class:hoverable
	class:border={bordered}
	class:border-light-border-base={bordered}
	class:dark:border-dark-border={bordered}
	class:shadow-none={elevation === 'none'}
	class:shadow-sm={elevation === 'sm'}
	class:shadow-md={elevation === 'md'}
	class:shadow-lg={elevation === 'lg'}
	class:shadow-xl={elevation === 'xl'}
	class:dark:shadow-black={elevation !== 'none'}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="header" />
	<slot name="cover" />
	<slot name="content" />
	<slot />
	<slot name="footer" />
	<slot name="actions" />
</div>

<style>
	.hoverable {
		@apply cursor-pointer;
	}

	.hoverable:hover {
		@apply shadow-lg;
		@apply dark:bg-light-icon-background-hover bg-dark-icon-background-hover;
	}

	.hoverable:active:hover {
		@apply scale-95;
		@apply animate-none;
	}
</style>
