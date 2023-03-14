<script lang="ts">
	import { setContext } from 'svelte';

	export let name: string;
	export let on = false;

	$: width = $$slots['left-icon'] || $$slots['right-icon'] ? 'w-[48px]' : 'w-[2.8rem]';
	$: translate =
		on && ($$slots['left-icon'] || $$slots['right-icon'])
			? 'translate-x-[calc(100%+0.1rem)]'
			: !on
			? 'translate-x-[0.1rem]'
			: 'translate-x-[calc(100%-0.1rem)]';

	function toggle() {
		on = !on;
	}

	function toggleOn() {
		on = true;
	}

	function toggleOff() {
		on = false;
	}

	setContext('toggle-name', name);
	setContext('toggle-on', toggleOn);
	setContext('toggle-off', toggleOff);
</script>

<div class="flex items-center">
	<slot name="content-left" />
	<div
		class="border border-border relative inline-flex flex-shrink-0 h-[1.6rem] rounded-full cursor-pointer outline-none focus:outline-none {width}"
	>
		<button
			aria-label="toggle"
			on:click={toggle}
			type="button"
			class="relative inline-flex items-center justify-between flex-shrink-0 h-full w-full border-2 border-transparent rounded-full cursor-pointer ease-in-out outline-none focus:outline-none"
			class:bg-default={!on}
			class:bg-primary={on}
		>
			<span
				aria-hidden="true"
				class="relative z-10 inline-block bg-surface h-5 w-5 rounded-full shadow transform transition-transform ease-in-out duration-150 border border-border {translate}"
			/>
			<input type="checkbox" class="hidden" {name} id={name} checked={on} />
			{#if $$slots['left-icon']}
				<span class="text-sm absolute left-0.5 flex items-center justify-center h-4 w-4">
					<slot name="left-icon" />
				</span>
			{/if}
			{#if $$slots['right-icon']}
				<span class="text-sm absolute right-0.5 flex items-center justify-center h-4 w-4">
					<slot name="right-icon" />
				</span>
			{/if}
		</button>
	</div>
	<slot name="content-right" />
</div>
