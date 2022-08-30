<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface Extra {
		leading?: MaterialIcons;
		trailing?: MaterialIcons;
		label?: string;
		icon?: MaterialIcons;
		type?: 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'text' | 'dark';
		onClick: () => void;
	}
</script>

<script lang="ts">
	import Button from '../button/Button.svelte';

	export let type: 'info' | 'warn' | 'success' | 'error' = 'info';
	export let onClose: (() => void) | undefined = undefined;
	export let title: string;
	export let description: string | undefined = undefined;
	export let extra: Extra | undefined = undefined;

	let closeClass = 'text-info-icon dark:text-dark-info-icon';

	let typeIcon = 'info';
	if (type === 'warn') {
		typeIcon = 'warning';
		closeClass = 'text-warn-icon dark:text-dark-warn-icon';
	} else if (type === 'success') {
		typeIcon = 'check_circle';
		closeClass = 'text-success-icon dark:text-dark-success-icon';
	} else if (type === 'error') {
		typeIcon = 'cancel';
		closeClass = 'text-error-icon dark:text-dark-error-icon';
	}
</script>

<div
	class="rounded-md p-4 bg-opacity-20 dark:bg-opacity-20 transition-all duration-150"
	class:bg-info-background={type === 'info'}
	class:bg-warn-background={type === 'warn'}
	class:bg-success-background={type === 'success'}
	class:bg-error-background={type === 'error'}
>
	<div class="flex">
		<div class="flex-shrink-0 h-5 w-5 flex items-center justify-center">
			<span
				class="material-icons transition-all duration-150"
				class:text-info-icon={type === 'info'}
				class:text-warn-icon={type === 'warn'}
				class:text-success-icon={type === 'success'}
				class:text-error-icon={type === 'error'}>{typeIcon}</span
			>
		</div>
		<div class="ml-3 flex items-start justify-start flex-col w-full">
			<h3
				class="text-sm font-medium flex flex-row items-start justify-between w-full relative h-4 transition-all duration-150"
				class:text-info-content={type === 'info'}
				class:text-warn-content={type === 'warn'}
				class:text-success-content={type === 'success'}
				class:text-error-content={type === 'error'}
				class:dark:text-dark-info-content={type === 'info'}
				class:dark:text-dark-warn-content={type === 'warn'}
				class:dark:text-dark-success-content={type === 'success'}
				class:dark:text-dark-error-content={type === 'error'}
			>
				<span>{title}</span>
				{#if onClose}
					<Button
						icon="close"
						shape="circle"
						class="top-[-0.65rem] right-[-0.65rem] {closeClass}"
						on:click={onClose}
					/>
				{/if}
				{#if extra}
					<Button
						class="top-[-0.65rem] right-[-0.65rem] {closeClass}"
						leading={extra.leading}
						trailing={extra.trailing}
						icon={extra.icon}
						type={extra.type}
						on:click={extra.onClick}
					>
						{extra.label}
					</Button>
				{/if}
			</h3>
			{#if description}
				<div
					class="mt-2 text-sm transition-all duration-150"
					class:text-info-secondary-content={type === 'info'}
					class:text-warn-secondary-content={type === 'warn'}
					class:text-success-secondary-content={type === 'success'}
					class:text-error-secondary-content={type === 'error'}
					class:dark:text-dark-info-secondary-content={type === 'info'}
					class:dark:text-dark-warn-secondary-content={type === 'warn'}
					class:dark:text-dark-success-secondary-content={type === 'success'}
					class:dark:text-dark-error-secondary-content={type === 'error'}
				>
					<p>
						{description}
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
