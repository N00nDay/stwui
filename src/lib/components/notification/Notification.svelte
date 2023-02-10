<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon/Icon.svelte';
	import { error as errorIcon, warn, check_circle, info } from '../../icons';

	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: 'info' | 'warn' | 'error' | 'success' | undefined = undefined;

	let typeIcon = info;
	if (type === 'warn') {
		typeIcon = warn;
	} else if (type === 'success') {
		typeIcon = check_circle;
	} else if (type === 'error') {
		typeIcon = errorIcon;
	}

	let leading = writable(false);
	let extra = writable(false);

	const defaultClass =
		'relative cursor-pointer flex items-start pointer-events-auto p-4 w-full max-w-sm overflow-hidden rounded-lg bg-light-surface dark:bg-dark-surface shadow-lg border border-light-border-base dark:border-dark-border-base dark:shadow-black';
	$: finalClass = twMerge(defaultClass, $$props.class);

	setContext('notification-leading', leading);
	setContext('notification-extra', extra);
	setContext('notification-type', type);
</script>

<div
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if $$slots.leading}
		<slot name="leading" />
	{:else if type}
		<div
			class="flex-shrink-0 text-light-content dark:text-dark-content"
			class:text-info-icon={type === 'info'}
			class:text-warn-icon={type === 'warn'}
			class:text-success-icon={type === 'success'}
			class:text-error-icon={type === 'error'}
		>
			<Icon data={typeIcon} />
		</div>
	{/if}
	<slot name="content" />
	<slot name="extra" />
</div>
