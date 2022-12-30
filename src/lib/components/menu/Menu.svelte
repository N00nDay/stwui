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

	setContext('menu-collapse', menuCollapse);
	// setContext('menu-collapsed-width', collapsedWidth);
	setContext('menu-active-item', activeItem);

	let defaultClass = 'space-y-1 transition-all duration-300';
	$: if ($menuCollapse) {
		defaultClass = defaultClass + ' ' + collapsedWidth;
	} else {
		defaultClass = defaultClass + ' w-full';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<nav
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</nav>
