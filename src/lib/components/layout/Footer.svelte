<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'flex pb-[var(--sab)] z-10 pl-[calc(var(--sal)+1rem)] pr-[calc(var(--sar)+1rem)] w-full flex-row h-16 min-h-[64px] flex-shrink items-center bg-surface text-content shadow-md flex-1';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<footer
	aria-labelledby="footer-heading"
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
	<slot name="extra" />
</footer>
