<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BUTTON_GROUP_CONTEXT_ID } from './ButtonGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { BUTTON_GROUP_BUTTON_CONTEXT_ID } from './Button.svelte';

	useContext({
		context_id: BUTTON_GROUP_CONTEXT_ID,
		parent: 'Button',
		component: 'ButtonGroup.Button.Trailing'
	});

	useContext({
		context_id: BUTTON_GROUP_BUTTON_CONTEXT_ID,
		parent: 'ButtonGroup.Button',
		component: 'ButtonGroup.Button.Trailing'
	});

	const defaultClass = 'ml-2 flex justify-center items-center relative';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="icon" />
	<slot />
</div>
