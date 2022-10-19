<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import { POST_ACTIONS_CONTEXT_ID } from './Actions.svelte';
	import { useContext } from '../../utils/useContext';
	import HoverBackground from '../HoverBackground.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Actions.Action'
	});
	useContext({
		context_id: POST_ACTIONS_CONTEXT_ID,
		parent: 'Post.Actions',
		component: 'Post.Actions.Action'
	});

	const defaultClass =
		'group relative w-full h-full cursor-pointer first:rounded-bl-md last:rounded-br-md overflow-hidden';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div
		class="group text-sm text-light-icon dark:text-dark-icon group-hover:text-primary relative flex flex-col items-center justify-center h-full w-full group-active:hover:animate-none group-active:hover:scale-90"
	>
		{#if $$slots.icon}
			<span class="h-4 w-4 mb-1">
				<slot name="icon" />
			</span>
		{/if}
		<slot />
	</div>
	<HoverBackground />
</div>
