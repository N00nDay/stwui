<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import type { Locale } from './locale';
	import DatePicker from './DatePicker.svelte';
	import { writable, type Writable } from 'svelte/store';
	import dayjs, { Dayjs } from 'dayjs';
	import Dropdown from '../dropdown';
	import Icon from '../icon';
	import { error as errorIcon, close } from '../../icons';
	import { get_current_component, setContext } from 'svelte/internal';
	import { floatingUI, forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import type { DatePickerAction } from '../../types';
	import Portal from '../portal/Portal.svelte';
	import Drawer from '../drawer/Drawer.svelte';
	import { onMount } from 'svelte';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let input: HTMLInputElement;
	let valueInput: HTMLInputElement;

	export let showTime = false;
	export let name: string;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: Date | null = null;
	export let min: Date | undefined = undefined;
	export let max: Date | undefined = undefined;
	export let format = showTime ? 'MMMM D, YYYY @ h:mm A' : 'MMMM D, YYYY';
	export let locale: Locale = {};
	export let visible = false;
	export let closeOnSelect = true;
	// export let handleSelect: ((d: Date) => void) | undefined = undefined;
	export let tabindex: number | null | undefined = undefined;
	export let allowClear = false;
	export let disabled = false;
	export let minuteStep = 1;
	export let actions: DatePickerAction[] = [];
	export let mobile = false;

	let valueDayJS: Dayjs | null;
	let text: string | undefined;

	// $: {
	// 	valueDayJS = value === null ? null : dayjs(value);
	// 	text = valueDayJS?.format(format);
	// 	if (input && input.value) {
	// 		input.value = text || '';
	// 	}
	// }

	let currentError: Writable<string | undefined> = writable(error);
	$: currentError.set(error);

	function onFocusOut(event: unknown) {
		const e = event as FocusEvent;
		if (
			e?.currentTarget instanceof HTMLElement &&
			e.relatedTarget &&
			e.relatedTarget instanceof Node &&
			e.currentTarget.contains(e.relatedTarget)
		) {
			return;
		} else if (
			e?.target instanceof HTMLButtonElement &&
			(e.target.id.includes('hour') ||
				e.target.id.includes('minute') ||
				e.target.id.includes('meridian'))
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
		} else if (e.key === 'Tab') {
			visible = !visible;
		}
	}

	function onSelect(d: Dayjs) {
		value = new Date(d.toISOString());
		valueInput.value = value.toISOString();

		valueDayJS = dayjs(value);
		text = valueDayJS?.format(format);

		// input.dispatchEvent(new Event('change', { bubbles: true }));
		valueInput.dispatchEvent(new Event('change', { bubbles: true }));
		// if (handleSelect) handleSelect(value);
		if (closeOnSelect && !showTime) {
			visible = false;
		}
	}

	function handleClose() {
		visible = false;
	}

	function handleOpen() {
		if (!disabled) {
			visible = true;
		}
	}

	function handleClear() {
		value = null;
		input.value = '';
		valueInput.value = '';

		valueDayJS = null;
		text = undefined;

		// input.dispatchEvent(new Event('change', { bubbles: true }));
		valueInput.dispatchEvent(new Event('change', { bubbles: true }));
	}

	setContext('datepicker-name', name);
	setContext('datepicker-error', currentError);

	onMount(() => {
		valueDayJS = value === null ? null : dayjs(value);
		text = valueDayJS?.format(format);
		if (input && input.value) {
			input.value = text || '';
		}
	});
</script>

{#if !mobile}
	<div class={$$props.class} style={$$props.style}>
		<slot name="label" />
		<Dropdown {handleClose} on:focusout={onFocusOut} on:keydown={keydown} {visible} class="w-full">
			<svelte:fragment slot="trigger">
				<div
					class="mt-1 relative rounded-md h-[2.5rem]"
					class:opacity-75={disabled}
					class:text-danger={error}
				>
					<input
						type="text"
						{name}
						id={name}
						tabindex="-1"
						readonly={true}
						class="h-0 w-0 invisible hidden"
						{disabled}
						bind:value
						bind:this={valueInput}
						on:change
						use:useActions={use}
						use:forwardEvents
						{...exclude($$props, ['use', 'class'])}
					/>
					<input
						bind:this={input}
						readonly={true}
						autocomplete="off"
						name="{name}-visual"
						id="{name}-visual"
						bind:value={text}
						{tabindex}
						{placeholder}
						{disabled}
						type="text"
						on:focus={handleOpen}
						on:mousedown={handleOpen}
						on:keydown={keydown}
						class="block h-[2.5rem] w-full px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-surface placeholder-secondary-content placeholder-opacity-80"
						class:border-border={!error}
						class:border-danger={error}
						class:text-danger={error}
						class:placeholder-danger={error}
						class:focus:border-red-500={error}
						class:focus:border-primary={!error}
						class:group-focus-within:border-red-500={error}
						class:group-focus-within:border-primary={!error}
						class:group-active:border-red-500={error}
						class:group-active:border-primary={!error}
						class:bg-default={disabled}
						class:pl-10={$$slots.leading}
						class:pr-10={$$slots.trailing || error || allowClear}
					/>

					{#if allowClear && value}
						<button
							aria-label="clear"
							on:click={handleClear}
							class="absolute inset-y-0 group-focus-within:flex active:flex items-center"
							class:right-10={$$slots.trailing || error}
							class:right-3={!$$slots.trailing && !error}
						>
							<span transition:scale|local class="items-center flex">
								<Icon data={close} />
							</span>
						</button>
					{/if}

					{#if $$slots.leading}
						<span
							class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
							class:text-danger={error}
						>
							<slot name="leading" />
						</span>
					{/if}

					{#if $$slots.trailing && !error}
						<span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<slot name="trailing" />
						</span>
					{:else if error}
						<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<Icon data={errorIcon} />
						</span>
					{/if}
				</div>
				{#if error}
					<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
				{/if}
			</svelte:fragment>
			<div
				slot="items"
				use:floatingUI={{ placement: 'bottom-start', offset: 8 }}
				class="z-10 absolute inline-block"
				class:-mt-7={error}
				in:scale={{ start: 0.9, duration: 100, delay: 150 }}
				out:scale={{ start: 0.95, duration: 75 }}
			>
				<DatePicker
					on:focusout={onFocusOut}
					handleSelect={onSelect}
					bind:value={valueDayJS}
					min={min ? dayjs(min) : undefined}
					max={max ? dayjs(max) : undefined}
					{locale}
					{closeOnSelect}
					{handleClose}
					{handleClear}
					{showTime}
					step={minuteStep}
					{actions}
					{format}
				/>
			</div>
		</Dropdown>
	</div>
{:else}
	<div class={$$props.class} style={$$props.style}>
		<slot name="label" />
		<!-- <Dropdown {handleClose} on:focusout={onFocusOut} on:keydown={keydown} {visible} class="w-full"> -->
		<!-- <svelte:fragment slot="trigger"> -->
		<div
			class="mt-1 relative rounded-md h-[2.5rem]"
			class:opacity-75={disabled}
			class:text-danger={error}
		>
			<input
				type="text"
				{name}
				id={name}
				tabindex="-1"
				readonly={true}
				class="h-0 w-0 invisible hidden"
				{disabled}
				bind:value
				bind:this={valueInput}
				on:change
				use:useActions={use}
				use:forwardEvents
				{...exclude($$props, ['use', 'class'])}
			/>
			<input
				bind:this={input}
				readonly={true}
				autocomplete="off"
				name="{name}-visual"
				id="{name}-visual"
				bind:value={text}
				{tabindex}
				{placeholder}
				{disabled}
				type="text"
				on:focus={handleOpen}
				on:mousedown={handleOpen}
				on:keydown={keydown}
				class="block h-[2.5rem] w-full px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-surface placeholder-secondary-content placeholder-opacity-80"
				class:border-border={!error}
				class:border-danger={error}
				class:text-danger={error}
				class:placeholder-danger={error}
				class:focus:border-red-500={error}
				class:focus:border-primary={!error}
				class:group-focus-within:border-red-500={error}
				class:group-focus-within:border-primary={!error}
				class:group-active:border-red-500={error}
				class:group-active:border-primary={!error}
				class:bg-default={disabled}
				class:pl-10={$$slots.leading}
				class:pr-10={$$slots.trailing || error || allowClear}
			/>

			{#if allowClear && value}
				<button
					aria-label="clear"
					on:click={handleClear}
					class="absolute inset-y-0 group-focus-within:flex active:flex items-center"
					class:right-10={$$slots.trailing || error}
					class:right-3={!$$slots.trailing && !error}
				>
					<span transition:scale|local class="items-center flex">
						<Icon data={close} />
					</span>
				</button>
			{/if}

			{#if $$slots.leading}
				<span
					class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
					class:text-danger={error}
				>
					<slot name="leading" />
				</span>
			{/if}

			{#if $$slots.trailing && !error}
				<span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
					<slot name="trailing" />
				</span>
			{:else if error}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<Icon data={errorIcon} />
				</span>
			{/if}
		</div>
		{#if error}
			<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
		{/if}
		<!-- </svelte:fragment> -->
		<!-- <div
				slot="items"
				use:floatingUI={{ placement: 'bottom-start', offset: 8 }}
				class="z-10 absolute inline-block"
				class:-mt-7={error}
				in:scale={{ start: 0.9, duration: 100, delay: 150 }}
				out:scale={{ start: 0.95, duration: 75 }}
			>
				<DatePicker
					on:focusout={onFocusOut}
					handleSelect={onSelect}
					bind:value={valueDayJS}
					min={min ? dayjs(min) : undefined}
					max={max ? dayjs(max) : undefined}
					{locale}
					{closeOnSelect}
					{handleClose}
					{handleClear}
					{showTime}
					step={minuteStep}
					{actions}
					{format}
				/>
			</div> -->
		<!-- </Dropdown> -->
	</div>

	<Portal>
		{#if visible}
			<Drawer {handleClose} placement="bottom" class="datepicker-mobile">
				<DatePicker
					on:focusout={onFocusOut}
					handleSelect={onSelect}
					bind:value={valueDayJS}
					min={min ? dayjs(min) : undefined}
					max={max ? dayjs(max) : undefined}
					{locale}
					{closeOnSelect}
					{handleClose}
					{handleClear}
					{showTime}
					step={minuteStep}
					{actions}
					{format}
					{mobile}
				/>
			</Drawer>
		{/if}
	</Portal>
{/if}
