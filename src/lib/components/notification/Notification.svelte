<script lang="ts" context="module">
	import type MaterialIcons from '../../types/material-icons';

	export interface IExtra {
		label?: string;
		trailing?: MaterialIcons;
		leading?: MaterialIcons;
		icon?: MaterialIcons;
		type?: 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'text' | 'dark';
		shape?: 'square' | 'circle' | 'rounded';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab';
		onClick: () => void;
	}
</script>

<script lang="ts">
	import Button from '../button/Button.svelte';
	import Avatar from '../media/Avatar.svelte';

	export let title: string | undefined = undefined;
	export let description: string;
	export let icon: MaterialIcons | undefined = undefined;
	export let avatar: string | undefined = undefined;
	export let onClose: (() => void) | undefined = undefined;
	export let type: 'info' | 'warn' | 'error' | 'success' | undefined = undefined;
	export let extra: IExtra | undefined = undefined;
	export let iconColor: string | undefined = undefined;

	let typeIcon = 'info';
	if (type === 'warn') {
		typeIcon = 'warning';
	} else if (type === 'success') {
		typeIcon = 'check_circle';
	} else if (type === 'error') {
		typeIcon = 'cancel';
	}
</script>

<div
	on:click
	class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-light-surface dark:bg-dark-surface shadow-lg border light-border dark:dark-border dark:shadow-black transition-all duration-150"
>
	<div class="p-4" class:p-2={!title}>
		<div class="flex items-start" class:items-center={!title}>
			<div class="flex-shrink-0 text-light-content dark:text-dark-content">
				{#if type}
					<span
						class="material-icons transition-all duration-150"
						class:text-info-icon={type === 'info'}
						class:text-warn-icon={type === 'warn'}
						class:text-success-icon={type === 'success'}
						class:text-error-icon={type === 'error'}>{typeIcon}</span
					>
				{:else if icon}
					<span class="material-icons transition-all duration-150{iconColor ? ` ${iconColor}` : ''}"
						>{icon}</span
					>
				{:else if avatar}
					<Avatar src={avatar} />
				{/if}
			</div>
			<div class="ml-3 w-0 flex-1 pt-0.5">
				{#if title}
					<p
						class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
					>
						{title}
					</p>
				{/if}
				<p
					class="text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
					class:mt-1={title}
				>
					{description}
				</p>
			</div>
			{#if onClose}
				<div class="ml-4 flex flex-shrink-0">
					<Button
						icon="close"
						shape="circle"
						class="top-[-0.5rem] right-[-0.5rem]"
						on:click={onClose}
					/>
				</div>
			{:else if extra}
				<Button
					icon={extra.icon}
					shape={extra.shape}
					leading={extra.leading}
					trailing={extra.trailing}
					type={extra.type ? extra.type : 'primary'}
					size={extra.size ? extra.size : 'xs'}
					>{#if extra.label}{extra.label}{/if}</Button
				>
			{/if}
		</div>
	</div>
</div>
