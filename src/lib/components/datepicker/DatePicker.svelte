<script lang="ts">
	import { getCalendarDays } from './date-utils';
	import { getInnerLocale } from './locale';
	import type { Locale } from './locale';
	import dayjs, { type Dayjs } from 'dayjs';
	import { fly } from 'svelte/transition';
	import Card from '../card';
	import Button from '../button';
	import TimePicker from './TimePicker.svelte';
	// import { breakpoints } from '$lib/stores';
	import type { DatePickerAction } from '../../types';

	export let value: Dayjs | null = null;
	export let handleSelect: (d: Dayjs) => void;
	export let min: Dayjs | undefined = undefined;
	export let max: Dayjs | undefined = undefined;
	export let locale: Locale = {};
	export let closeOnSelect = true;
	export let showTime = false;
	export let step: number;
	export let handleClose: () => void;
	export let handleClear: () => void;
	export let actions: DatePickerAction[] = [];
	export let format: string;
	export let mobile = false;

	const defaultDate = dayjs();
	let browseDate = value ? value : defaultDate;
	let transitionDirection: 'forward' | 'reverse' = 'forward';
	let iLocale = getInnerLocale(locale);
	let calendarDays: Dayjs[] = [];
	let hourSelected: string;
	let minuteSelected: string;
	let meridianSelected: string;
	// let hoursArray = [...Array(12).keys()];
	// let minutesArray = [...Array(60).keys()];
	// minutesArray = minutesArray.filter(x => x % step === 0);

	// let hourScroll: HTMLDivElement;
	// let minuteScroll: HTMLDivElement;
	// let meridianScroll: HTMLDivElement;

	function setValue(d: Dayjs) {
		if (!dayjs(d).isSame(value, 'day')) {
			browseDate = clamp(d);
			value = browseDate;
		}
	}

	function browse(d: Dayjs) {
		browseDate = clamp(d);
		if (value) {
			setValue(browseDate);
		}
	}

	function clamp(d: Dayjs) {
		if (max && d.isAfter(max)) {
			return max;
		} else if (min && d.isBefore(min)) {
			return min;
		} else {
			return d;
		}
	}

	function setYear(date: Dayjs, operation: 'add' | 'subtract') {
		browseDate = browseDate[operation](1, 'year');
		browse(browseDate);
		if (operation === 'add') {
			transitionDirection = 'forward';
		} else {
			transitionDirection = 'reverse';
		}
		updateCalendarDays();
	}

	function setMonth(date: Dayjs, operation: 'add' | 'subtract') {
		browseDate = browseDate[operation](1, 'month');
		browse(browseDate);
		if (operation === 'add') {
			transitionDirection = 'forward';
		} else {
			transitionDirection = 'reverse';
		}
		updateCalendarDays();
	}

	function updateCalendarDays() {
		calendarDays = getCalendarDays(browseDate, iLocale.weekStartsOn);
	}

	function selectDay(calendarDay: Dayjs) {
		if (dayIsInRange(calendarDay)) {
			const currentMonth = browseDate.month();
			browseDate = calendarDay;
			const newMonth = browseDate.month();
			if (currentMonth !== newMonth) {
				if (currentMonth === 0 && newMonth === 11) {
					transitionDirection = 'reverse';
				} else if (currentMonth === 11 && newMonth === 0) {
					transitionDirection = 'forward';
				} else if (currentMonth < newMonth) {
					transitionDirection = 'forward';
				} else {
					transitionDirection = 'reverse';
				}
				updateCalendarDays();
			}

			if (showTime) {
				if (format.includes('H')) {
					browseDate = browseDate
						.set('hour', parseInt(hourSelected))
						.set('minute', parseInt(minuteSelected));
				} else if (meridianSelected === 'AM') {
					browseDate = browseDate
						.set('hour', parseInt(hourSelected))
						.set('minute', parseInt(minuteSelected));
				} else {
					const hour = parseInt(hourSelected) + 12;
					browseDate = browseDate.set('hour', hour).set('minute', parseInt(minuteSelected));
				}
			}

			setValue(browseDate);
			handleSelect(browseDate);
		}
	}

	function dayIsInRange(calendarDay: Dayjs) {
		const minDate: Dayjs | undefined = min ? min : undefined;
		const maxDate: Dayjs | undefined = max ? max : undefined;
		if (!minDate && !maxDate) {
			return true;
		}
		if (minDate && maxDate) {
			return calendarDay.isAfter(minDate) && calendarDay.isBefore(maxDate);
		} else if (minDate) {
			return calendarDay.isAfter(minDate);
		} else if (maxDate) {
			return calendarDay.isBefore(maxDate);
		}
		return true;
	}

	function shiftKeydown(e: KeyboardEvent) {
		if (e.shiftKey && e.key === 'ArrowUp') {
			const newBrowseDate = browseDate.subtract(1, 'year');
			if (dayIsInRange(newBrowseDate)) {
				setYear(browseDate, 'subtract');
				transitionDirection = 'reverse';
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.shiftKey && e.key === 'ArrowDown') {
			const newBrowseDate = browseDate.add(1, 'year');
			if (dayIsInRange(newBrowseDate)) {
				setYear(browseDate, 'add');
				transitionDirection = 'forward';
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.shiftKey && e.key === 'ArrowLeft') {
			const newBrowseDate = browseDate.subtract(1, 'month');
			if (dayIsInRange(newBrowseDate)) {
				setMonth(browseDate, 'subtract');
				transitionDirection = 'reverse';
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.shiftKey && e.key === 'ArrowRight') {
			const newBrowseDate = browseDate.add(1, 'month');
			if (dayIsInRange(newBrowseDate)) {
				setMonth(browseDate, 'add');
				transitionDirection = 'forward';
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else {
			return false;
		}
		// e.preventDefault();
		updateCalendarDays();
		return true;
	}

	function keydown(e: KeyboardEvent) {
		e.preventDefault();
		e.stopPropagation();
		let shift = e.shiftKey || e.altKey;
		if ((e.target as HTMLElement)?.tagName === 'SELECT') {
			return;
		}
		const currentMonth = browseDate.month();
		if (shift) {
			shiftKeydown(e);
			return;
		} else if (e.key === 'ArrowUp') {
			const newBrowseDate = browseDate.subtract(7, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = newBrowseDate;
				setValue(browseDate);
				transitionDirection = 'reverse';
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.key === 'ArrowDown') {
			const newBrowseDate = browseDate.add(7, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = browseDate.add(7, 'days');
				transitionDirection = 'forward';
				setValue(browseDate);
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.key === 'ArrowLeft') {
			const newBrowseDate = browseDate.subtract(1, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = browseDate.subtract(1, 'day');
				transitionDirection = 'reverse';
				setValue(browseDate);
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.key === 'ArrowRight') {
			console.log('DatePicker ArrowRight');
			const newBrowseDate = browseDate.add(1, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = browseDate.add(1, 'day');
				transitionDirection = 'forward';
				setValue(browseDate);
			}
			// e.preventDefault();
			// e.stopPropagation();
		} else if (e.key === 'Enter') {
			browseDate = browseDate;
			// if (!showTime) {
			setValue(browseDate);

			handleSelect(browseDate);
			// }
			// e.preventDefault();
			// e.stopPropagation();
		} else {
			return;
		}
		if (currentMonth !== browseDate.month()) {
			updateCalendarDays();
		}
		// e.preventDefault();
	}

	function handleArrow(unit: 'year' | 'month', operation: 'add' | 'subtract') {
		if (unit === 'year') {
			const newBrowseDate = browseDate[operation](1, 'year');
			if (dayIsInRange(newBrowseDate)) {
				setYear(browseDate, operation);
			}
		} else if (unit === 'month') {
			const newBrowseDate = browseDate[operation](1, 'month');
			if (dayIsInRange(newBrowseDate)) {
				setMonth(browseDate, operation);
			}
		}
	}

	updateCalendarDays();

	function handleApply() {
		handleSelect(browseDate);
		handleClose();
	}

	function handleCancel() {
		value = null;
		handleClear();
		handleClose();
	}

	// TODO: add month/year picker
	// TODO: add month/year quick pick by clicking title
	// TODO: mobile date picker
</script>

<svelte:window on:keydown={keydown} />

<Card on:focusout tabindex="-1" class="h-full">
	<div
		class="h-full flex flex-col"
		class:w-full={mobile}
		class:w-[300px]={!mobile && (!showTime || showTime)}
		class:max-w-[300px]={!mobile && (!showTime || showTime)}
		class:w-[468px]={!mobile && showTime}
		class:max-w-[468px]={!mobile && showTime}
	>
		<div class="h-14 px-3 py-2 flex items-center w-full">
			<Button
				htmlType="button"
				ariaLabel="previous year"
				size="xs"
				shape="circle"
				tabindex="-1"
				class="mr-1 bg-default text-default-content border-none outline-none"
				on:click={() => handleArrow('year', 'subtract')}
			>
				<!-- <Button.Icon slot="icon" data={chevron_double_left} /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="svg-icon inline-block outline-none h-5 w-5 fill-current"
				>
					<title>chevron-double-left</title>
					<path
						d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"
					/>
				</svg>
			</Button>
			<Button
				htmlType="button"
				ariaLabel="previous month"
				size="xs"
				shape="circle"
				tabindex="-1"
				class="bg-default text-default-content border-none outline-none"
				on:click={() => handleArrow('month', 'subtract')}
			>
				<!-- <Button.Icon slot="icon" data={chevron_left} /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="svg-icon inline-block outline-none h-5 w-5 fill-current"
				>
					<title>chevron-left</title>
					<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
				</svg>
			</Button>
			<div class="flex-grow px-2 text-center font-medium relative overflow-hidden h-full">
				<!-- {#key calendarDays} -->
				<div class="absolute inset-0 flex items-center justify-center text-content">
					{iLocale.months[browseDate.month()]}
					{browseDate.year()}
				</div>
				<!-- {/key} -->
			</div>
			<Button
				htmlType="button"
				ariaLabel="next month"
				size="xs"
				shape="circle"
				tabindex="-1"
				class="bg-default text-default-content border-none outline-none"
				on:click={() => handleArrow('month', 'add')}
			>
				<!-- <Button.Icon slot="icon" data={chevron_right} /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="svg-icon inline-block outline-none h-5 w-5 fill-current"
				>
					<title>chevron-right</title>
					<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
				</svg>
			</Button>
			<Button
				htmlType="button"
				ariaLabel="next month"
				size="xs"
				shape="circle"
				tabindex="-1"
				class="ml-1 bg-default text-default-content border-none outline-none"
				on:click={() => handleArrow('year', 'add')}
			>
				<!-- <Button.Icon slot="icon" data={chevron_double_right} /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="svg-icon inline-block outline-none h-5 w-5 fill-current"
				>
					<title>chevron-double-right</title>
					<path
						d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
					/>
				</svg>
			</Button>
		</div>
		<div
			class="w-full overflow-hidden flex flex-row border-t border-border flex-grow"
			class:h-[calc(100%-3.5rem)]={mobile}
			class:h-[254px]={!mobile}
			class:max-h-[254px]={!mobile}
			class:max-w-[300px]={!mobile && !showTime}
			class:max-w-[468px]={!mobile && showTime}
		>
			<div class="flex-grow border-r border-border h-full">
				<div class="h-8 flex items-center justify-evenly px-3 pt-3 w-full">
					<!-- eslint-disable-next-line  @typescript-eslint/no-unused-vars -->
					{#each Array(7) as _, i}
						{#if i + iLocale.weekStartsOn < 7}
							<div class="w-10 text-center text-sm">
								{iLocale.weekdays[iLocale.weekStartsOn + i]}
							</div>
						{:else}
							<div class="w-10 text-center text-sm">
								{iLocale.weekdays[iLocale.weekStartsOn + i - 7]}
							</div>
						{/if}
					{/each}
				</div>

				<div class="overflow-hidden h-[calc(100%-2rem)] relative w-full">
					{#key calendarDays}
						<div
							class="absolute inset-0 p-3 h-full"
							in:fly|local={{ x: transitionDirection === 'forward' ? 250 : -250, duration: 250 }}
							out:fly|local={{ x: transitionDirection === 'forward' ? -250 : 250, duration: 250 }}
						>
							<!-- eslint-disable-next-line  @typescript-eslint/no-unused-vars -->
							{#each Array(5) as _, weekIndex}
								<div class="date-container flex items-center justify-evenly h-[20%]">
									{#each calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7) as calendarDay}
										{#if !dayIsInRange(calendarDay)}
											<span
												class="inactive w-10 flex items-center justify-center h-10 rounded-none bg-default first-of-type:rounded-l-3xl last-of-type:rounded-r-3xl"
											>
												<span>{calendarDay.date()}</span>
											</span>
										{:else}
											<button
												type="button"
												aria-label="{iLocale.months[
													browseDate.month()
												]} {calendarDay.date()} {browseDate.year()} "
												class="active w-10 flex items-center justify-center cursor-pointer h-10 rounded-full"
												on:click={() => selectDay(calendarDay)}
												class:text-primary-content={calendarDay.isSame(value, 'date')}
												class:hover:text-primary-content={calendarDay.isSame(value, 'date')}
												class:text-secondary-content={calendarDay.month() !== browseDate.month()}
												class:text-opacity-[0.5]={calendarDay.month() !== browseDate.month()}
												class:text-content={calendarDay.month() === browseDate.month()}
												class:hover:bg-hover={dayIsInRange(calendarDay) &&
													!calendarDay.isSame(value, 'date')}
												class:hover:bg-opacity-[0.07]={dayIsInRange(calendarDay) &&
													!calendarDay.isSame(value, 'date')}
												class:bg-hover={calendarDay.isSame(browseDate, 'date') &&
													!calendarDay.isSame(value, 'date')}
												class:bg-opacity-[0.07]={calendarDay.isSame(browseDate, 'date') &&
													!calendarDay.isSame(value, 'date')}
												class:border={calendarDay.isSame(defaultDate, 'day') &&
													!calendarDay.isSame(value, 'date')}
												class:border-primary={calendarDay.isSame(defaultDate, 'day') &&
													!calendarDay.isSame(value, 'date')}
												class:bg-primary={calendarDay.isSame(value, 'date')}
											>
												<span>{calendarDay.date()}</span>
											</button>
										{/if}
									{/each}
								</div>
							{/each}
						</div>
					{/key}
				</div>
			</div>
			{#if showTime && !mobile}
				<TimePicker
					bind:hourSelected
					bind:minuteSelected
					bind:meridianSelected
					bind:browseDate
					bind:closeOnSelect
					{step}
					{showTime}
					{setValue}
					{handleSelect}
					{format}
				/>
			{/if}
		</div>
		{#if showTime && mobile}
			<div class="gap-3 flex items-center justify-evenly w-full border-t border-border">
				<TimePicker
					bind:hourSelected
					bind:minuteSelected
					bind:meridianSelected
					bind:browseDate
					bind:closeOnSelect
					{step}
					{showTime}
					{setValue}
					{handleSelect}
					{format}
					mobile
				/>
			</div>
		{/if}
		{#if actions.length > 0}
			<div
				class="px-3 pt-3 pb-3 gap-3 flex items-center justify-start w-full border-t border-border overflow-x-auto overflow-y-hidden"
			>
				{#each actions as action}
					<Button
						htmlType="button"
						size="sm"
						type="primary"
						shape="pill"
						class="bg-default text-default-content"
						on:click={action.action}>{action.label}</Button
					>
				{/each}
			</div>
		{/if}
		{#if showTime || !closeOnSelect}
			<div class="p-3 gap-3 flex items-center justify-evenly w-full border-t border-border">
				<Button
					htmlType="button"
					class="w-full bg-default text-default-content"
					on:click={handleCancel}>Clear</Button
				>
				<Button htmlType="button" type="primary" class="w-full" on:click={handleApply}>Apply</Button
				>
			</div>
		{/if}
	</div>
</Card>

<style lang="postcss">
	.date-container > .inactive + .inactive {
		@apply rounded-none;
	}

	.date-container > .inactive:first-of-type {
		@apply rounded-l-3xl;
	}

	.date-container > .inactive:last-of-type {
		@apply rounded-r-3xl;
	}
</style>
