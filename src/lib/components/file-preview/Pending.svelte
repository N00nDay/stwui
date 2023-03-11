<script lang="ts">
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());
	import Loader from './Loader.svelte';

	const defaultClass = 'absolute inset-0 flex items-center justify-center';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	transition:scale
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<Loader />
</span>
