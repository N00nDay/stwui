<script lang="ts">
	export let name: string;
	export let value: string;
	export let label: string;
	export let description: string | undefined = undefined;
	export let inline = false;
</script>

<div class="relative flex items-start">
	<div class="flex items-center h-5">
		<input
			id={name}
			{name}
			type="checkbox"
			{value}
			class="checkbox checked:bg-primary dark:checked:bg-primary hover:border-primary dark:hover:border-primary bg-light-surface dark:bg-dark-surface h-6 w-6 text-primary light-border dark:dark-border rounded-md cursor-pointer transition-all duration-150"
		/>
	</div>
	<div class="ml-3 text-sm">
		<label
			for={name}
			class="font-medium text-light-content dark:text-dark-content cursor-pointer transition-all duration-150"
			>{label}</label
		>
		{#if description && !inline}
			<p
				id="{name}-description"
				class="text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
			>
				{description}
			</p>
		{:else if description}
			<span
				id="{name}-description"
				class="text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
				><span class="sr-only">{label} </span> | {description}</span
			>
		{/if}
	</div>
</div>

<style>
	.checkbox:checked {
		animation: checkmark 200ms ease-in-out;
	}

	@keyframes checkmark {
		0% {
			background-position-y: 5px;
		}
		50% {
			background-position-y: -2px;
		}
		100% {
			background-position-y: 0px;
		}
	}
</style>
