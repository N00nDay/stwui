<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	import type MaterialIcons from '../../types/material-icons';

	export let name: MaterialIcons;
</script>

<span
	class="material-icons{$$props.class ? ` ${$$props.class}` : ''}"
	style={$$props.class}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}>{name}</span
>
