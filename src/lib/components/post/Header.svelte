<script lang="ts" context="module">
	export const POST_HEADER_CONTEXT_ID = 'post-header-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import { useContext } from '../../utils/useContext';
	import { setContext } from 'svelte/internal';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	import { validateSlots } from '$lib/utils/validateSlots';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Header'
	});

	setContext(POST_HEADER_CONTEXT_ID, {
		header: true
	});

	validateSlots($$slots, ['avatar', 'creator', 'created', 'extras'], 'Post.Header');

	const defaultClass =
		'first:rounded-t-md last:rounded-b-md py-1.5 px-1.5 sm:px-3 h-14 flex flex-row border-b border-light-border dark:border-dark-border transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="flex-shrink">
		<slot name="avatar" />
	</div>
	<div class="flex flex-col flex-grow h-full ml-3">
		<slot name="creator" />
		<slot name="created" />
	</div>
	<slot name="extras" />
</div>
