<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let collapsed = false;
	export let collapsedWidth = 'w-12';
	export let active = '';

	let menuCollapse = writable(collapsed);
	$: menuCollapse.set(collapsed);

	let activeItem = writable(active);
	$: activeItem.set(active);

	const defaultClass = 'space-y-1 transition-all duration-300';

	$: finalClass = twMerge(
		defaultClass,

		$menuCollapse ? collapsedWidth : 'w-full',

		$$props.class
	);

	setContext('menu-collapse', menuCollapse);
	setContext('menu-active-item', activeItem);
</script>

<nav
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</nav>
