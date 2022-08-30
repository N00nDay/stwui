<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface IButton {
		label?: string;
		icon?: MaterialIcons;
		onClick: () => void;
	}
</script>

<script lang="ts">
	import { Button } from '../button';

	export let icon: MaterialIcons;
	export let title: string;
	export let description: string;
	export let button: IButton;
</script>

<div class="text-center">
	<span
		class="material-icons text-light-icon dark:text-dark-icon mx-auto text-5xl transition-all duration-150"
		>{icon}</span
	>

	<h3
		class="mt-2 text-lg font-medium text-light-content dark:text-dark-content transition-all duration-150"
	>
		{title}
	</h3>
	<p
		class="mt-1 text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
	>
		{description}
	</p>
	<div class="mt-6">
		<Button type="primary" leading={button.icon}>
			{#if button.label}
				{button.label}
			{/if}
		</Button>
	</div>
</div>
