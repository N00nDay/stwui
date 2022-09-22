<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	import type MaterialIcons from '../../types/material-icons';

	export let icon: MaterialIcons;

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
