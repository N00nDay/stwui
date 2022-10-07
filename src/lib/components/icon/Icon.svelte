<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	import type { MaterialIcon } from '../../types';

	export let icon: MaterialIcon;

	const defaultClass = 'material-icons';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}>{icon}</span
>
