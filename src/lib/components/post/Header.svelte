<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const defaultClass =
		'first:rounded-t-md last:rounded-b-md py-1.5 px-1.5 sm:px-3 h-14 flex flex-row border-b border-border stwui-post-header';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<div class="flex-shrink stwui-post-header-avatar-wrapper">
		<slot name="avatar" />
	</div>
	<div class="flex flex-col flex-grow h-full ml-3 stwi-post-header-creator-wrapper">
		<slot name="creator" />
		<slot name="created" />
	</div>
	<slot name="extras" />
</div>
