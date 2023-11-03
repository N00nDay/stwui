<script lang="ts">
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let divided = true;
	export let bordered = true;
	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	// const defaultClass =
	// 	'bg-surface text-content rounded-md mx-auto max-w-xl transform overflow-hidden rounded-md pointer-events-auto max-h-full flex flex-col stwui-modal-content';
	const defaultClass =
		'bg-surface text-content rounded-md mx-auto max-w-xl transform overflow-hidden rounded-md pointer-events-auto flex flex-col stwui-modal-content';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('card-divided', divided);
</script>

<div
	class={finalClass}
	class:border={bordered}
	class:border-border={bordered}
	class:shadow-none={elevation === 'none'}
	class:shadow-sm={elevation === 'sm'}
	class:shadow-md={elevation === 'md'}
	class:shadow-lg={elevation === 'lg'}
	class:shadow-xl={elevation === 'xl'}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="header" />
	<slot name="cover" />
	<slot name="body" />
	<slot />
	<slot name="footer" />
	<slot name="actions" />
</div>
