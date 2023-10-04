<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass = 'feed -mb-8 stwui-feed';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class="flow-root">
	<ul
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<slot />
	</ul>
</div>

<style global>
	:global(.feed .item:last-child .connector) {
		display: none;
	}
</style>
