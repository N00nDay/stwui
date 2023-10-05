<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let name: string;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let autocomplete: 'on' | 'off' | undefined = undefined;
	export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let readonly: true | undefined = undefined;
	export let tabindex: string | undefined = undefined;
	export let disabled = false;

	const defaultClass =
		'stwui-textarea-title block w-full bg-surface border-0 pt-2.5 text-lg font-medium placeholder-secondary-content placeholder-opacity-80 focus:ring-0';

	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div>
	<slot />
</div>

<label for={name} class="sr-only">Title</label>
<input
	type="text"
	{name}
	id={name}
	{placeholder}
	{autocapitalize}
	{autocomplete}
	{readonly}
	{tabindex}
	{disabled}
	bind:value
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
/>
