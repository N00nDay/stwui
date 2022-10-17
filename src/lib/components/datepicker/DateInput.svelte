<script lang="ts" context="module">
	export const DATE_PICKER_CONTEXT_ID = 'date-picker-context-id';
</script>

<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import type { Locale } from './locale';
	import DatePicker from './DatePicker.svelte';
	import { writable } from 'svelte/store';
	import dayjs, { Dayjs } from 'dayjs';
	// import Input from '../input';
	import Dropdown from '../dropdown';
	// import type { MaterialIcon } from '../../types';
	import Icon from '../icon';
	import { calendar, error as errorIcon } from '../../icons';
	import { get_current_component, setContext } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const innerStore = writable(null as Dayjs | null);
	const store = (() => {
		return {
			subscribe: innerStore.subscribe,
			set: (d: Date | null) => {
				const date = dayjs(d);
				if (d === null) {
					innerStore.set(null);
					value = d;
				} else if (!date.isSame($innerStore)) {
					innerStore.set(date);
					value = new Date(date.toISOString());
				}
			}
		};
	})();

	// export let trailing: MaterialIcon | undefined = 'calendar_month';
	export let name: string;
	// export let label: string | undefined = undefined;
	// export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: Date | null = null;
	export let min: Date | undefined = undefined;
	export let max: Date | undefined = undefined;
	export let format = 'MMMM D, YYYY';
	export let locale: Locale = {};
	export let text = $store?.format(format) ?? '';
	export let visible = false;
	export let closeOnSelect = true;
	export let handleSelect: ((d: Dayjs) => void) | undefined = undefined;
	export let tabindex: string | undefined = undefined;
	export let autofocus: true | undefined = undefined;

	$: store.set(value);

	function valueUpdate(value: Dayjs | null) {
		text = value?.format(format) ?? '';
	}
	$: valueUpdate($store);

	function onFocusOut(event: unknown) {
		const e = event as FocusEvent;
		if (
			e?.currentTarget instanceof HTMLElement &&
			e.relatedTarget &&
			e.relatedTarget instanceof Node &&
			e.currentTarget.contains(e.relatedTarget)
		) {
			return;
		} else {
			visible = false;
		}
	}

	function keydown(event: unknown) {
		const e = event as KeyboardEvent;
		if (e.key === 'Escape' && visible) {
			visible = false;
			e.preventDefault();
			e.stopPropagation();
		} else if (e.key === 'Enter') {
			visible = !visible;
			e.preventDefault();
		} else if (e.key === 'Tab') {
			visible = !visible;
		}
	}

	function onSelect(d: Dayjs) {
		value = new Date(d.toISOString());
		const dateInput = document.getElementById(name) as HTMLInputElement;
		dateInput.value = value.toISOString();
		if (handleSelect) handleSelect(d);
		if (closeOnSelect) {
			visible = false;
		}
	}

	function handleClose() {
		visible = false;
	}

	function handleOpen() {
		visible = true;
	}

	setContext(DATE_PICKER_CONTEXT_ID, {
		datePicker: true,
		name,
		error
	});
</script>

<Dropdown {handleClose} on:focusout={onFocusOut} on:keydown={keydown} {visible} class="w-full">
	<svelte:fragment slot="trigger">
		<div class={$$props.class} style={$$props.style}>
			<slot name="label" />
			<div class="mt-1 relative rounded-md shadow-sm h-[2.5rem] dark:shadow-black">
				<input
					readonly={true}
					autocomplete="off"
					name="{name}-visual"
					id="{name}-visual"
					{autofocus}
					{tabindex}
					{placeholder}
					type="text"
					bind:value={text}
					on:focus={handleOpen}
					on:mousedown={handleOpen}
					on:keydown={keydown}
					class="block h-[2.5rem] w-full px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface"
					class:light-border={!error}
					class:dark:dark-border={!error}
					class:border-red-400={error}
					class:text-danger={error}
					class:dark:text-danger={error}
					class:placeholder-red-300={error}
					class:focus:border-red-500={error}
					class:focus:border-primary={!error}
					class:dark:focus:border-primary={!error}
					class:group-focus-within:border-red-500={error}
					class:group-focus-within:border-primary={!error}
					class:dark:group-focus-within:border-primary={!error}
					class:group-active:border-red-500={error}
					class:group-active:border-primary={!error}
					class:dark:group-active:border-primary={!error}
					class:pl-10={$$slots.leading}
					class:pr-10={$$slots.trailing || error}
					use:useActions={use}
					use:forwardEvents
					{...exclude($$props, ['use', 'class'])}
				/>

				<slot name="leading" />

				{#if $$slots.trailing && !error}
					<slot name="trailing" />
				{:else if error}
					<span
						class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-danger"
					>
						<Icon path={errorIcon} />
					</span>
				{/if}
			</div>
			{#if error}
				<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
			{/if}
		</div>

		<input
			type="text"
			{name}
			id={name}
			tabindex="-1"
			readonly={true}
			class="h-0 w-0 invisible hidden"
			bind:value
		/>
	</svelte:fragment>
	<div
		slot="items"
		class="z-10 absolute inline-block"
		class:-mt-7={error}
		in:scale={{ start: 0.9, duration: 100, delay: 150 }}
		out:scale={{ start: 0.95, duration: 75 }}
	>
		<DatePicker
			on:focusout={onFocusOut}
			handleSelect={onSelect}
			bind:value={$store}
			min={min ? dayjs(min) : undefined}
			max={max ? dayjs(max) : undefined}
			{locale}
			{closeOnSelect}
		/>
	</div>
</Dropdown>
