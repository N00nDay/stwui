<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { LAYOUT_CONTEXT_ID } from './Layout.svelte';
	import { BOTTOM_NAVIGATION_CONTEXT_ID } from './BottomNavigation.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: LAYOUT_CONTEXT_ID,
		parent: 'Layout',
		component: 'BottomNavigationCreateItem'
	});
	useContext({
		context_id: BOTTOM_NAVIGATION_CONTEXT_ID,
		parent: 'BottomNavigation',
		component: 'BottomNavigationCreateItem'
	});

	import Button from '../button/Button.svelte';
	import Swap from '../swap/Swap.svelte';
	import Icon from '../icon/Icon.svelte';

	export let open = false;
</script>

<div
	class="relative h-full w-full"
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class', 'style'])}
>
	<Button
		on:click
		shape="circle"
		size="fab"
		class="absolute left-[50%] right-[50%] translate-y-[-50%] translate-x-[-50%] shadow-xl dark:shadow-black bg-primary hover:bg-primary-hover text-primary-content outline-none border-none"
		style={$$props.style}
	>
		<Swap slot="icon" swapped={open}>
			<Icon slot="on" icon="add" />
			<Icon slot="off" icon="close" />
		</Swap>
	</Button>
</div>
