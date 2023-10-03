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
	export let hoverable = false;
	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const defaultClass = 'bg-surface text-content rounded-md stwui-card';
	$: finalClass = twMerge(
		defaultClass,

		hoverable
			? 'active:[&:not(:focus):not(:focus-within)]:hover:animate-none active:[&:not(:focus):not(:focus-within)]:hover:scale-[97.5%] cursor-pointer hover:shadow-lg hover:bg-hover hover:bg-opacity-5'
			: false,

		$$props.class
	);

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
	<slot name="content" />
	<slot />
	<slot name="footer" />
	<slot name="actions" />
</div>
