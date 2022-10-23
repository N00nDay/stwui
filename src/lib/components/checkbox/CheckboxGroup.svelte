<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let inline = false;

	setContext('checkbox-inline', inline);

	const defaultClass = 'space-y-5 mt-2';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div>
	<slot name="label" />
	<fieldset class={finalClass} style={$$props.style}>
		<slot />
	</fieldset>
</div>
