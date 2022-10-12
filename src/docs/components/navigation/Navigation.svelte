<script lang="ts">
	import { Badge, Menu } from '../../../lib';
	import { page } from '$app/stores';
	import { onMount } from 'svelte/internal';

	interface Item {
		title: string;
		href: string;
		beta?: boolean;
	}

	const sidebarItems: Item[] = [
		{
			title: 'Accordion',
			href: '/accordion'
		},
		{
			title: 'Alert',
			href: '/alert'
		},
		{
			title: 'Autocomplete',
			href: '/autocomplete',
			beta: true
		},
		{
			title: 'Avatar',
			href: '/avatar'
		},
		{
			title: 'AvatarGroup',
			href: '/avatar-group'
		},
		{
			title: 'Badge',
			href: '/badge'
		},
		{
			title: 'Breadcrumbs',
			href: '/breadcrumbs'
		},
		{
			title: 'Button',
			href: '/button'
		},
		{
			title: 'ButtonGroup',
			href: '/button-group'
		},
		{
			title: 'Card',
			href: '/card'
		},
		{
			title: 'Carousel',
			href: '/carousel'
		},
		{
			title: 'Checkbox',
			href: '/checkbox'
		},
		{
			title: 'Chip',
			href: '/chip'
		},
		{
			title: 'Datepicker',
			href: '/datepicker',
			beta: true
		},
		{
			title: 'Divider',
			href: '/divider'
		},
		{
			title: 'Drawer',
			href: '/drawer'
		},
		{
			title: 'Dropdown',
			href: '/dropdown'
		},
		{
			title: 'Empty',
			href: '/empty'
		},
		{
			title: 'Feed',
			href: '/feed'
		},
		{
			title: 'Input',
			href: '/input',
			beta: true
		},
		{
			title: 'List',
			href: '/list'
		},
		{
			title: 'Media',
			href: '/media'
		},
		{
			title: 'Menu',
			href: '/menu'
		},
		{
			title: 'Modal',
			href: '/modal'
		},
		{
			title: 'Notification',
			href: '/notification'
		},
		{
			title: 'Pagination',
			href: '/pagination',
			beta: true
		},
		{
			title: 'Post',
			href: '/post'
		},
		{
			title: 'Progress',
			href: '/progress'
		},
		{
			title: 'Radio',
			href: '/radio'
		},
		{
			title: 'Rating',
			href: '/rating'
		},
		{
			title: 'Select',
			href: '/select',
			beta: true
		},
		{
			title: 'Slider',
			href: '/slider'
		},
		{
			title: 'Statistic',
			href: '/statistic'
		},
		{
			title: 'Steps',
			href: '/steps'
		},
		{
			title: 'Swap',
			href: '/swap'
		},
		{
			title: 'Tabs',
			href: '/tabs'
		},
		{
			title: 'Table',
			href: '/table?orderBy=created_at&order=asc&page=1'
		},
		{
			title: 'Timeline',
			href: '/timeline'
		},
		{
			title: 'Toggle',
			href: '/toggle'
		}
	];

	export let handleClose: (() => void) | undefined = undefined;

	let active = '';

	function handleClick(item: string) {
		active = item;
		if (handleClose) {
			handleClose();
		}
	}

	onMount(() => {
		active = $page.url.pathname;
	});
</script>

<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2"
>
	GET STARTED
</h3>
<Menu {active}>
	<Menu.Item
		key="/installation"
		label="Installation"
		href="/installation"
		on:click={() => handleClick('/installation')}
	/>
</Menu>
<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	COMPONENTS
</h3>
<Menu {active}>
	{#each sidebarItems as item}
		{#if item.beta}
			<Menu.Item
				key={item.href}
				label={item.title}
				href={item.href}
				on:click={() => handleClick(item.href)}
			>
				<Badge slot="extra" type="error">BETA</Badge>
			</Menu.Item>
		{:else}
			<Menu.Item
				key={item.href}
				label={item.title}
				href={item.href}
				on:click={() => handleClick(item.href)}
			/>
		{/if}
	{/each}
</Menu>
<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	ACTIONS
</h3>
<Menu {active}>
	<Menu.Item
		key="/tooltip"
		label="tooltip"
		href="/tooltip"
		on:click={() => handleClick('/tooltip')}
	/>
</Menu>

<!-- <h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	UTILITIES
</h3>
<Menu {active}>
	<Menu.Item key="/types" label="Types" href="/types" on:click={() => handleClick('/types')} />
</Menu> -->

<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	TYPES
</h3>
<Menu {active}>
	<Menu.Item key="/types" label="Types" href="/types" on:click={() => handleClick('/types')} />
</Menu>
