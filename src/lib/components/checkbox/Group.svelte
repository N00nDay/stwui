<script lang="ts" context="module">
	export const CHECKBOX_GROUP_CONTEXT_ID = 'checkbox-group-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let inline = false;

	const defaultClass = 'space-y-5 mt-2';
	const finalClass = twMerge(defaultClass, $$props.class);

	setContext(CHECKBOX_GROUP_CONTEXT_ID, {
		checkbox: true,
		inline
	});
</script>

<div>
	<!-- TODO: create label componenet -->
	{#if label}
		<legend
			class="transition-all duration-150 text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm{srOnly
				? ' sr-only'
				: ''}">{label}</legend
		>
	{/if}
	<fieldset class={finalClass} style={$$props.style}>
		<slot />
	</fieldset>
</div>
