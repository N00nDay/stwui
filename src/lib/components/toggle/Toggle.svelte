<script lang="ts">
	export let name: string;
	export let labelLeft: string | undefined = undefined;
	export let labelRight: string | undefined = undefined;
	export let descriptionLeft: string | undefined = undefined;
	export let descriptionRight: string | undefined = undefined;
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
</script>

<div class="flex items-center">
	{#if labelLeft}
		<span class="mr-3" id="{name}-label-left" on:click={toggleOff}>
			<span class="text-sm font-medium text-light-content dark:text-dark-content"
				>{labelLeft}
			</span>
			{#if descriptionLeft}
				<span class="text-sm text-light-secondary-content dark:text-dark-secondary-content"
					>{descriptionLeft}</span
				>
			{/if}
		</span>
	{/if}
	<div
		class="border light-border dark:dark-border relative inline-flex flex-shrink-0 h-[1.6rem] w-[2.8rem] rounded-full cursor-pointer transition-all duration-150 outline-none focus:outline-none"
	>
		<button
			on:click={toggle}
			type="button"
			class="relative inline-flex flex-shrink-0 h-full w-full border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-150 outline-none focus:outline-none"
			class:bg-light-icon-background={!on}
			class:dark:bg-dark-background={!on}
			class:bg-primary={on}
			role="switch"
		>
			<span
				aria-hidden="true"
				class="inline-block bg-light-surface dark:bg-dark-surface h-5 w-5 rounded-full shadow transform transition-all ease-in-out duration-150 border light-border dark:dark-border"
				class:translate-x-[1.1rem]={on}
				class:translate-x-0={!on}
			/>
			<input type="checkbox" class="hidden" {name} id={name} checked={on} />
		</button>
	</div>
	{#if labelRight}
		<span class="ml-3" id="{name}-label-right" on:click={toggleOn}>
			<span class="text-sm font-medium text-light-content dark:text-dark-content"
				>{labelRight}
			</span>
			{#if descriptionRight}
				<span class="text-sm text-light-secondary-content dark:text-dark-secondary-content"
					>{descriptionRight}</span
				>
			{/if}
		</span>
	{/if}
</div>
