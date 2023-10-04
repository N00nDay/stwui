<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'flex sticky top-[var(--sat)] z-10 pt-3 pb-2 pl-[calc(var(--sal)+1rem)] pr-[calc(var(--sar)+1rem)] w-full flex-row h-16 min-h-[64px] max-h-16 flex-shrink items-center bg-surface text-content shadow-md flex-1 stwui-layout-header';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<header
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
	<slot name="extra" />
</header>
