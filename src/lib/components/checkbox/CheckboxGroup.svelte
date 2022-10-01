<script lang="ts" context="module">
	export const CHECKBOX_GROUP_CONTEXT_ID = 'checkbox-group-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let inline = false;

	const defaultClass = 'space-y-5 mt-2';
	const finalClass = twMerge(defaultClass, $$props.class);

	setContext(CHECKBOX_GROUP_CONTEXT_ID, {
		checkbox: true,
		inline
	});
</script>

<div>
	<slot name="label" />
	<fieldset class={finalClass} style={$$props.style}>
		<slot />
	</fieldset>
</div>
