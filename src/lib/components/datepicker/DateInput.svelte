<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { Locale } from './locale';
	import DatePicker from './DatePicker.svelte';
	import { writable } from 'svelte/store';
	import dayjs, { Dayjs } from 'dayjs';
	import Input from '../input';
	import Dropdown from '../dropdown';
	import type { MaterialIcon } from '../../types';

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

	export let trailing: MaterialIcon | undefined = 'calendar_month';
	export let name: string;
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: Date | null = null;
	export let min: Date | undefined = undefined;
	export let max: Date | undefined = undefined;
	export let format = 'MMMM D, YYYY';
	export let locale: Locale = {};
	export let text = $store?.format(format) ?? '';
	export let visible = false;
	// export let closeOnSelection = true;
	export let closeOnSelect = true;
	export let handleSelect: ((d: Dayjs) => void) | undefined = undefined;

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
</script>

<Dropdown
	{handleClose}
	on:click={handleOpen}
	on:focusout={onFocusOut}
	on:keydown={keydown}
	{visible}
	class="w-full"
>
	<svelte:fragment slot="trigger">
		<Input
			readonly={true}
			autocomplete="off"
			name="{name}-visual"
			id="{name}-visual"
			{label}
			{srOnly}
			class="block w-full outline-none ring-0 focus:ring-0 sm:text-sm rounded-md bg-light-surface dark:bg-dark-surface"
			{placeholder}
			type="text"
			bind:value={text}
			on:focus={handleOpen}
			on:mousedown={handleOpen}
			on:keydown={keydown}
			{trailing}
			{error}
		/>
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
