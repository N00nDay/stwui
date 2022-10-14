<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { CARD_CONTEXT_ID } from './Card.svelte';
	import { CARD_ACTIONS_CONTEXT_ID } from './Actions.svelte';
	import { useContext } from '../../utils/useContext';
	import type { MaterialIcon } from '../../types';
	import HoverBackground from '../HoverBackground.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let icon: MaterialIcon;
	export let label: string | undefined = undefined;

	useContext({
		context_id: CARD_CONTEXT_ID,
		parent: 'Card',
		component: 'CardAction'
	});
	useContext({
		context_id: CARD_ACTIONS_CONTEXT_ID,
		parent: 'CardActions',
		component: 'CardAction'
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
		class="group relative flex flex-col items-center justify-center h-full w-full group-active:hover:animate-none group-active:hover:scale-90"
	>
		<span
			class="material-icons h-6 w-6 text-light-icon dark:text-dark-icon group-hover:text-primary"
			>{icon}</span
		>
		{#if label}
			<span class="text-xs text-light-icon dark:text-dark-icon group-hover:text-primary"
				>{label}</span
			>
		{/if}
	</div>
	<HoverBackground />
</div>
