<script lang="ts" context="module">
	export interface IExtra {
		label?: string;
		icon?: MaterialIcons;
		leading?: MaterialIcons;
		trailing?: MaterialIcons;
		type?: 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'text' | 'dark';
		shape?: 'square' | 'circle' | 'rounded' | 'pill';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab';
		class?: string;
		onClick: () => void;
		placement?: 'start' | 'center' | 'end';
	}

	export interface IListItem {
		avatar?: string;
		title?: string;
		description?: string;
		extra?: IExtra;
	}
</script>

<script lang="ts">
	import { LIST_CONTEXT_ID } from './List.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import type MaterialIcons from '../../types/material-icons';
	import { Button } from '../button';

	export let avatar: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let extra: IExtra | undefined = undefined;

	useContext({
		context_id: LIST_CONTEXT_ID,
		parent: 'List',
		component: 'ListItem'
	});
	const { bordered } = getContext(LIST_CONTEXT_ID);
</script>

<li
	class="flex py-4{$$props.class ? ` ${$$props.class}` : ''}"
	style={$$props.style}
	class:px-3={bordered}
>
	{#if avatar}
		<img class="h-10 w-10 rounded-full" src={avatar} alt="" />
	{/if}
	{#if title || description}
		<div
			class="ml-3 flex flex-grow"
			class:flex-col={title || description}
			class:justify-center={title || description}
			class:items-start={title || description}
		>
			{#if title}
				<p
					class="text-sm font-medium text-light-content dark:text-dark-content transition-all duration-150"
					class:mb-0={!description}
				>
					{title}
				</p>
			{/if}
			{#if description}
				<p
					class="text-sm mb-0 text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150"
				>
					{description}
				</p>
			{/if}
		</div>
	{/if}
	{#if extra}
		<div
			class="ml-3 flex justify-end flex-shink"
			class:items-start={extra.placement === 'start'}
			class:items-center={extra.placement === 'center'}
			class:items-end={extra.placement === 'end'}
		>
			<Button
				on:click={extra.onClick}
				icon={extra.icon}
				leading={extra.leading}
				trailing={extra.trailing}
				type={extra.type}
				shape={extra.shape}
				size={extra.size}
				class={extra.class}
				>{#if extra.label}{extra.label}{/if}</Button
			>
		</div>
	{/if}
</li>
