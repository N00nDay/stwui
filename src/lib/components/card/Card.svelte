<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export const CARD_CONTEXT_NAME = 'card-context-name';

	export function useCardContext(component: string) {
		let context = getContext(CARD_CONTEXT_NAME);
		if (context === undefined) {
			console.warn(`<${component} /> is missing a parent <Card /> component.`);
		}
		return context;
	}
</script>

<script lang="ts">
	// import { current_component } from 'svelte/internal';
	// import { forwardEventsBuilder } from '@utils/forwardEventsBuilder';
	// import { useActions, type ActionArray } from '@utils/useActions';
	// import { exclude } from '@utils/exclude';

	export let bordered = true;
	export let hoverable = false;
	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	// export let use: ActionArray = [];

	// const forwardEvents = forwardEventsBuilder(current_component);

	setContext(CARD_CONTEXT_NAME, {
		card: true
	});
</script>

<!-- use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])} -->

<div
	on:click
	class="bg-white rounded-md{$$props.class ? ` ${$$props.class}` : ''}"
	class:hoverable
	class:bordered
	class:shadow-none={elevation === 'none'}
	class:shadow-sm={elevation === 'sm'}
	class:shadow-md={elevation === 'md'}
	class:shadow-lg={elevation === 'lg'}
	class:shadow-xl={elevation === 'xl'}
>
	<slot />
</div>

<style lang="postcss">
	.hoverable {
		@apply hover:shadow-lg;
		@apply hover:bg-gray-100;
		@apply cursor-pointer;
		@apply active:hover:scale-95;
		@apply active:hover:animate-none;
		@apply transition-all;
		@apply duration-150;
	}

	.bordered {
		@apply border;
		@apply border-gray-100;
	}
</style>
