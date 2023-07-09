<script lang="ts">
	import type { Dayjs } from 'dayjs';
	import Button from '../button';
	import { onMount } from 'svelte';

	export let mobile = false;
	export let showTime: boolean;
	export let hourSelected: string;
	export let minuteSelected: string;
	export let meridianSelected: string;
	export let step: number;
	export let browseDate: Dayjs;
	export let closeOnSelect: boolean;
	export let setValue: (d: Dayjs) => void;
	export let handleSelect: (d: Dayjs) => void;

	let hoursArray = [...Array(12).keys()];
	let minutesArray = [...Array(60).keys()];
	minutesArray = minutesArray.filter((x) => x % step === 0);

	let hourScroll: HTMLDivElement;
	let minuteScroll: HTMLDivElement;
	let meridianScroll: HTMLDivElement;

	function handleSelectHour(hour: string) {
		hourSelected = hour;
		if (meridianSelected === 'AM') {
			browseDate = browseDate
				.set('hour', parseInt(hourSelected))
				.set('minute', parseInt(minuteSelected));
		} else {
			browseDate = browseDate
				.set('hour', parseInt(hourSelected) + 12)
				.set('minute', parseInt(minuteSelected));
		}
		setValue(browseDate);
		handleSelect(browseDate);
	}

	function handleSelectMinute(minute: string) {
		minuteSelected = minute;
		if (meridianSelected === 'AM') {
			browseDate = browseDate
				.set('hour', parseInt(hourSelected))
				.set('minute', parseInt(minuteSelected));
		} else {
			browseDate = browseDate
				.set('hour', parseInt(hourSelected) + 12)
				.set('minute', parseInt(minuteSelected));
		}
		setValue(browseDate);
		handleSelect(browseDate);
	}

	function handleSelectMeridian(meridian: string) {
		meridianSelected = meridian;
		if (meridianSelected === 'AM') {
			browseDate = browseDate
				.set('hour', parseInt(hourSelected))
				.set('minute', parseInt(minuteSelected));
		} else {
			browseDate = browseDate
				.set('hour', parseInt(hourSelected) + 12)
				.set('minute', parseInt(minuteSelected));
		}
		setValue(browseDate);
		handleSelect(browseDate);
	}

	function findClosestNumber(target: number, array: number[]) {
		return array.reduce((closest, current) => {
			var closestDiff = Math.abs(closest - target);
			var currentDiff = Math.abs(current - target);
			return currentDiff < closestDiff ? current : closest;
		});
	}

	function scrollIfNeeded(element: HTMLElement, container: HTMLDivElement) {
		if (mobile) {
			container.scrollTop = element.offsetTop - container.offsetTop;
		} else {
			container.scrollTop = element.offsetTop - container.offsetTop - 112;
		}
	}

	function convertNumberToMinuteString(n: number) {
		if (n < 10) {
			return `0${n}`;
		}
		return `${n}`;
	}

	onMount(() => {
		if (showTime) {
			closeOnSelect = false;
			hourSelected = browseDate.format('h');
			minuteSelected = convertNumberToMinuteString(
				findClosestNumber(parseInt(browseDate.format('mm')), minutesArray)
			);
			meridianSelected = browseDate.format('A');

			const hourEl = document.getElementById(`hour-${hourSelected}`);
			const minuteEl = document.getElementById(`minute-${minuteSelected}`);
			const meridianEl = document.getElementById(`meridian-${meridianSelected}`);

			if (hourEl) {
				scrollIfNeeded(hourEl, hourScroll);
			}

			if (minuteEl) {
				scrollIfNeeded(minuteEl, minuteScroll);
			}

			if (meridianEl) {
				scrollIfNeeded(meridianEl, meridianScroll);
			}
		}
	});
</script>

<div
	class="flex flex-row justify-evenly items-stretch divide-x divide-border"
	class:w-[168px]={!mobile}
	class:w-full={mobile}
	class:h-12={mobile}
>
	<div
		bind:this={hourScroll}
		class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
	>
		{#each hoursArray as hour}
			<Button
				id={`hour-${hour + 1}`}
				on:click={() => handleSelectHour(`${hour + 1}`)}
				class="w-full flex justify-center items-center snap-center"
				type={`${hour + 1}` === hourSelected ? 'primary' : undefined}>{hour + 1}</Button
			>
		{/each}
	</div>
	<div
		bind:this={minuteScroll}
		class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
	>
		{#each minutesArray as minute}
			<Button
				id={`minute-${minute < 10 ? `0${minute}` : minute}`}
				on:click={() => handleSelectMinute(`${minute < 10 ? `0${minute}` : minute}`)}
				class="w-full flex justify-center items-center snap-center"
				type={`${minute < 10 ? `0${minute}` : minute}` === minuteSelected ? 'primary' : undefined}
			>
				{minute < 10 ? `0${minute}` : minute}
			</Button>
		{/each}
	</div>
	<div
		bind:this={meridianScroll}
		class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
	>
		<Button
			id="meridian-AM"
			on:click={() => handleSelectMeridian('AM')}
			class="w-full flex justify-center items-center snap-center"
			type={'AM' === meridianSelected ? 'primary' : undefined}>AM</Button
		>
		<Button
			id="meridian-PM"
			on:click={() => handleSelectMeridian('PM')}
			class="w-full flex justify-center items-center snap-center"
			type={'PM' === meridianSelected ? 'primary' : undefined}>PM</Button
		>
	</div>
</div>
