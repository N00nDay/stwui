<script lang="ts" context="module">
	export const BUTTON_GROUP_BUTTON_CONTEXT_ID = 'button-group-button-context-id';
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';
	import { BUTTON_GROUP_CONTEXT_ID } from './ButtonGroup.svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import { useContext } from '../../utils/useContext';
	import { setContext, getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Swap from '../swap';
	import ButtonLoader from './Loader.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let active = false;
	export let loading = false;
	export let defaultLoading = true;
	export let disabled = false;
	export let ariaLabel: undefined | string = undefined;
	export let htmlType = 'button';

	useContext({
		context_id: BUTTON_GROUP_CONTEXT_ID,
		parent: 'ButtonGroup',
		component: 'ButtonGroup.Button'
	});

	setContext(BUTTON_GROUP_BUTTON_CONTEXT_ID, {
		button: true
	});

	const { block }: { block: boolean } = getContext(BUTTON_GROUP_CONTEXT_ID);

	let defaultClass =
		'btn-group group overflow-hidden relative inline-flex items-center justify-center px-4 py-2 border light-border dark:dark-border text-sm font-medium text-light-content dark:text-dark-content focus:z-10 outline-none focus:outline-none first-of-type:rounded-l-md last-of-type:rounded-r-md';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	aria-label={ariaLabel}
	type={htmlType}
	class={finalClass}
	class:bg-primary={active}
	class:dark:bg-primary={active}
	class:text-primary-content={active}
	class:dark:text-primary-content={active}
	class:focus:bg-primary={active}
	class:dark:focus:bg-primary={active}
	class:focus:text-primary-content={active}
	class:dark:focus:text-primary-content={active}
	class:bg-light-surface={!active}
	class:dark:bg-dark-surface={!active}
	class:disabled
	class:w-full={block}
	{disabled}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if defaultLoading && $$slots.leading}
		<div class="mr-2 flex justify-center items-center relative">
			<Swap {loading}>
				<svelte:fragment slot="on">
					<slot name="leading" />
				</svelte:fragment>
				<svelte:fragment slot="off">
					<ButtonLoader />
				</svelte:fragment>
			</Swap>
		</div>
		<slot />
		<slot name="trailing" />
	{:else if defaultLoading && $$slots.icon}
		<div class="flex justify-center items-center relative">
			<Swap {loading}>
				<svelte:fragment slot="on">
					<slot name="icon" />
				</svelte:fragment>
				<svelte:fragment slot="off">
					<ButtonLoader />
				</svelte:fragment>
			</Swap>
		</div>
		<slot />
		<slot name="trailing" />
	{:else if loading && defaultLoading && !$$slots.leading && !$$slots.icon}
		<div transition:scale|local class="mr-2 flex justify-center items-center relative">
			<ButtonLoader />
		</div>
		<slot />
		<slot name="trailing" />
	{:else}
		<slot name="leading" />
		<slot name="icon" />
		<slot />
		<slot name="trailing" />
	{/if}

	{#if !disabled}
		<HoverBackground
			class="group-active:h-full group-active:w-full group-focus:h-full group-focus:w-full"
		/>
	{/if}
</button>
