<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';

	const name: string = getContext('checkbox-name');

	const defaultClass = 'font-medium text-content cursor-pointer stwui-checkbox-label';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<label for={name} class={finalClass} style={$$props.style}><slot /></label>
