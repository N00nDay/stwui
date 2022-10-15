<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	// TODO: needs to be built out more
	export let likes: string[] = [];
	export let comments: string[] = [];

	const defaultClass =
		'flex flex-row justify-evenly items-center py-1 px-2 border border-light-border dark:border-dark-border';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	class:hidden={likes.length === 0 && comments.length === 0}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="h-full w-full flex justify-start items-center text-sm">
		{#if likes.length > 0}
			<div
				class="mr-1 h-5 w-5 rounded-full bg-primary shadow-md dark:shadow-black flex items-center justify-center"
			>
				<span class="material-icons text-xs text-primary-content">thumb_up</span>
			</div>
			{likes.length}
		{/if}
	</div>
	<div class="h-full w-full flex justify-end items-center text-sm">
		{#if comments.length > 0}
			{comments.length} Comments
		{/if}
	</div>
</div>
