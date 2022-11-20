<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const padding: string = getContext('padding');

	const defaultClass = 'col';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style="{$$props.style ? `${$$props.style} ` : ''}{padding}"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'style'])}
>
	<slot />
</div>
