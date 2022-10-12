<script lang="ts" context="module">
	export const RADIO_GROUP_CONTEXT_ID = 'radio-group-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let name: string;
	export let type: 'default' | 'pill' = 'default';
	export let selected: string | undefined = undefined;

	let selectedRadio = writable(selected);

	setContext(RADIO_GROUP_CONTEXT_ID, {
		radioGroup: true,
		name,
		type,
		selected: selectedRadio
	});

	let defaultClass = 'mt-1 grid-cols-4 gap-2';
	if (type === 'default') {
		defaultClass = defaultClass + ' space-y-4';
	} else if (type === 'pill') {
		defaultClass = defaultClass + ' grid';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div>
	<slot name="label" />
	<fieldset class={finalClass} style={$$props.style}>
		<slot />
	</fieldset>
</div>
