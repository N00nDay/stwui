<script lang="ts" context="module">
	export const CARD_CONTEXT_ID = 'card-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';

	export let divided = true;
	export let bordered = true;
	export let hoverable = false;
	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let use: ActionArray = [];

	const forwardEvents = forwardEventsBuilder(current_component);

	setContext(CARD_CONTEXT_ID, {
		card: true,
		divided
	});

	const defaultClass =
		'bg-light-surface text-light-content dark:bg-dark-surface dark:text-dark-content rounded-md';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:hoverable
	class:border={bordered}
	class:border-light-border={bordered}
	class:dark:border-dark-border={bordered}
	class:shadow-none={elevation === 'none'}
	class:shadow-sm={elevation === 'sm'}
	class:shadow-md={elevation === 'md'}
	class:shadow-lg={elevation === 'lg'}
	class:shadow-xl={elevation === 'xl'}
	class:dark:shadow-black={elevation !== 'none'}
	style={$$props.style}
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
		@apply bg-gray-100;
	}

	.hoverable:active:hover {
		@apply scale-95;
		@apply animate-none;
	}
</style>
