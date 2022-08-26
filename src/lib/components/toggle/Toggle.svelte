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
		class="border border-light-icon-background dark:border-dark-icon-background relative inline-flex flex-shrink-0 h-[1.6rem] w-[2.8rem] rounded-full cursor-pointer transition-all duration-150 outline-none focus:outline-none"
	>
		<button
			on:click={toggle}
			type="button"
			class="bg-light-icon-background dark:bg-dark-background relative inline-flex flex-shrink-0 h-full w-full border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-200 outline-none focus:outline-none"
			class:bg-primary={on}
			role="switch"
		>
			<span
				aria-hidden="true"
				class="inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200 border border-light-icon-background dark:border-dark-icon-background"
				class:translate-x-5={on}
				class:translate-x-0={!on}
				class:bg-primary={on}
				class:bg-light-surface={!on}
				class:dark:bg-dark-surface={!on}
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
