<script lang="ts" context="module">
	export const POST_CONTEXT_ID = 'post-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	import { setContext } from 'svelte';

	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let bordered = true;
	export let use: ActionArray = [];

	setContext(POST_CONTEXT_ID, {
		post: true,
		bordered
	});

	const forwardEvents = forwardEventsBuilder(current_component);

	const defaultClass =
		'bg-light-surface text-light-content dark:bg-dark-surface dark:text-dark-content transition-all duration-150 rounded-md';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<!-- 

	<Post>
		<slot name="header" />
		-- <slot name="avatar" />
		-- <slot name="creator" />
		-- <slot name="created" />
		--	<slot name="extra" />
		<slot name="content" />
		<slot name="images" />
		<slot name="status" />
		<slot name="actions" />
		-- <slot name="action" />
	</Post>

	<Post>
		<Post.Header />
		<Post.Content />
		<Post.Images />
		<Post.Status />
		<Post.Actions>
			<Post.Actions.Action />
			<Post.Actions.Action />
			<Post.Actions.Action />
		</Post.Actions>
	</Post>

 -->

<div
	class={finalClass}
	class:border={bordered}
	class:border-light-border={bordered}
	class:dark:border-dark-border={bordered}
	class:shadow-none={elevation === 'none'}
	class:shadow-sm={elevation === 'sm'}
	class:shadow-md={elevation === 'md'}
	class:shadow-lg={elevation === 'lg'}
	class:shadow-xl={elevation === 'xl'}
	class:dark:shadow-black={elevation !== 'none'}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="header" />
	<slot name="content" />
	<slot />
	<slot name="images" />
	<slot name="status" />
	<slot name="actions" />
</div>
