<script lang="ts" context="module">
	export const TOGGLE_CONTEXT_ID = 'toggle-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	export let name: string;
	export let on = false;

	function toggle() {
		on = !on;
	}

	function toggleOn() {
		on = true;
	}

	function toggleOff() {
		on = false;
	}

	setContext(TOGGLE_CONTEXT_ID, {
		toggle: true,
		name,
		toggleOn,
		toggleOff
	});
</script>

<div class="flex items-center">
	<slot name="content-left" />
	<div
		class="border light-border dark:dark-border relative inline-flex flex-shrink-0 h-[1.6rem] w-[2.8rem] rounded-full cursor-pointer outline-none focus:outline-none"
	>
		<button
			on:click={toggle}
			type="button"
			class="relative inline-flex flex-shrink-0 h-full w-full border-2 border-transparent rounded-full cursor-pointer ease-in-out outline-none focus:outline-none"
			class:bg-light-icon-background={!on}
			class:dark:bg-dark-background={!on}
			class:bg-primary={on}
		>
			<span
				aria-hidden="true"
				class="relative z-10 inline-block bg-light-surface dark:bg-dark-surface h-5 w-5 rounded-full shadow transform transition-transform ease-in-out duration-150 border light-border dark:dark-border"
				class:translate-x-[1.1rem]={on}
				class:translate-x-0={!on}
			/>
			<input type="checkbox" class="hidden" {name} id={name} checked={on} />
			<slot name="left-icon" />
			<slot name="right-icon" />
		</button>
	</div>
	<slot name="content-right" />
</div>
