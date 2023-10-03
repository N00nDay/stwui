<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';

	export let inline = false;

	const defaultClass = 'space-y-5 mt-2 stwui-checkbox-group';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('checkbox-inline', inline);
</script>

<div>
	<slot name="label" />
	<fieldset class={finalClass} style={$$props.style}>
		<slot />
	</fieldset>
</div>
