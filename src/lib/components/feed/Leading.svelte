<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'h-8 w-8 bg-icon-background rounded-full flex items-center justify-center ring-8 ring-light-surface dark:ring-dark-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div>
	<span
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<slot name="icon" />
		<slot name="avatar" />
		<slot />
	</span>
</div>
