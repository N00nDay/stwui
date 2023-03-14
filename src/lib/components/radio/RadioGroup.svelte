<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let name: string;
	export let type: 'default' | 'pill' = 'default';
	export let selected: string | undefined = undefined;

	// TODO: allow changing radio color via prop

	let selectedRadio = writable(selected);

	const defaultClass = 'mt-1 grid-cols-4 gap-2';
	const defaultType = 'space-y-4';
	const pillType = 'grid';

	$: finalClass = twMerge(
		defaultClass,

		type === 'default' ? defaultType : false,
		type === 'pill' ? pillType : false,

		$$props.class
	);

	setContext('radio-name', name);
	setContext('radio-type', type);
	setContext('radio-selected', selectedRadio);
</script>

<div>
	<slot name="label" />
	<fieldset class={finalClass} style={$$props.style}>
		<slot />
	</fieldset>
</div>
